# CircularProgressBar
An SVG circular progress bar initailizable with javascript.
See `demo/index.html` to see possibilities.

# Getting started

* Load CSS and JS files:
```html
<link rel="stylesheet" href="src/circular-progressbar.css"/>
<script src="src/CircularProgressBar.class.js"></script>
```
* Init progressbar and append it to an HTML element:
```javascript
var progress = new CircularProgressBar();
document.body.appendChild(progress.element);
```
* Set progress value (by default values is between 0.0 and 1.0):
```javascript
progress.value = 0.3;
```

# API

## Property `max`
* Writable: true
* Type: number
* Default value: 1.0

Max value settable as progress.

## Property `value`
* Writable: true
* Type: number|null
* Default value: null

Progress value between `0` and `max`. If `null`,  progress bar will rotate infinitely indicating that progress is unknown.
Note: `circular-progressbar.css` is required only if `value` is `null`.

## Property `innerRayon`
* Writable: true
* Type: number
* Range: `0.0` - `1.0`
* Default value: 0.5

Rayon of inner transparent disk in percent of width/height of SVG element.

## Property `waitingFill`
* Writable: true
* Type: number
* Range: `0.0` - `1.0`
* Default value: 0.66

Angle of arc to display when `value` is `null` in gradient.

## Property `element`
* Writable: false
* Type: SVGSVGElement

SVG element generated. It is possible de change the skin using javascript:
* Color:
```javascript
progress.element.setAttribute("fill", "#0080FF");
```
* Size:
```javascript
progress.element.setAttribute("width",  "100");
progress.element.setAttribute("height", "100");

progress.element.setAttribute("width",  "100px");
progress.element.setAttribute("height", "100px");

progress.element.setAttribute("width",  "20em");
progress.element.setAttribute("height", "20em");

progress.element.setAttribute("width",  "100%");
progress.element.setAttribute("height", "100%");
```
