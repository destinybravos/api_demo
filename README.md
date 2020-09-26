
<p align="center"><img src="https://github.com/destinybravos/api_demo/blob/master/img/api_img.png" width="70"></p>

# API DEMO APP
## A basic demostration on how HTTP Request and Api Works

This project is a demo project for my students and it describes how to make HTTP Request through Javascript to a certain end-point which portrays the use of Javascripts to make APIs Call.

The project made use of a dummy Core PHP core to access a particular database where some basic data/information were stored and retrieved and then returned back with the HTTP Request to the end-point where the calls were made.

The end-point here on the project is Javascript (JQUERY Library) but can be from any language that could be used for making basic HTTP Requests. 

## Purpose of This Demo App
The students are expected to study the documentation and create their various interface/end-point on their personal directories on the root of this project and make use of the provided PHP scripts through making HTTP request to the scripts and getting data back as well as using the data got, on their user interface. 

Below are som guidelines on how to install and make use of the Demo App. 

## Demo Application Setup
#### Database Tables
The project was made with the database table exported on the SQL files named "['api_db.sql'](https://github.com/destinybravos/api_demo/) on the root directory of the project. All you need to do is simply to create a database called "api_demo" on your local server, then import the file "['api_db.sql'](https://github.com/destinybravos/api_demo/) to it.

### Usage (Making use of the API Demo)
First, note that all the php files are stored in "api_demo/api/" directory. So, making reference to any php file there should be to the file on the api directory. 

**For instance,** when you have successfully clone the app into your local server, it base url will be [http://localhost/api_demo](http://localhost/api_demo). Therefore, if you want to access the "login.php" file, the url will simply be [http://localhost/api_demo/api/login.php](http://localhost/api_demo/api/login.php) and "register.php will simply be [http://localhost/api_demo/api/register.php](http://localhost/api_demo/api/register.php).

#### Registration Credentials
To add a user to the database you have to make a ***HTTP Post Request*** to [http://localhost/api_demo/api/register.php](http://localhost/api_demo/api/register.php) with the basic data passed with the request either with the formData class or just as a JavaScript object.

**Example in JavaScript:**
```javascript
    //building a data object and Using on the request
    let data = {
        firstname: ...,
        lastname: ...,
        email: ...,
        password: ...,
        phone: ...
    }
```