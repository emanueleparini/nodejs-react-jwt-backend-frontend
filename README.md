# Demo project for Treedom
This is a demo project for Treedom, there is a backend and a frontend

# Install /each folder (backend/frontend)
- yarn install
- yarn start
- yarn test (frontend part)

# User auth
User data can find in backend/mock.js

# Folder Strurcture
The folder structure are in DDD style.
There are backend and fronted folder.

# General Workflow
Here comes the description of how the projects work and they are communicating with each other.

## Frontend
In order to manage the state tree, [createContext](https://reactjs.org/docs/context.html) function is used, instead of `redux` or other store packages.

The states in the parent component contains `user` string value and `setUser` function, and they are passed down into the children components.

`Context.Provider` and `useContext` hook are used to implement the state management.

These are the steps how `frontend` works.

1) It checks if the `jwt` token is persistent in localStorage.
2) If `jwt` token exists, it checks if the token is still valid by calling `api/auth/me` API.
   - If it turns out valid, it brings directly to the `dashboard` page.
   - If it's not valid, it is redirected to `sign in` page.
3) On the `Sign in` page, the user is asked to give `username` and `password`. When clicking on the `Log In` button, it makes a call to the server by `api/auth/sign-in` API.
4) If the provided credentials are correct, login is done successfully. Then the server returns `token` and logged-in username. 
   
   If they are not correct, `403 error` is returned.
5) When the token value and username are returned, the frontend stores the token in localStorage (the key name is jwt) and set the `user` state into the returned username.
6) When the state is changed, re-rendering happens at the root level and therefore `dashboard` page is rendered once `user` value is not null.
7) In the `dashboard` page, it makes `/api/users` API call to the server to fetch all the users.
   
   Once the users are returned, it shows the username and role of each user. And three actions are added to each user - `Change Permission`, `change password` and `revoke token`.
8) When clicking on `Change permission` link, it shows the `Change permission` page where there is a select box for user role.
   
   Upon rendering, it fetches the current role of each user by calling `/api/:username/role` API endpoint.

   The user can change the role inside the select box.
   
   When clicking on the `save` button, it makes `/api/:username/change-role/` call to update the user role.
9)  When clicking on `Change password` link, it shows the `Change password` page where there are two input boxes.
    
    In order to change the password, you should type the new password twice.

    If they are not matched, alert box appears.
   
    When clicking on the `save` button, it makes `/api/:username/change-password/` call to update the user password.
10) When clicking on `Revoke token` link, it asks the user if he/she really wants to proceed the action.
   
    If yes, it makes the call to `/api/:username/revoke-token` API endpoint.
11) When trying to log out, it's required to click on `Log out` menu on the top right section.
    
    Upon log out, it clears the `jwt` token on the local storage and makes a call to `/api/logout` endpoint to revoke the token of current user.


## Backend
In the backend project, ./mock.js file is used for mock data which simulates the persistant storage.

And `jsonwebtoken` package is used to create/parse jwt tokens.

the mock data contains four sample users, which are comprised of `username`, `role`, `password` and `token`.

When it comes to API endpoints, the description comes in README file inside `backend` project.


# Credits
https://www.linkedin.com/in/emanuele-parini/