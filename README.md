# Password-Manager
A web based password manager developed using Node.js and Express with MongoDB for database.

This web app follows the 7 RESTful routes.

| Route Name | URL               | HTTP Verb | Description
|------------|-------------------|-----------|-----------------
| Index      | /account          |   GET     | Display all accounts saved
| New        | /account/new      |   GET     | Show form to add an account
| Create     | /account          |   POST    | Saved the account in the database then redirect
| Show       | /account/:id      |   GET     | Show one specific account
| Edit       | /account/:id/edit |   GET     | Show Edit form for an account
| Update     | /account/:id      |   PUT     | Update an account then save in the database then redirect
| Destroy    | /account/:id      |   DELETE  | Delete a specific account

