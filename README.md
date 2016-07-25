# braintree-angular-spa

A Single Page Application used to handle payments and subscriptions for the [Braintree](https://www.braintreepayments.com/) payment gateway 

Built with Angular 1 Components who each serve their own simple purpose, following best practices with Container/Presentational pattern. (smart and dumb components)

Functionality: 

* Create customer (stand-alone)
* Pay with creditcard & debit cards (stand-alone)
* Pay with paypal (stand-alone)
* Braintree Drop-in payments (stand-alone)
* Subscription wizard which loads plans from Braintree and create a customer, choose or add payment methods.
* Customer profile details where you can switch between subscription plans, change payment methods etc.

Other notes:

Everything is written in ES6, and I use [Webpack](https://webpack.github.io/) with [Babel](https://babeljs.io/) and more to handle all the transpiling, compiling and packaging.

# Installation

Run the following to install dependencies

	$ npm install
	
# Run the single page app

	$ npm start

App runs on
[http://localhost:1337](http://localhost:1337)

# API

This app utilizes a NodeJS API to communicate with the Braintree gateway.

Clone and set up the API server at 
[https://github.com/haukurmar/braintree-node-api](https://github.com/haukurmar/braintree-node-api)