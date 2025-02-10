const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loginForm', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Create a User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid email or password');
        }

        // Successful login, redirect or handle session
        console.log('Login successful');
        // ...
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/create-account', async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcryptjs.hash(password, 10);

        const user = new User({ email, password: hashedPassword });
        await user.save();

        // Successful account creation, redirect or handle login
        console.log('Account created successfully');
        // ...
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});