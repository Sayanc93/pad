# stringpad
run:  
``npm install stringpad``  

A repository for npm module stringpad inspired by Azar's [Leftpad](https://github.com/azer/left-pad) (which recently [broke the internet](http://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/)), with performance improvements and Rightpad and Centerpad option too.

Implemented algorithm used for Javascript's [repeat](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).  Probably the fastest implementation of Azar's Leftpad, with added options.

Run tests using:
``node test``


Usage:  
stringpad.left('foo', 5)  
``'  foo'``  
stringpad.left('foobar', 6)  
``'foobar'``  
stringpad.left(1, 2, 0)  
``'01'``  
stringpad.left(1, 2, '-')   
``'-1'``  
stringpad.right('foo', 5)  
``'foo  '``  
stringpad.right('foobar', 6)  
``'foobar'``  
stringpad.right(1, 2, 0)  
``'10'``  
stringpad.right(1, 2, '-')  
``'1-'``  
stringpad.center('foo', 5)  
``'  foo  '``  
stringpad.center('foo', 6, '-')  
``'---foo---'``
