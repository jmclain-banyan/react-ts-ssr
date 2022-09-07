import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Routes from '../src/Routes';
import { Request } from 'express'

const ClientContent = (request: Request) => {
    const content = renderToString(
        <StaticRouter location={request.url}>
            <Routes />
        </StaticRouter>
    )
    return content;
}

export default ClientContent;