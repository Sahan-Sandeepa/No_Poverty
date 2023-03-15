const Event = require('../models/event_modal');
const mongoose = require('mongoose')

//Add new event
const addEvent = async (req, res) => {
    try {
        //add new event
        const newEvent = new Event({
            eventNo: req.body.eventNo,
            eventName: req.body.eventName,
            eventPlace: req.body.eventPlace,
            eventDetails: req.body.eventDetails,
            eventDate: req.body.eventDate,
            eventStatus: req.body.eventStatus,
        });
        //save
        const saveEvent = await newEvent.save();
        res.status(200).json(saveEvent);
    } catch (e) {
        console.log(e);
        return res.status(501).json(e.message);
    }
}

//GET all event details
const getAllEvent = async (req, res) => {
    Event.find({})
    .then((Event) => {
        res.status(200).json({ Event });
    })
    .catch((error) => {
        res.status(401).json(error.message);
});
}

//Update event
const updateEvent = async (req, res) => {
    Event.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    })
        .then((Claim) => {
            res.status(200).json({ Claim });
        })
        .catch((error) => {
            res.status(501).json(error.message);
        });
}

//Delete event
const deleteEvent = async (req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then((Event) => {
            res.status(200).json({ Event });
        })
        .catch((error) => {
            res.status(501).json(error.message);
        });
}

//FIND specific detail
const getSpecific = async (req, res) => {
    let eventId = req.params.id;
    const user = await Event.findById(eventId)
        .then((Event) => {
            res.status(200).send({ Event });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ error: err.message });
        });
};

module.exports = {
    addEvent,
    getAllEvent,
    updateEvent,
    deleteEvent,
    getSpecific,
};
