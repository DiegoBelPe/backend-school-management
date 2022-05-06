const { Router } = require('express');
const {
  handlerAllGrade,
  handlerOneGrade,
  handlerDeleteGrade,
  handlerCreateGrade,
  handlerUpdateGrade,
  handlerCreateHomeWorkGrade,
} = require('./grade.controller');

const router = Router();

router.get('/', handlerAllGrade);
router.get('/:id', handlerOneGrade);
router.delete('/:id', handlerDeleteGrade);
router.post('/', handlerCreateGrade);
router.patch('/:id', handlerUpdateGrade);
router.patch('/homeWork/:id', handlerCreateHomeWorkGrade);

module.exports = router;
