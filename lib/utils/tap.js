if(!Object.prototype.tap) {
  Object.prototype.tap = function(name) {
    if(typeof(name) == "function") {
      name.apply(this);
    } else {
      var args = Array.prototype.slice.call(arguments);
      this[name].apply(this, args.slice(1));
    }
    return this;
  };
}
