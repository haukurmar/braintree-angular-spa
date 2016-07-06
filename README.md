# braintree-angular-spa

A Single Page Application built with Angular 1 Components that each server their own simple purpose, following best practices with Container/Presentational pattern. (smart and dumb components)

Also makes use of the [Angular Component Router](https://github.com/angular/router).

Functionality: 

* Create customer (stand-alone)
* Pay with creditcard & debit cards (stand-alone)
* Pay with paypal (stand-alone)
* Subscription wizard from loaded plans from Braintree where we make use of Customer creation, choosing or adding payment methods.
* Customer profile details where you can switch between subscription plans, change payment methods etc.

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