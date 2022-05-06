const { Router } = require('express');
const {
handlerAllEvents,
handlerDeleteEvent,
handlerCreateEvent,
handlerUpdateEvent,
} = require('./calendar.controller');

const router = Router();

router.get('/', handlerAllEvents);
router.post('/', handlerCreateEvent);
router.patch('/:id', handlerUpdateEvent);
router.delete('/:id', handlerDeleteEvent);


module.exports = router;
