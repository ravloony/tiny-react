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

function isValid(type) {
    return validNodes.includes(type);
}

function buildTree(what) {
    return what.map(node => buildNode(node));
}

function buildNode(what) {
    //console.log(JSON.stringify(what));
    let { type, props = {}, children = [] } = what;

    let hasChildren = true;
    let node;
    if (type === '#text') {
        hasChildren = false;
        node = document.createTextNode(what.nodeValue);
    } else if (isValid(type)) {
        node = document.createElement(type);
    } else {
        throw `${type} is not a valid type or DOM element`;
    }

    //Handle props



    //Handle children
    if (hasChildren) {

        let childrenNodes = buildTree(children);

        childrenNodes.forEach(childNode => {
            node.appendChild(childNode);
        });
    }

    return node;
}

function tiny(where, what) {
    let root = buildNode(what);

    let element = document.querySelector(where);

    element.appendChild(root);
}

export default tiny;
