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

```
controllers folder
users : this js file basically use to send users name on Users Table.
post : 
comments : 
```

```
## utils folder
### username : 
this js file is used to generate random names for users just like we have in google docs for anonymous users when we share a file into more than one person.
```

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