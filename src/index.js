import tiny from './tiny-react';

let Groot = props => ({
    type: '#text',
    props,
    nodeValue: "I am Groot"
});

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
        },
        {
            type: Groot,
            props: { className: "groot" }
        }
    ]
};

tiny('#app', tree);
