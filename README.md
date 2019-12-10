# Password-Manager
A web based password manager developed using Node.js and Express with MongoDB for database.

This web app follows the 7 RESTful routes.

| Route Name | URL                | HTTP Verb | Description
|------------|--------------------|-----------|-----------------
| Index      | /accounts          |   GET     | Display all accounts saved
| New        | /accounts/new      |   GET     | Show form to add an account
| Create     | /accounts          |   POST    | Saved the account in the database then redirect
| Show       | /accounts/:id      |   GET     | Show one specific account
| Edit       | /accounts/:id/edit |   GET     | Show Edit form for an account
| Update     | /accounts/:id      |   PUT     | Update an account then save in the database then redirect
| Destroy    | /accounts/:id      |   DELETE  | Delete a specific account

