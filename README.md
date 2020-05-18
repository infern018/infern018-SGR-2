
# COVID-19 INF 
A front-end focused web-app with information related to the Corona Virus and provides real time data.

## Live-Link
[Covid-19](https://covid-19inf.herokuapp.com/)


## Dependencies
![](https://img.shields.io/badge/npm-v6.13.4-blue)  ![](https://img.shields.io/badge/node-v12.6.1-green)

## Setup
Get the code by cloning this repository using git

```
git clone  https://github.com/infern018/infern018-SGR-2
```
Once downloaded, open the terminal in the project directory and install dependencies listed in package json with :

```
npm install <dependecny>
```
 Start the app with
```
node app.js
```
The app should now be running at https://localhost:4269.

## Repo Structure
```
/
|-- node-modules/						#Dependencies
|
|-- public/
		|-- assets/							  #images, SVGs
		|-- stylesheets/					  #CSS files,  Js framework(swiper-slider)
|
|-- views/
		|-- partials/							#Header and footer html files 
		|-- landing.ejs
		|-- warrior.ejs
|
|-- app.js/									  #the main hosting file
|
|-- package.json							#project properties
|-- package-lock.json					#dependencies
|
|-- procfile									 #index for hosting web app online
```

## Partition of Classes
- Landing Page
	- .navbar 
		- includes the navbar at top of everypage
		- styling : **styles.css**
	- .text
		- includes the main heading and tagline of the web app
		- styling : **landing.css**
	- .text2
		- counter that shows stats
		- framework : [wayPoints](https://cdnjs.com/libraries/waypoints), [counterUp](https://cdnjs.com/libraries/Counter-Up)
		- .count : to assess the numbers of counter
	- .concern
		- inludes the SVG and paragraph
	- .measures
		- safety meaures with vector icons
- Warrior Page
	 - .navbar
	 - .swiper-container
	 	- contains all the cards including the transition facility
	 - styling:  **warrior.css**

## Javascript frameworks
Each page's Js is written after the ending "body" tag, inside the "script" tags.
Following JQuery and Js frameworks are included in the project:
- [JQuery](https://code.jquery.com/jquery-3.5.1.js)
- [wayPoints](https://cdnjs.com/libraries/waypoints)
- [counterUp](https://cdnjs.com/libraries/Counter-Up)

The swiper functionality of the cards in warrior page is made possible by : [SwiperJs](https://swiperjs.com/) 

Corresponding framework's Js and CSS file are in the **public/assets/stylesheets** directory

And the Js code is include in the "script" tags in the "warrior.ejs" file.


## API 
The counter at the landing page gets updated since it takes real time data for India through this API : [URL](http://corona-api.com/countries/IN) 

Code Snippet:
```
app.get("/", function(req, res){
	request('http://corona-api.com/countries/IN', function (error, response, 	body) {
	  var data = JSON.parse(body);
	  res.render("landing",{data:data});
	  console.log(data["data"]["latest_data"]);
	});
});
```
## Deployment
The live version of the website is hosted via : [Heroku](https://www.heroku.com/)
## Footnotes 
The SVGs are taken from:
- [FlatIcon](https://www.flaticon.com/)
- [unDraw](https://undraw.co/illustrations)
