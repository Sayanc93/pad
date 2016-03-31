'use strict';

var stringpad = {
  left: function(str, len, ch) {
    var cache = ['', ' ', '  ', '   ', '    ', '     '];
    str = str + '';
    len = len - str.length;
    if (len <= 0)
      return str;
    if (len === Infinity)
      throw new RangeError('Infinity is not a valid range for pad function');
    if (ch === ' ' && len <= 5)
      return cache[len] + String(str);

    if (!ch && ch !== 0)
      ch = ' ';

    ch = ch + '';
    var padding = '';

    for (;;) {
      if ((len & 1) == 1)
        padding += ch;

      len >>>= 1;

      if (len === 0)
        break;
      ch += ch;
    }
    return padding + str;
  },

  right: function(str, len, ch) {
    str = str + '';
    len = len - str.length;
    var cache = ['', ' ', '  ', '   ', '    ', '     '];
    if (len <= 0)
      return str;
    if (len === Infinity)
      throw new RangeError('Infinity is not a valid range for pad function');
    if (ch === ' ' && len <= 5)
      return String(str) + cache[len];

    if (!ch && ch !== 0)
      ch = ' ';

    ch = ch + '';
    var padding = '';

    for (;;) {
      if ((len & 1) == 1)
        padding += ch;

      len >>>= 1;

      if (len === 0)
        break;
      ch += ch;
    }
    return str + padding;
  },

  center: function(str, len, ch) {
    str = str + '';
    len = len - str.length;
    var cache = ['', ' ', '  ', '   ', '    ', '     '];
    if (len <= 0)
      return str;
    if (len === Infinity)
      throw new RangeError('Infinity is not a valid range for pad function');
    if (ch === ' ' && len <= 5)
      return String(str) + cache[len];

    if (!ch && ch !== 0)
      ch = ' ';

    ch = ch + '';
    var padding = '';

    for (;;) {
      if ((len & 1) == 1)
        padding += ch;

      len >>>= 1;

      if (len === 0)
        break;
      ch += ch;
    }
    return padding + str + padding;
  }
};

module.exports = stringpad;
