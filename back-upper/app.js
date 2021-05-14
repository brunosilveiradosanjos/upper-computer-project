const express = require('express');
const morgan = require('morgan');
const assignmentRouter = require('./routes/assignmentRoutes');
const customerRouter = require('./routes/customerRoutes')

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/assignments', assignmentRouter);
app.use('/api/v1/customers', customerRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
})