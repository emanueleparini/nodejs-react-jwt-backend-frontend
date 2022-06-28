const users = require('../mock').default;

const fetchUsers = (req, res, next) => {
  try {
    const filtered = users.map(user => {
      return { username: user.username, role: user.role}
    });

    res.status(200).send({
      users: filtered,
    });
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = fetchUsers;
