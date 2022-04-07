const { Router } = require('express');
// const { route } = require('express/lib/application');

const {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerDeleteOneUser,
  handlerUpdateUser,
} = require('./user.controller');

const { isAuthenticated, hasRole } = require('../../auth/auth.service');

const router = Router();

router.post('/', hasRole(['admin']), handlerCreateUser);
router.get('/', hasRole(['admin']), handlerGetAllUsers);
router.get('/:id', hasRole(['admin']), handlerGetOneUser);
router.delete('/:id', hasRole(['admin']), handlerDeleteOneUser);
router.patch('/:id', hasRole(['admin']), handlerUpdateUser);

module.exports = router;
