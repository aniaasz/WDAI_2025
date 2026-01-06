const express = require('express');
const { sequelize, Book } = require('./db');
const auth = require('./auth');

const app = express();
app.use(express.json());

sequelize.sync();
// sequelize.sync({ force: true });

app.get('/api/books', async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
})

app.get('/api/books/:bookId', async (req, res) => {
    const { bookId } = req.params;
    const book = await Book.findByPk(bookId);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
})

app.post('/api/books', auth,async (req, res) => {

    try {
        const { title, author, year } = req.body;

        if (!title || !author || !year) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        const newBook = await Book.create({ title, author, year });
        res.status(201).json({ id: newBook.id });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }

});

app.delete('/api/books/:bookId', auth,async (req, res) => {
    try {
        const { bookId } = req.params;

        const deletedCount = await Book.destroy({ where: { id: bookId } });

        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});



app.listen(3001, () => {
    console.log('Books service listening on port 3001');
});
