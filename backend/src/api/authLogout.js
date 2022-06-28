const authSignout = (req, res, next) => {
  try {
    const currentUser = req.currentUser;

    currentUser.token = null;
    // replace this with the real token revocation
    
    res.status(200).send('success');
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = authSignout;
