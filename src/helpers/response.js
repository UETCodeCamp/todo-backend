const LoggerServices = require("../services/LoggerServices");

exports.catchError = (req, res) => (error, status = 500) => {
    LoggerServices.error('RESPONSE_ERROR', error);

    const message = typeof error === 'string' ? error : error.message || '';

    return res.status(status).send({
        success: false,
        message
    });
};