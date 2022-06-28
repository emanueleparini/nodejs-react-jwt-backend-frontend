const jwt = require('jsonwebtoken');
const users = require('../mock').default;

const authSignin = (req, res, next) => {
  try {
    const { username, password } = req.body;
    const filtered = users.filter(user => ((user.username === username) && (user.password === password)));
    if (!filtered.length) {
      throw new Error('403 error');
    }

    const user = filtered[0];
    
    // const token = jwt.sign(
    //   { id: user.username },
    //   'AUTH_JWT_SECRET',
    //   { expiresIn: '7 days' },
    // );

    const token = user.token; // replace this line with the code block above
    
    res.status(200).send({
      token,
      user: user.username,
    });
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = authSignin;
