const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const middleware = require('./middlewares/authMiddlewre');

const app = express();

// Enables CORS
app.use(cors({ origin: true }));

app.use(middleware.authMiddleware);

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet());

// Parses the body of POST/PUT request
// to JSON
app.use(bodyParser.json());

// Configure the Entity routes
const routes = express.Router();

routes.post(
  `/auth/sign-in`,
  require('./api/authSignIn').default,
);

routes.post(
  `/auth/me`,
  require('./api/authMe').default,
);

routes.post(
  `/logout`,
  require('./api/authLogout').default,
);

routes.get(
  `/users`,
  require('./api/fetchUsers').default,
);

routes.get(
  `/:username/role`,
  require('./api/fetchRole').default,
);

routes.put(
  `/:username/change-password`,
  require('./api/updatePassword').default,
);

routes.put(
  `/:username/change-role`,
  require('./api/updateRole').default,
);

routes.post(
  `/:username/revoke-token`,
  require('./api/revokeToken').default,
);

app.use('/api', routes);

app.listen(8000, () => {
  console.log(`Listening on port 8000`);
})
