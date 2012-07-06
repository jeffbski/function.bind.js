# function.bind.js

Old webkit (and iOS) browsers are missing the ES5 Function.prototype.bind()
and thus when it is used, the error is "Undefined property bind".

This module will add the bind function to the Function.prototype if it does
not already exist.

Adapted into a UMD module from WebReflection http://stackoverflow.com/a/10725751

MIT License

## Usage

You can load it via script tag or using AMD

### script.scr

```html
<html>
  <head>
    <script src="function-bind.js"></script>
  </head>
  <body>
  </body>
</html>
```

### AMD

In your main.js

```javascript
require(['function-bind'], function () {
});
```
