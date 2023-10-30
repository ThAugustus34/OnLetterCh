const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(morgan('dev')); // Logs incoming request details to the console.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the "Letters to the Future" API!');
});

app.post('/letter', (req, res) => {
    const { content, deliveryDate, recipientEmail } = req.body;

    // Here, operations to create the letter can be made.
    // For example, saving it to the blockchain or adding to a database.

    res.json({
        status: 'success',
        message: 'Letter has been created!',
        data: {
            content,
            deliveryDate,
            recipientEmail,
        },
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
