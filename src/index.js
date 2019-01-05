import tiny, { dom } from './tiny-react';
import dummy from './dummy.js';

let Groot = props => dom(
  '#text',
  props,
  "I am Groot"
);

let tree = dom(
  'div',
  {
    className: 'app-root',
    style: { backgroundColor: "blue" }
  },
  [
    dom(
      'p',
      {
        className: 'app-para',
        style: { backgroundColor: "red" }
      },
      [
        dom(
          '#text',
          null,
          "Hello world"
        )
      ]
    ),
    dom(
      Groot,
      { className: "groot" }
    ),
    dom(
      dummy,
      {},
      'wwat'
    )
  ]
);

console.log('got a tree');

tiny('#app', tree);
