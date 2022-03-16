
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5446;


app.use(express.static('client'));

// omitted express.json(); to show.
app.use(express.json());


app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
});