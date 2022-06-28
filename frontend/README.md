# Frontend
## Overview
Using [Context](https://reactjs.org/docs/context.html), the global state is managed. `user` and `setUser` are states which are handled by [Context](https://reactjs.org/docs/context.html).

## How to run the project
You should get inside the `frontend` project.
- cd frontend
- yarn install
- yarn start


## How to run the test
In `App.test.js` file inside the root folder, there are test cases (unit and integration test).

`@testing-library` was used.

In order to run the test, you need to run the following command.
- yarn test
  
## Pages
### `Sign-in` page
If `user` state is null, all the routes are redirected to the sign-in page.
Otherwise, it will bring you to `Dashbard` page.

When the user types correct username and password, it sets the value of `user` global state.
The demo credentials are `eparini/IamAtest99`.

### `Dashboard` page
If user state is not null (i.e. either a user ever logged in or just logging in successfully), the `dashboard` page is shown up.
`dashboard` page shows the list of users including `username` and `role`.

### `Change Password` page
This page is where the admin can change the password of himself or other users.

### `Change Role` page
This page is where the admin can change the role of the users.


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