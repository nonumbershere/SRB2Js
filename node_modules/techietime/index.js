#!/usr/bin/env node

/**
 * Print the current date and time
 *
 * @return {String}
 */


"use strict";

var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');


clear();
console.log('\n');

console.log(
  chalk.white(
    figlet.textSync('TechieTime', { horizontalLayout: 'full' })
  )
);
var currentTime = 'Current date and time  : ' + new Date();

console.log('\n');
console.log( currentTime );
console.log('\n');

module.exports = function () {

	return new Date();

} 