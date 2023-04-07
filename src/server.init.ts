import express from "express";
import http2 from 'http2'
import http2Express from 'http2-express-bridge';
import { serverConfig, http2Config } from './server.config';

const app = http2Express(express);
app.get('/', (req, res, next) => {
    res.json({ message: 'dskldskl' })
})


if (serverConfig?.server.port && http2Config.key && http2Config.cert) {
    // start http2
    const server = http2.createSecureServer({ 
            key: http2Config.key,
            cert: http2Config.cert
    }, app);
    // start the server
    server.listen(serverConfig?.server.port, () => {
        console.log(`Server started at ${serverConfig?.server.port}`);
    })
} else { 
    throw new ReferenceError('Server property is not defined in package.json');
}