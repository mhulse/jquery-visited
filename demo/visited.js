// declare 'Singleton' as the returned value of a self-executing anonymous function
// http://stackoverflow.com/a/12450945/922323
var Singleton = (function () {
	
	'use strict';
	
	var _instance = null;
	
	var _console = (window.console || { log: function() {}, warn: function() {} });
	
	var _name;
	
	var _constructor = function(name) {
		
		this._name = name || 'default';
		
		return (storage) ? instance : {}; // Alternatives?
		
	};
	
	_constructor.prototype.get = function() {
		
		return localStorage.getItem('visited');
		
	};
	
	_constructor.prototype.set = function(value) {
		
		return localStorage.setItem('visited', value);
		
	};
	
	_constructor.prototype.remove = function() {
		
		return localStorage.removeItem('visited');
		
	};
	
	_constructor.prototype.items = function() {
		
		document.getElementById();
		
	};
	
	_constructor.prototype.getName = function () {
		
		return this._name;
		
	}
	
	return {
		
		getInstance: function(name) {
			
			if ( ! _instance) {
				
				console.log('creating');
				
				_instance = new _constructor(name);
				
			}
			
			console.log('returning');
			
			return _instance;
			
		}
		
	}
	
	function storage() {
		
		try {
			
			return (('localStorage' in window) && (window.localStorage !== null));
			
		} catch($e) {
			
			return false;
			
		}
		
	}
	
})();

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
console.log(b.getName()); // also returns "first" because it's the same instance as 'a
