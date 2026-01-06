const express = require('express');
const axios = require('axios');
const { sequelize, Order } = require('./db');
const auth = require('./auth');

const app = express();
app.use(express.json());

sequelize.sync();
// sequelize.sync({ force: true });


app.get('/api/orders/:userId', async (req, res) => {
    const { userId } = req.params;
    const orders = await Order.findAll({where: { userId: userId}});
    res.json(orders);

})

app.post("/api/orders", auth, async (req, res) => {
    try {
        const { userId, bookId, quantity } = req.body;

        if (!userId || !bookId || !quantity) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        const bookResponse = await axios.get(
            `http://localhost:3001/api/books/${bookId}`
        );


        const newOrder = await Order.create({ userId, bookId, quantity });
        res.status(201).json({ id: newOrder.id });
    } catch (err) {
        if (err.response && err.response.status === 404) {
            return res.status(400).json({ error: 'Book does not exist' });
        }
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }

});

app.delete("/api/orders/:orderId", auth,async (req, res) => {

    try {
        const { orderId } = req.params;

        const deletedCount = await Order.destroy({ where: { id: orderId } });

        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
})

app.patch("/api/orders/:orderId", auth, async (req, res) => {

    try {
        const { orderId } = req.params;
        const { quantity } = req.body;

        if (quantity == null) {
            return res.status(400).json({ error: 'Missing quantity' });
        }

        const [updatedCount] = await Order.update(
            { quantity },
            { where: { id: orderId } }
        );

        if (updatedCount === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json({ message: 'Order updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }

})


app.listen(3002, () => {
    console.log('Orders service listening on port 3002');
});