const router = require('express').Router();
const { User } = require('../db');

function userNotFound(res, message) {
  res.status = 404;
  res.send({
    message: message,
  });
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
      res.sendStatus(404);
      console.log('NO SESSION FOUND');
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (!user) {
      res.send({ error: `could not find user with username ${username}` });
    } else if (!user.hasCorrectPassword(password)) {
      res.send({ error: 'username and password do not match' });
    } else {
      req.session.userId = user.id;
      res.json(user.sanitize());
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    if (!newUser) {
      throw new Error('could not create user with credentials: ', {
        username,
        password,
      });
    } else {
      req.session.userId = newUser.id;
      res.json(newUser.sanitize());
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
