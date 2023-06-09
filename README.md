# e.js

A simple JavaScript for common actions.

## Usage

Add the following script into your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/rilwis/ejs/e.min.js"></script>
```

Toggle a class of an element by adding `x-toggle` attribute to a trigger element with value `selector:className`.

The code bellow will toggle the `menu` class of the `body` element when click the button:

```html
<body>
	<button x-toggle="body:menu">Toggle</button>

	<script src="https://cdn.jsdelivr.net/gh/rilwis/ejs/e.min.js"></script>
</body>
```
