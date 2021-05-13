const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Hello world!' })
})

const port = 3001;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
})