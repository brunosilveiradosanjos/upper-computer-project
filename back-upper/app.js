const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const projectRouter = require('./routes/projectRoutes');
const customerRouter = require('./routes/customerRoutes')

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/customers', customerRouter);

module.exports = app;