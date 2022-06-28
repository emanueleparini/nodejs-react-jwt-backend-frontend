const users = require('../mock').default;

const updateRole = (req, res, next) => {
  try {
    const { role } = req.body;
    const username = req.params.username;
    
    let i = 0;
    while(i < users.length) {
      if (users[i].username === username) {
        users[i].role = role;
        // replace the statement with the real data update
      }
      i = i + 1;
    }

    res.status(200).send('ok');
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = updateRole;
