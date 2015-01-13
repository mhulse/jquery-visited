// declare 'Singleton' as the returned value of a self-executing anonymous function
// http://stackoverflow.com/a/12450945/922323
var Singleton = (function () {
	"use strict";
	// 'instance' and 'constructor' should not be availble in a "public" scope
	// here they are "private", thus available only within 
	// the scope of the self-executing anonymous function
	var _instance=null;
	var _constructor = function (name) {
		this.name = name || 'default';
	}

	// prototypes will be "public" methods available from the instance
	_constructor.prototype.getName = function () {
		return this.name;
	}

	// using the module pattern, return a static object
	// which essentially is a list of "public static" methods
	return {
		// because getInstance is defined within the same scope
		// it can access the "private" 'instance' and 'constructor' vars
		getInstance:function (name) {
			if (!_instance) {
				console.log('creating'); // this should only happen once
				_instance = new _constructor(name);
			}
			console.log('returning');
			return _instance;
		}
	}

})(); // self execute

// ensure 'instance' and 'constructor' are unavailable 
// outside the scope in which they were defined
// thus making them "private" and not "public"
console.log(typeof _instance); // undefined
console.log(typeof _constructor); // undefined

// assign instance to two different variables
var a = Singleton.getInstance('first');
var b = Singleton.getInstance('second'); // passing a name here does nothing because the single instance was already instantiated

// ensure 'a' and 'b' are truly equal
console.log(a === b); // true

console.log(a.getName()); // "first"
console.log(b.getName()); // also returns "first" because it's the same instance as 'a'



// Class-like singleton:
function Visited($options) {
	
	'use strict';
	
	var console = (window.console || { log: function() {}, warn: function() {} });
	
	var instance = this;
	
	instance.get = function() {
		
		return localStorage.getItem('visited');
		
	};
	
	instance.set = function(value) {
		
		return localStorage.setItem('visited', value);
		
	};
	
	instance.remove = function() {
		
		return localStorage.removeItem('visited');
		
	};
	
	instance.items = function() {
		
		document.getElementById()
		
	};
	
	Visited = function($options) {
		
		console.log($options);
		
		return (storage) ? instance : {}; // Alternatives?
		
	};
	
	function storage() {
		
		try {
			
			return (('localStorage' in window) && (window['localStorage'] !== null));
			
		} catch($e) {
			
			return false;
			
		}
		
	}
	
}

var my1 = new Visited({ foo: 'bar' });
var my2 = new Visited();
console.log(my1 === my2);
