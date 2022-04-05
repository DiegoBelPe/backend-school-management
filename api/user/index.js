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

router.post('/', isAuthenticated(), handlerCreateUser);
router.get('/', isAuthenticated(), handlerGetAllUsers);
router.get('/:id', isAuthenticated(), handlerGetOneUser);
router.delete('/:id', isAuthenticated(), handlerDeleteOneUser);
router.patch('/:id', isAuthenticated(), handlerUpdateUser);

module.exports = router;
