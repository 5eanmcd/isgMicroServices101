const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema(
{
    applicationId: String,
    status: String
},
{
    timestamp: true
});

module.exports = mongoose.model('Application', ApplicationSchema);