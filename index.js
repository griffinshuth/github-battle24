const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const supplyRouter = requre('./supply_router.js')

const server = express();
const PORT = 4000;

const customMW = require('./custom_middleware');
console.log('custome MW', customMW);
server.use(
    express.json(),
    helmet(),
    logger('tiny'),
    customMW.gatekeeper
);

server.use('/api/suppliers', supplyRouter)

server.get('/api/suppliers', (req, res) => {
    res.json({suppliers: [
        'cofee roaster',
        'food vendor',
        'tea distributor'
    ]})
});

server.post('/api/suppliers', (req, res) => {
    const supplier = req.body;
    res.status(201).json({created: supplier})
});

server.delete('/api/suppliers/:id', (req,res) => {
    const id = req.params.id;
    res.json({ deleted: id})
});

server.get('api/items', (req, res) => {
    res.json([
        'coffee beans',
        'more coffee beans',
        'some tea',
        'chocolate',
    ])
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})