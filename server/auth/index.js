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
        include: {
          model: Plant,
          attributes: ['id', 'name', 'waterAfter', 'receivedWaterOnDates'],
        },
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

router.put('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username: username,
      },
      attributes: ['id', 'username'],
    });
    if (!user) userNotFound('could not find user with username ' + username);
    if (!user.hasCorrectPassword(password))
      userNotFound('username and password do not match');
    else {
      req.session.userId = user.id;
      console.log('user logged in: ', user.dataValues);
      res.json(user);
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
