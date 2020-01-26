const router = require('express').Router();
const { User, Plant } = require('../db');

function userNotFound(message) {
  const err = new Error(message);
  err.status = 404;
  console.error(err);
}

router.get('/me', async (req, res, next) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({
        where: {
          id: req.session.userId,
        },
        attributes: ['id', 'username'],
      });
      res.json(user);
    } else {
      res.send({ message: 'please log in' });
      console.log('NO SESSION FOUND');
    }
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log('request body in LOGIN...', req.body);
    const user = await User.findOne({
      where: {
        username: username,
      },
      attributes: ['id', 'username'],
    });
    if (!user) userNotFound('could not find user with username ' + username);
    // if (!user.hasCorrectPassword(password))
    //   userNotFound('username and password do not match');
    else {
      req.session.userId = user.id;
      res.json(user);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log('request body in SIGN UP...', req.body);
    const newUser = await User.create({ username, password });
    if (!newUser) {
      throw new Error('could not create user with credentials: ', {
        username,
        password,
      });
    } else {
      req.session.userId = newUser.id;
      res.json({
        id: newUser.id,
        username: newUser.username,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete('/logout', (req, res, next) => {
  try {
    req.session.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
