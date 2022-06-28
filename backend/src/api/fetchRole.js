const users = require('../mock').default;

const fetchRole = (req, res, next) => {
  try {
    const username = req.params.username;
    
    let role = 'user';
    let i = 0;
    while(i < users.length) {
      if (users[i].username === username) role = users[i].role;
      i = i + 1;
    }

    res.status(200).send({
      role,
    });
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = fetchRole;
