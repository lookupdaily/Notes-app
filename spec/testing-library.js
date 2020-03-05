const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe(' ' + msg, fn);

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      console.log(`%c got: ${exp}`, 'color: red')
      console.log(`%c expected: ${assertion}`, 'color: blue')
      return false
    };
  },
  notToBe: (assertion) => {
    if (exp !== assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      console.log(`%c got: ${exp}`, 'color: red')
      console.log(`%c expected not to be: ${assertion}`, 'color: blue')
      return false
    };
  },
  toBeInstanceOf: (assertion) => {
    if (exp instanceof assertion) {
      console.log('%c pass', 'color: green')
      return true
    } else {
      console.log('%c fail', 'color: red')
      console.log(`%c got: ${exp}`, 'color: red')
      console.log(`%c expected: ${assertion}`, 'color: blue')
      return false
    };
  }
});

const expect = (exp) => matchers(exp); 