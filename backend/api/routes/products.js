const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Manejando el GET'
    })
});

router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'Manejando el POST'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == 'special') {
        res.status(200).json({
            message: 'Descubriste el ID especial',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'Pasaste un ID'
        })
    }

});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Producto actualizado!',
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Producto borrado!',
    })
});


module.exports = router;