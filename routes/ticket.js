const router = require('express').Router();
const db = require('../db/db');

// router.get('/tickets/t/:ticketId', (req, res) => {})
// router.patch('/tickets/t/:ticketId', (req, res) => {})
// router.delete('/tickets/t/:ticketId', (req, res) => {})
//short system akbare url dewar jonno....jekono akta way te korlei hbe
router
    .route('/t/:ticketId')
    .get((req, res) => {
        const ticketId = req.params.ticketId;
        const ticket = db.findById(ticketId);
        res.status(200).json(ticket)
    })
    .patch((req, res) => {
        const ticketId = req.params.ticketId;
        const updatedTicket = db.updateById(ticketId, req.body);
        res.status(200).json({message: 'Updated Successfully', updatedTicket});
    })
    .delete((req, res) => {
        const ticketId = req.params.ticketId;
        const deleteTicket = db.deleteById(ticketId);
        res.status(200).json({message: 'Deleted Successfully', deleteTicket})
    })

router
    .route('/u/:username')
    .get((req, res) => {
        const username = req.params.username;
        const tickets = db.findByUsername(username);
        res.status(200).json(tickets);
    })
    .patch((req, res) => { })
    .delete((req, res) => { })

router.post('/sell', (req, res) => {
    const {username, price} = req.body;
    const ticket = db.create(username, price);
    res.status(201).json({
        message:'Ticket created successfully',
        ticket
    });
})

router.post('/bulk', (req, res) => {
    const {username, price, quantity} = req.body;
    const tickets = db.bulkCreate(username, price, quantity);
    res.status(201).json({
        message: 'Bulk ticket created successfully',
        tickets
    });
})
router.get('/draw', (req, res) => {
    const winnerCount = req.params.wc ?? 4;
    const winners = db.draw(winnerCount);
    res.status(200).json(winners)
})
router.get('', (_req, res) => {
    const tickets = db.find();
    res.status(200).json(tickets)
})

module.exports = router;
