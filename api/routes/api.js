var router = require('express').Router();
var show = require('./show.js');
var ticket = require('./ticket.js');
var schedule = require('./schedule.js');

router.use('/show', show);
router.use('/ticket', ticket);
router.use('/schedule', schedule);

module.exports = router