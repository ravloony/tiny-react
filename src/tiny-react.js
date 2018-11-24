import { isArray, isString } from './utils.js';

function makeDomElement(tag) {
    let element = document.createElement(tag);
    return element;
}

var validNodes = [
    'article',
    'aside',
    'blockquote',
    'body',
    'div',
    'footer',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'main',
    'nav',
    'p',
    'section',
    'span'
];


function buildTree(what) {
    return what.map(node => buildNode(node));
}

function buildNode(what) {
    let [ nodeName, attributes, children ] = what;
    let node = document.createElement(nodeName);

    if (isString(children)) {
        node.textContent = children;
    }

    if (isArray(children)) {

        let childrenNodes = buildTree(children);

        childrenNodes.forEach(childNode => {
            node.append(childNode);
        });
    }
    return node;
}

function tiny(where, what) {
    let tree = buildTree(what);

    let element = document.querySelector(where);

    element.replaceWith(tree);
}

export default tiny;
