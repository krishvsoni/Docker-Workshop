import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const users = [
    { id: 1, name: 'Elon Musk', email: 'elon@example.com' },
    { id: 2, name: 'Jeff Bezos', email: 'jeff@example.com' },
    { id: 3, name: 'John Doe', email: 'john@example.com' },
    { id: 4, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 5, name: 'Tony Stark', email: 'tony@example.com' }
];

app.get('/', (req, res) => {
    res.json('your engine is running');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id, 10));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id, 10));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});