
<p align="center"><img src="https://github.com/destinybravos/api_demo/blob/master/img/api_img.png" width="100"></p>

# API DEMO APP
## A basic demostration on how HTTP Request and Api Works

This project is a demo project for my students at ***PROGRAMMERS' CITY*** and it describes how to make HTTP Request through Javascript to a certain end-point which portrays the use of Javascripts to make APIs Call.

The project made use of a dummy Core PHP core to access a particular database where some basic data/information were stored and retrieved and then returned back with the HTTP Request to the end-point where the calls were made.

The end-point here on the project is Javascript (JQUERY Library) but can be from any language that could be used for making basic HTTP Requests. 

## Purpose of This Demo App
The students are expected to study the documentation and create their various interface/end-point on their personal directories on the root of this project and make use of the provided PHP scripts through making HTTP request to the scripts and getting data back as well as using the data got, on their user interface. 

Below are som guidelines on how to install and make use of the Demo App. 

## Demo Application Setup
#### Database Tables
The project was made with the database table exported on the SQL files named "['api_db.sql'](https://github.com/destinybravos/api_demo/blob/master/api_demo.sql) on the root directory of the project. All you need to do is simply to create a database called **"api_demo"** on your local server, then import the file "['api_db.sql'](https://github.com/destinybravos/api_demo/blob/master/api_demo.sql) to it.

### Usage (Making use of the API Demo)
First, note that all the php files are stored in "api_demo/api/" directory. So, making reference to any php file there should be to the file on the api directory. 

**For instance,** when you have successfully clone the app into your local server, it base url will be [http://localhost/api_demo](http://localhost/api_demo). Therefore, if you want to access the "login.php" file, the url will simply be [http://localhost/api_demo/api/login.php](http://localhost/api_demo/api/login.php) and "register.php will simply be [http://localhost/api_demo/api/register.php](http://localhost/api_demo/api/register.php).

:warning: The Instructions on this documentation are base on cloning this repository into a local server that can be served up with either **"http://127.0.0.1"** or **"http://localhost"**. This document made use of [http://localhost](http://localhost/) in referencing all url to various part of the project especailly the api which might vary according to your development environment.

#### Registration Credentials
To add a user to the database you have to make a ***HTTP Post Request*** to [http://localhost/api_demo/api/register.php](http://localhost/api_demo/api/register.php) with the basic data passed with the request either with the formData class or just as a JavaScript object.

**Example in JavaScript:**
```javascript
    //building a data object and Using it on the request
    let data = {
        firstname: "John",
        lastname: "Smith",
        email: "johnsmith@gmail.com",
        phone: "09023312343",
        password: "12345",
    }
```
Sending the data object with the request will return response with status **"success"** or **"error"** depending on outcome of the process on the back-end. 

The application with automatically create an ***Access Token*** for all users record which are stored and at the same time record the time the record was stored.

#### Login Credentials and Process
You can also simulate a login process by making a ***HTTP Post Request*** to [http://localhost/api_demo/api/login.php](http://localhost/api_demo/api/login.php) with the basic data passed with the request either with the formData class or just as a JavaScript object.

**Example in JavaScript:**
```javascript
    //data needed for login accesss
    let data = {
        user_id: "johnsmith@gmail.com",
        password: "12345",
    }
```
The user_id can either be can either be the users email or phone number! Therefore, the user interface will accept the users email or phone number and password. The request will return response with status **"success"** or **"error"** depending on outcome of the process on the back-end. if the request returned success, the whole user details will also be return with the response as an object.
**Example of Response from login request:**
```javascript
    //Example of Response Object from the login request
    {
        status: "success",
        status_code: "1",
        message: "Login was successfull!",
        user: {
                id: "4",
                firstname: "John",
                lastname: "Smith",
                email: "johnsmith@gmail.com",
                phone: "09023312343",
                password: "827ccb0eea8a706c4c34a16891f84e7b",
                access_token: "78dcf39098719343e18f70589cf19457",
                created_at: "2020-09-26 12:52:08"
            }
    }
```

#### Managing Login Session and Authorizations
In attempt to seperate the login logic and simulate the entire process to the native php sessions, you can create a php file to help store thr access token return from the login process into a browsers session or cookie through which page can be restricted from some certain activity base on your custom need in your project. Example of such file/structure is the **"[session.php]"**(https://github.com/destinybravos/api_demo/blob/master/session.php) file on the root directory of this repository. 

Implementing the **"session.php"** functionality, you can send the token recieved from login proccess to it with the preferred action and it will manage the token as well as help manage the system authorization due to the fact that it can store and retrieve the **access_token** whenever and wherever it is needed. 

**Example of storing access token to session:**
The data needed by the session to store the token is given below;
```javascript
    //Example of Response Object from the login request
    {
        action: 'set_session', 
        token: '78dcf39098719343e18f70589cf19457' //Access token as retrieved by login
    }
```
This object above can then be sent to the url [http://localhost/api_demo/session.php](http://localhost/api_demo/session.php) with a **Post Request** and the token will be store in session. The token can then be retrieved when needed simply by send just the action to the same url [http://localhost/api_demo/session.php](http://localhost/api_demo/session.php); 

**Data for retrieving access token from session:**
```javascript
    //Just send the 'get_session' to the api and you will get the access token back as response
    {
        action: 'get_session', 
    }
```
Example of the basic implementation of the store and retrieve token processes is done on the ***"js/custom.js"*** of this repository using ***$.ajax() Jquery Method***.


## BLOG POST MANAGEMENT
#### Introduction to the Blog Part of this API Demo
On an attempt to further illustrate how to make **HTTP Request** from javascript to a back-end usually an api to get data and use them on user interface, a blog section is also added to this repository to create, edit and delete blog posts from the database using setting http request and url. 

#### Add Posts/Articles
To add/create a post, simply send a **HTTP Post Request** to [http://localhost/api_demo/api/manage_post.php](http://localhost/api_demo/api/manage_post.php) with the following data;

```javascript
    {
        action: 'save_post', 
        title: 'Post Title/Headline', 
        body: 'Post Body/Article', 
        token: 'User Access Token', 
    }
```
with the user's access token sent with the request, the api system will automatically detect the post author and store the author's ID as a foreign key which then defines the relationship between the author/user and the post.

#### Retrieving Posts/Articles
Retrieving all the posts, simply send a **HTTP Post Request** to [http://localhost/api_demo/api/manage_post.php](http://localhost/api_demo/api/manage_post.php) with the following data;

```javascript
    {
        action: 'fetch_posts',  
    }
```
This will return a response with a array of posts. Each element of the array "posts" is an object than contain the post details as well as the author object which contain all the details about the post author. Below is an example structure of the response. 

```javascript
    {
        "status": "success",
        "status_code": "1",
        "message": "1 fetched successfully.",
        "no_posts": 1,
        "posts": [
            {
                "id": "1",
                "title": "Testing First Post",
                "body": "This is the detailed body of this post",
                "author_id": "1",
                "created_at": "2020-09-29 17:50:36",
                "author": {
                    "id": "1",
                    "firstname": "Destiny",
                    "lastname": "Brotobor",
                    "email": "db4bravos@yahoo.com"
                }
            },
            {
                "id": "2",
                "title": "Another Post",
                "body": "This is the detailed body of another post",
                "author_id": "1",
                "created_at": "2020-09-29 19:30:12",
                "author": {
                    "id": "1",
                    "firstname": "Destiny",
                    "lastname": "Brotobor",
                    "email": "db4bravos@yahoo.com"
                }
            }
        ]
    }
```
Therefore, getting the posts from the response requires a loop which will loop through each of the elements of the posts array in order to use them within your user interface.

#### Read Posts/Articles (View Post Details)
To open and read the details of a particular post, simply send a **HTTP Post Request** to [http://localhost/api_demo/api/manage_post.php](http://localhost/api_demo/api/manage_post.php) with the **post_id *(Required)*** and the following data;

```javascript
    {
        action: 'read_post', 
        post_id: 'post id/sn',  
    }
```

#### Editing Posts/Articles
Editing a particular post, simply send a **HTTP Post Request** to [http://localhost/api_demo/api/manage_post.php](http://localhost/api_demo/api/manage_post.php) with the **post_id *(Required)*** and the following data;

```javascript
    {
        action: 'edit_post', 
        post_id: 'post id/sn', 
        title: 'Post Title/Headline', 
        body: 'Post Body/Article', 
        token: 'User Access Token', 
    }
```

#### Deleting Posts/Articles
To delete a post, simply send a **HTTP Post Request** to [http://localhost/api_demo/api/manage_post.php](http://localhost/api_demo/api/manage_post.php) with the following data;

```javascript
    {
        action: 'delete_post', 
        post_id: 'post id/sn', 
        token: 'User Access Token', 
    }
```

### Conclusion! 
**These are some of the basic operations and function of this "Simple API Demo App"". For further question, verification, clarification, issue or complaign, *simply open the issue tab on the repository (on github) and log the issue there let's tackle it together!**

#### ***Goodluck!***