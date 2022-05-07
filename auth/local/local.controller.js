const { getUserByEmail, findOneUser } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');

async function handlerLoginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    console.log(user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = signToken(user.profile);
    const student = user.student
    const role = user.role;
    const response = {
      token: token,
      studentId: student,
      grade: student.gradeId,
      rol: role,
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function handlerVerifyAccount(req, res){
  const { token } = req.params;

  try {
    const user = await findOneUser({ passwordResetToken:token });

    if (!user) {
      return res.status(404).json({message: 'Invalid Token'})
    }

    if (Date.now() > user.passwordResetExpires) {
      return res.status(404).json({ message: 'Token expired' })
    }

    user.isActive = true;
    user.passwordResetExpires = null;
    user.passwordResetToken = null;

    await user.save()
    const jwtToken = signToken(user.profile);

    return res.status(200).json( {message: 'Account verified', token: jwtToken});
  } catch (error) {
    return res.status(400).json(error);
  }
}


module.exports = {
  handlerLoginUser,
  handlerVerifyAccount,
};
