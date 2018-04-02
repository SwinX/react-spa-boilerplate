import {version} from '../../package';

export default ({body, title, initialState}) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <meta charset="utf-8">

            <link rel="stylesheet" href="/assets/bundle-${version}.css" />

            <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        </head>

        <body>
            <div id="root">${body}</div>
        </body>

        <script src="/assets/bundle-${version}.js"></script>
    </html>
    `;
};
