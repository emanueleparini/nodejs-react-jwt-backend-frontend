# Backend
In the backend project, here are the packages used:

## Used Packages
- express
- body-parser
- jsonwebtoken

### `express` and `body-parser`
`express` is listening and serving the requests from the client side and `body-parser` is parsing the request in the `json` format.

### `jsonwebtoken`
`jsonwebtoken` is used to create `jwt token` for logged users.

## How to run the project
You should get inside the `backend` project.
- cd backend
- yarn install
- yarn start
  
## APIs
### `api/auth/sign-in`
This API allows the user to login when he/she inputs the correct username and password.
The params are `username` and `password`.

### `api/auth/me`
This is an API endpoint to check if the user was already logged in or not using the persistent jwt token.
The token value is passed along with the API.


### `api/logout`
It logs out the user and revokes the `jwt token`.

### `api/users`
This API fetches all the users. It throws 403 error if the user is not authenticated yet.

### `api/:username/role`
This API brings the role of the user. 
It throws 403 error if the user is not authenticated yet.

### `api/:username/change-password`
This API is used to change the password of a user.
It throws 403 error if the user is not authenticated yet.

### `api/:username/change-role`
This API is used to change the role of a user.
It throws 403 error if the user is not authenticated yet.

### `api/:username/revoke-token`
This API revokes the `jwt token` for a user.