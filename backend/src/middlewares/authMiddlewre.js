const users = require('../mock').default;

async function authMiddleware(req, res, next) {
  const isTokenEmpty =
    (!req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session);

  let idToken;
  if (isTokenEmpty) {
    if (req.url.includes('/auth')) {
      return next();
    } else {
      res.status(403).send('403 error');
      return;
    }
  }

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    res.status(403).send('403 error');
    return;
  }

  try {
    const selected = users.filter((user) => user.token === idToken);
    let currentUser = null;
    if (selected.length > 0) currentUser = selected[0];
    
    req.currentUser = currentUser;
    return next();
    
  } catch (error) {
    console.error(error);
    res.status(401).send('401 error');
  }
}

exports.authMiddleware = authMiddleware;
