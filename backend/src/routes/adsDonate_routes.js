const express = require('express');
const router = express.Router();

const {getAllAds,getAdById,addAdvertistment,deleteAd,updateAd} = require('../controllers/adsDonate_controller');

router.get('/', getAllAds);
router.get('/:id', getAdById);
router.post('/', addAdvertistment);
router.put('/:id', deleteAd);
router.delete('/:id', updateAd);

module.exports = router;
