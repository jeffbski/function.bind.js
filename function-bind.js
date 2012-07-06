/*global define:false */

/**
 * Adapted into UMD module by Jeff Barczewski
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    factory();
  }
}(this, function () {

  /**
   * Add Function.prototype.bind to browsers which don't have it (old webkit and iOS)
   *    Bind.js
   *    Copyright 2010, WebReflection
   *    License: http://www.opensource.org/licenses/mit-license.php
   *    http://stackoverflow.com/a/10725751
   */
  if (Function.prototype.bind === null || Function.prototype.bind === undefined) {
    Function.prototype.bind = (function (slice) {
      /*jshint validthis:true */
      // (C) WebReflection - Mit Style License
      function bind(context) {
        var self = this; // "trapped" function reference
        // only if there is more than an argument
        // we are interested into more complex operations
        // this will speed up common bind creation
        // avoiding useless slices over arguments
        if (1 < arguments.length) {
          // extra arguments to send by default
          var $arguments = slice.call(arguments, 1);
          return function () {
            return self.apply(
              context,
              // thanks @kangax for this suggestion
              arguments.length ?
                // concat arguments with those received
                $arguments.concat(slice.call(arguments)) :
                // send just arguments, no concat, no slice
                $arguments
            );
          };
        }
        // optimized callback
        return function () {
          // speed up when function is called without arguments
          return arguments.length ? self.apply(context, arguments) : self.call(context);
        };
      }

      // the named function
      return bind;

    } (Array.prototype.slice));
  }

}));


