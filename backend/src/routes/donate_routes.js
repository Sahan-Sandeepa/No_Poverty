const express = require('express');
const router = express.Router();

const {getDonations,getDonationById,makeDonation,deleteDonation,updateDonation} = require('../controllers/donate_controller');

router.get('/', getDonations);
router.get('/:id', getDonationById);
router.post('/', makeDonation);
router.put('/:id', deleteDonation);
router.delete('/:id', updateDonation);

module.exports = router;
