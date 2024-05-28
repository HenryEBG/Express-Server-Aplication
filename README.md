# SBA Express Server Application
## Creating API's
### Henry Berganza Guevara

A fake store is created using our own server with data inside files not using database.

In the project it was used the routes to GET (get the products), PATCH (update the cart adding products or changing quatities), and POST (login the user).

The project use modules to refract all the js code and be more easy to read and modify in the future.

## FrontEnd files (nside public folder)
### script.js
This file include only the calls to the diferent functions to use API's 

### apiGetConsumers.js
Include the function deleteProduct that use an API to eliminate a product listed in the page.

### apiGetConsumers.js
Include all the functions that bring data from the API:
- productsByCategories  get the products filtered by a category.
- getCategories get all the categories
- getProducts get all the products

### apiPostConsumers.js
Include the functions to use the API with the method POST and PUT
- addProduct  Function that calls a POST method in the API to add a new product
- modifyProduct Function that calls a PUT method in the API to modify a product

### display.js
Include the functions to display the elements in the store.html file.
- categorySelect  add elements option to the selects inside the modals and the filter in the navbar
- productDisplay add card elements to the principal container in the index.html file to show the products.

### Bootstrap Template
The project used a free boostrap template. 

### CSS files
Inside the folder  styles there is a css file styles.css that contain all the css from the page.

## Backend Files
### data
This folder contains all the files with the initial data
#### carts.js
Contain the info of the carts.
#### categories
Contain the info of the categories of the products to filter
#### products.js
Contain the info of the products.
#### users.js
Contain the info of the users (customers)

### routes


