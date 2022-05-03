const { Router } = require('express');
const {
  handlerAllStudent,
  handlerOneStudent,
  handlerDeleteStudent,
  handlerCreateStudent,
  handlerUpdateStudent,
  handlerCreateMessage,
} = require('./student.controller');

const router = Router();

router.get('/', handlerAllStudent);
router.get('/:id', handlerOneStudent);
router.delete('/:id', handlerDeleteStudent);
router.post('/', handlerCreateStudent);
router.patch('/:id', handlerUpdateStudent);
router.patch('/message/:id', handlerCreateMessage);
module.exports = router;
