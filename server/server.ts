import express from 'express';

const server = express();

server.get('/', (req, res) => {
    return res.send('hello universe');
});

server.listen(3000, () => console.log('server running'))
