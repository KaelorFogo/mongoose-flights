var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:flightId/tickets/new (new Functionality)
router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);
//POST /flights/:flightId (create functionality)
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;