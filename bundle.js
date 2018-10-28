/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	__webpack_require__(1);

	__webpack_require__(3);

	__webpack_require__(4);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// randomly using ES7 object rest spread because it currently raises
	// an error in all browsers, but can be transpiled by Babel
	var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
	    x = _x$y$a$b.x,
	    y = _x$y$a$b.y,
	    z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);

	var n = _extends({ x: x, y: y }, z);
	// if (Object.keys(n).map((key) => n[key]).reduce((p,v) => p + v) === 10) {
	//   document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1>works.</h1>');
	// }

	var debounce = function debounce(func, timer) {
	    var timeout = 0;
	    return function () {
	        var _this = this,
	            _arguments = arguments;

	        clearTimeout(timeout);
	        timeout = setTimeout(function () {
	            return func.apply(_this, _arguments);
	        }, timer);
	    };
	};

	var inputVol = document.getElementById('vol');
	inputVol.addEventListener('keyup', debounce(function (event) {
	    var num = document.getElementById('vol').value;
	    var decimalPart = num.split('.').length > 1 ? '.' + num.split('.')[1] : 0;
	    var base4List = convert2baseN({ input: parseFloat(decimalPart), base: 4, precision: 6 });

	    var base4Marks = function base4Marks(list) {
	        return list.map(function (x, i) {
	            return (i + 1) % 2 == 0 ? evenMarks[x] : oddMarks[x];
	        });
	    };
	    var teluguDescriptors = function teluguDescriptors(list) {
	        return list.map(function (x, i) {
	            return fraclookup[i][x - 1];
	        }).filter(function (x) {
	            return x !== undefined;
	        });
	    };
	    document.getElementById('base4').innerHTML = '' + Math.floor(num) + base4Marks(base4List).join('');
	    document.getElementById('telugu').innerHTML = Math.floor(num) + ' ' + teluguDescriptors(base4List).join(', ');
	    console.log('------------------------------------');
	    console.log(base4Marks(base4List));
	    console.log(teluguDescriptors(base4List));
	    console.log('------------------------------------');
	}, 500));

	var fraclookup = [['కాలు', 'అర', 'ముక్కాలు'], ['వీసము', 'పరక', 'మువ్వీసము'], ['కాని', 'అరవీసము', 'ముక్కాని'], ['ప్రియ', 'అరకాని', 'ముప్ప్రియ'], ['సుర', 'రెండు సురలు', 'మూడు సురలు'], ['గోకరకాని', 'రెండు గోకరకానులు', 'మూడు గోకరకానులు']];

	var oddMarks = ["౸", "౹", "౺", "౻"];
	var evenMarks = ["౦", "౼", "౽", "౾"];

	var convert2baseN = function convert2baseN(_ref) {
	    var input = _ref.input,
	        base = _ref.base,
	        precision = _ref.precision,
	        accuracy = _ref.accuracy;


	    var convertInternal = function convertInternal(_ref2) {
	        var input = _ref2.input,
	            iterationCount = _ref2.iterationCount,
	            accumulator = _ref2.accumulator;

	        if (iterationCount < precision && input != 0.0) {
	            var nextStep = input * base;
	            var integerPart = Math.floor(nextStep);
	            var decimalPart = nextStep - Math.floor(nextStep);
	            iterationCount = iterationCount + 1;
	            accumulator.push(integerPart);
	            return convertInternal({ input: decimalPart, iterationCount: iterationCount, accumulator: accumulator });
	        } else {
	            return accumulator;
	        }
	    };

	    return convertInternal({ input: input, iterationCount: 0, accumulator: [] });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);