import tiny from './tiny-react';

let tree = {
    type: 'div',
    props: {
        className: 'app-root',
        style: { backgroundColor: "blue" }
    },
    children: [
        {
            type: 'p',
            props: {
                className: 'app-para',
                style: { backgroundColor: "red" }
            },
            children: [
                {
                    type: '#text',
                    nodeValue: "Hello world"
                }
            ]
        }
    ]
};

tiny('#app', tree);
