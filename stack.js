//
// to be completed
// zeeAlso multiple0nBrowser.js
//

class Stack {
  constructor(){console.log('Dummie Stack created...')}
}

(function verify() {// AMD
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return Stack
      console.log('onAMD')
    })
  } // NodeJS/CommonJS
  else if (typeof exports === 'object') {
    if (typeof module === 'object' && typeof module.exports === 'object') {
      exports = module.exports = Stack
      console.log('onNode')
    }// Browser
  }
  else if (typeof window === 'object') {
    window.Stack = Stack
    console.log('onBrowser')
  }
  else {//ES6
    console.log('onES6')
    console.log(global.Stack)
    global.Stack = Stack
    console.log(global.Stack)
  }

  let s = new Stack()
    console.log(typeof s, '0.0.1')
})()
