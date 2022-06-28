const authMe = async (req, res, next) => {
  try {
    const user = req.currentUser.username;
    
    res.status(200).send({
      user
    });
  } catch (error) {
    res.status(403).send('403 error');
  }
};

exports.default = authMe;
