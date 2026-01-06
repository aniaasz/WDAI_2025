const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelize, User } = require('./db');

const app = express();
app.use(express.json());

sequelize.sync();
// sequelize.sync({ force: true });

app.post('/api/register', async (req, res) => {
    try{
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).send({error: 'Missing fields'});
        }

        if ( await User.findOne({where: {email}})){
            return res.status(400).send({error: 'Email already exists'});
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = await User.create({email, password: passwordHash});
        res.status(201).json({id: newUser.id});

    } catch (err) {
        console.error(err);
        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({error: 'Server Error'});
    }


});

app.post('/api/login', async (req, res) => {

    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: 'Missing fields'});
        }

        const user = await User.findOne({where: {email}});

        if (!user) {
            return res.status(401).json({error: 'Invalid email or password'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({error: 'Invalid password'});
        }

        const token = jwt.sign(
            {userId: user.id, email: user.email},
            'key', {expiresIn: '1h'}
        );

        res.json({token: token});

    } catch(err){
        console.error(err);
        res.status(500).json({error: 'Server Error'});
    }

});

app.listen(3003, () => {
    console.log('Users service listening on port 3003');
})