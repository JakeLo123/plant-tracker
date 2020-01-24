const router = require('express').Router();
const { User } = require('../db');

function userNotFound(message) {
  const err = new Error(message);
  err.status = 404;
  console.error(err);
}

router.put('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (!user) userNotFound('could not find user with username ' + username);
    if (!user.hasCorrectPassword(password))
      userNotFound('username and password do not match');
    else {
      req.session.userId = user.id;
      console.log('user...', user);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/signup', (req, res, next) => {
  // write me!
});

router.delete('/logout', (req, res, next) => {
  // write me!
});

module.exports = router;
