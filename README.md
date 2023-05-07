# ISS-Hackathon

## NAME OF THE SITE

Hungzy@IIIT

## Brief Summary of the Features

### Details of the Site
- Pages:
	- Homepage
	- Menu Page
	- Order Pick-Up Page
	- Abut Page

### Consistent Features

Each page includes a fixed NAVBAR and a FOOTER at the end of the page

- NAVBAR includes link to home page, menu page, order pickup page and about page
- FOOTER includes info. of the site and link to the about page

### Homepage

1. Opens with a delighting front page. It features our own handtyped code and self combined pictures (hints taken from 3-rd party sources and individual images belong to their respective authors)
2. The front container also features two buttons that redirects the user to the place an order and the pickup pages. 
3. On scrolling down, the user can view the current number of orders placed (i.e. those in the csv file) and the expected number of people to be present in the canteens at the moment.

### MENU PAGE

Includes:

- the menu of the canteen
- search option to search through the items
- function to add the desired item to the cart
- function to change the number of items added in the cart
- cart on the right side of the page to view your added items
- option to add your name, location and batch to place your order
- Checkout option sends the data to an output file on which the data is appended.
		
### ORDER PICK UP PAGE

1. This page has two segments.
2. The first one is the info and statistics page that takes about 30% of the total window screen.
3. The second one lists all the placed order. It has all neccessary and self explanatory information about the items ordered by dfferent users.
4. The second half also has an ```accept``` button that changes to accepted on click. Note you can only accept one time having a unique id/name.

### ABOUT PAGE

1. Displays a custom designed background and more or less custom made theme that potrays the essence of the page.
2. It lists the functionalities in brief.
3. It also displays the names of the creators.

## ABOUT THE SITE
	- The site is made to ```place orders```` in the canteens of the IIIT campus.
	- The site gives the user ```access to the the menu```` of the canteens where they can view and place orders.
	- It also used to ```accept orders``` for ```deliveries```, enabling freelancing for students within the campus. The site helps students to get deliveries inside/ near the hostels and other accessible locations within the campus.

## Framework/ Libraries

For most part of the project, HTML, CSS, JS and Python were used. 

The data is being stored as a ```csv``` in a text file ```(.txt)```

Libraries Used in Javascript:

- JQuery was used in a certain segment of the program to simplify the code.

```Python is being used to host the website. Localhost is being used.```

Libraries used in Python:
- Flask (For hosting)
- Flask_CORS (to uplift limitations applied due to security reasons)
- JSON (For seamless conversion between strings and JSON data)

## Instructions set-up and run

1. ```Unzip the zip``` file that has been uploaded.
2. Run the ```runscript.py``` file in the terminal.
3. Extract the ```localhost address``` and open it at the port specified.
4. The ```homepage is expected to run``` after this manouever.
5. ```Use the navigation bar``` and ```other in-page links``` to browse the website.

## Contributions By Each Member
	
Ansh Chablani: Backend + Frontend

Bipasha Garg: Frontend

Ishita Bansal: Frontend
