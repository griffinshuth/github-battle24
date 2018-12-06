const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({suppliers: [
        'cofee roaster',
        'food vendor',
        'tea distributor'
    ]})
});

router.post('/', (req, res) => {
    const supplier = req.body;
    res.status(201).json({created: supplier})
});

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    res.json({ deleted: id})
});

module.exports = router;