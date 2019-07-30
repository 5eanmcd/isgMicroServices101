module.exports = (app) => {

const application = require('../controllers/application.controller')

app.get('/', application.welcome);

app.get('/application/:applicationId', application.findOne)

app.get('/application', application.findAll)

app.post('/application', application.createApplication);

}