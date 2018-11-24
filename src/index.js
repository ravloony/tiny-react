import tiny from './tiny-react';

tiny(
    '#app',
    [
        'div',
        { 'classname': 'app-root', 'style': { 'backgroundColor': "blue" } },
        [
            [
                'p',
                { 'classname': 'app-para', 'style': { 'backgroundColor': "red" } },
                "Hello world"
            ]
        ]
    ]
);
