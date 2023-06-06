const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes/v1');
const httpStatus = require('http-status')
const { ApiError } = require('./errors')
const { errorConverter, errorHandler } = require('./middlewares/error')


const app = express();
if(config.env === 'dev'){
    app.use(morgan.successHandler)
    app.use(morgan.errorHandler)
}

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(xss())
app.use(compression())

app.use(cors())
app.options("*", cors())

app.use("/v1", routes)


app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Page Not Founds"))
})

app.use(errorConverter)
app.use(errorHandler)

module.exports = app;
