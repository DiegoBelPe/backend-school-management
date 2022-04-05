const {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  deleteUser,
  updateUser,
} = require('./user.service');

async function handlerCreateUser(req, res) {

  const newUser = {
    ...req.body
  };

  try {
    const user = await createUser(newUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllUsers(req, res) {

  try{
    const users = await getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetUserByEmail(req, res) {
  const { email } = req.body;
  const user = getUserByEmail(email);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json(user);
}

async function handlerGetOneUser(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function handlerDeleteOneUser(req, res) {
  const { id } = req.params;
  const user = await deleteUser(id);

  if (!user) {
    res.status(404).json({ message: `User: ${id} not found` });
  } else {
    res.json({ message: `User: ${id} deleted` });
  }
}

async function handlerUpdateUser(req, res) {
  const { id } = req.params;
  const { body } = req;

  const user = await updateUser(id, body);

  // if (!user) {
  //   res.status(404).json({ message: `User: ${id} not found` });
  // } else {
  //   res.json({ message: `User: ${id} updated` });
  // }
  res.json(user);
}

module.exports = {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetUserByEmail,
  handlerGetOneUser,
  handlerDeleteOneUser,
  handlerUpdateUser,
}
