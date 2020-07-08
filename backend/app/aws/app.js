const express = require('express');
const aws = require('./aws');

const app = express()

app.use(aws);