(function() {
	"use strict";
	var SVGNS = "http://www.w3.org/2000/svg";
	var ANGLE_OFFSET = -Math.PI / 2;

	/**
	 * @class ProgressBar
	 * @constructor
	 */
	var self = function CircularProgressBar()
	{
		/** @private */
		this._private = {
			_element:     document.createElementNS(SVGNS, "svg"),
			_pathElement: document.createElementNS(SVGNS, "path"),
			_max:        1,
			_value:      null,
			_innerRayon: 0.5,
			_waitingFill: 0.66
		};
		this._private._element.appendChild(this._private._pathElement);
		this._private._element.setAttribute("viewBox", "-1 -1 2 2");
		this._private._element.setAttribute("fill-rule", "evenodd");
	};
	window.CircularProgressBar = self;

	Object.defineProperties(self.prototype, {
		max: {
			get: function() {return this._private._max;},
			set: function(max) {
				this._private._max = Number(max);
				refreshView(this);
			}
		},
		value: {
			get: function() {return this._private._value;},
			set: function(value) {
				this._private._value = value === null? null: Number(value);
				refreshView(this);
			}
		},
		innerRayon: {
			get: function() {return this._private._innerRayon;},
			set: function(innerRayon) {
				this._private._innerRayon = Number(innerRayon);
				refreshView(this);
			}
		},
		waitingFill: {
			get: function() {return this._private._waitingFill;},
			set: function(waitingFill) {
				this._private._waitingFill = Number(waitingFill);
				refreshView(this);
			}
		},
		element: {
			get: function() {return this._private._element;}
		}
	});

	/**
	 * Calculate
	 * @private
	 * @param {number} r Circle rayon
	 * @param {number} x End position x
	 * @param {number} y End position y
	 * @return {string}
	 */
	function calcCirclePath(r, x, y)
	{
		var d = 2 * r;
		x *= r;
		y *= r;
		var path  = "M0,-" + r;
		path += " a" + r + "," + r + " 0 0,1";
		if (x < 0) {
			path += " 0," + d;
			path += " a" + r + "," + r + " 0 0,1";
			y -= r;
		} else {
			y += r;
		}
		path += " " + x + "," + y;
		path +=" L0,0";
		return path;
	}

	/**
	 * Refresh loading view
	 * @private
	 * @param {self} othis
	 * @return {void}
	 */
	function refreshView(othis)
	{
		var value = othis._private._value;
		var max   = othis._private._max;
		var className = "circular-progressbar";
		if (othis._private._value === null) {
			value = othis._private._waitingFill;
			max   = 1;
			className += " circular-progressbar-waiting";
		}
		var angle = 2 * Math.PI * value / max;
		var x     = Math.cos(ANGLE_OFFSET + angle);
		var y     = Math.sin(ANGLE_OFFSET + angle);

		var path = calcCirclePath(1, x, y) + " " + calcCirclePath(othis._private._innerRayon, x, y);
		othis._private._pathElement.setAttribute("d", path);
		othis._private._element.setAttribute("class", className);
	}
})();
