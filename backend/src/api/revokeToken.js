const users = require('../mock').default;

const revokeToken = (req, res, next) => {
  try {
    const username = req.params.username;
    
    let i = 0;
    while(i < users.length) {
      if (users[i].username === username) {
        users[i].token = null;
        // replace with the real token revoke
      }
      i = i + 1;
    }

    res.status(200).send('ok');
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = revokeToken;
