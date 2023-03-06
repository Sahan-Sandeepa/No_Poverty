const express = require('express');
const router = express.Router();

const { addEvent, getAllEvent, updateEvent, deleteEvent } = require('../controllers/event_controller');

router.post("/addevent", addEvent);
router.get("/getAll", getAllEvent);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

module.exports = router;