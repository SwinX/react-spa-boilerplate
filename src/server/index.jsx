import path from 'path';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/app';
import template from './template';

const server = express();

server.use('/assets', express.static(path.resolve(__dirname, '..', '..', 'dist', 'assets')));

server.get('/', (req, res) => {
    const isMobile = true;
    const initialState = {isMobile};
    const appString = renderToString(<App {...initialState} />);

    console.log(appString);

    res.send(template({
        body: appString,
        title: 'Hello World from the server',
        initialState: JSON.stringify(initialState)
    }));
});

server.listen(8080, () => {
    console.log('listening');
});
