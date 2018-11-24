import { isArray, isString, isFunction, isHTMLUnknownElement } from './utils.js';

function buildTree(what) {
    //console.log(JSON.stringify(what));
    let { type, props = {}, children = [] } = what;

    let hasChildren = true;
    let node;
    if (isString(type)) {
        if (type === '#text') {
            hasChildren = false;
            node = document.createTextNode(what.nodeValue);
        } else {
            node = document.createElement(type);
            if (isHTMLUnknownElement(node)) {
                throw "HTML Element unknown";
            }
        }
    } else if (isFunction(type)) {
        hasChildren = false;
        node = buildTree(type(props));
    } else {
        throw 'Unsupported node type';
    }

    //Handle props



    //Handle children
    if (hasChildren) {

        children
            .map(buildTree)
            .forEach(childNode => {
                node.appendChild(childNode);
            });
    }

    return node;
}

function tiny(where, what) {
    let root = buildTree(what);

    let element = document.querySelector(where);

    element.appendChild(root);
}

export default tiny;
