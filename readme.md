```
Project Structure:-
Controllers : functions to connect routes
db : to setup database
public : html/css/js files for frontend
routes: express middlewares (route wise)
```

```
db folder:
models : setup connection with database
It is also used to create tables USERS, POSTS, COMMENTS
```


### controllers folder
`users` : this js file basically use to send users name on Users Table.
`post` : 
`comments` : 



## utils folder
###  username : 
this js file is used to generate random names for users just like we have in google docs for anonymous users when we share a file into more than one person.


## Business logic

### Users
1. **create Users**
    this will create a new user and assign a random name for users.

### Posts
1. **create posts**
    this will create a new post, required fields are:-
    -username (the author of this post)
    -title
    -body

2. **show all posts**
    list allexisting post, we should have  following support
    -filter by username
    -filter by query contained in title (search by title)

3. **edit posts**
4. **delete posts**

### comments
1. **show all comments of user**
2. **show all comments under a post**
3. **add a comment**

### API Documentation
## `Users`
1. `POST /users`
Creates a new user with random username and a user id.
2. `GET /users/{userid}`
Get a user with a given user id
3. `GET /users/{username}`
Get a user with given username .

### `posts`
1. `GET /posts`
Get all posts by everyone.
2. `POST /posts`
create new posts.
Required fieds:--
```
userId=
title=
body=
```
### Frontend-
`Resources`
1. bootstrap.css :-
https://www.jsdelivr.com/package/npm/@coding-blocks/bootstrap?path=dist%2Fcss&version=4.4.2-beta.2

2. bootstrap.js:-
https://www.jsdelivr.com/package/npm/@coding-blocks/bootstrap?path=dist%2Fjs&version=4.4.2-beta.2

3. muli.css, muli.wolf2, muli-italic.wolf2
https://github.com/coding-blocks/bootstrap/tree/v4-dev-4.4.1/fonts

4. jquery.js:-
https://code.jquery.com/jquery-3.4.1.js

5. popper.js:-
https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.js

