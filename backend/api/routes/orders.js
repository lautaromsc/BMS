const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Order fetched'
    })
});

router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'Order was created'
    })
});

router.get('/:orderId',(req,res,next) => {
    res.status(200).json({
        message: 'Order was created',
        orderId: req.params.orderId
    })
});


router.delete('/:orderId',(req,res,next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    })
});

module.exports = router;