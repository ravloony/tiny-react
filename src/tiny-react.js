import { isArray, isString, isFunction, isHTMLUnknownElement, camelCaseToKebabCase } from './utils.js';
import { debug, error, group, groupEnd, log } from './log.js';
import { initializeState } from './state';

export function dom(type, props, children = null) {
  group();

  debug("Type:", type);
  debug("Props:", props);
  debug("Children:", children);

  let node;
  if (isString(type)) {
    debug('string node', type);
    if (type === '#text') {
      debug('Creating text node');
      node = document.createTextNode(children);
    } else {
      debug('Creating HTML node', type);
      node = document.createElement(type);
      if (isHTMLUnknownElement(node)) {
        error('Not a known element');
        throw "HTML Element unknown";
      }
    }
  } else if (isFunction(type)) {
    debug('executing Function node');
    debug(type);
    node = type({...props, children});
  } else {
    throw 'Unsupported node type';
  }

  if (props) {
    //Handle props
    let { style, ...other } = props;

    if (style) {
      for (let [key, value] of Object.entries(style)) {
        let cssKey = camelCaseToKebabCase(key);
        if (node.style[cssKey] !== undefined) {
          node.style[cssKey] = value;
        }
      }
    }


    for (let [key, value] of Object.entries(other)) {
      node[key] = value;
    }
  }

  //Handle children
  if (children && isArray(children) && !isFunction(type)) {

    children
      .forEach(childNode => {
        debug('Appending child', childNode);
        node.appendChild(childNode);
      });
  }

  debug('end of pass');
  groupEnd();

  return node;
}

function tiny(where, what, state) {
  initializeState(state);

  let element = document.querySelector(where);

  element.appendChild(what);
}

export default tiny;
