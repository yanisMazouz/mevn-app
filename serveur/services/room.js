var Room = require('../models/room.js');

exports.getAll = function (req, res, next)  {
    Room.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
}

exports.getById = function (req, res, next) {
    Room.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}
exports.add = function (req, res, next)  {
    Room.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.update = function (req, res, next)  {
    Room.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.delete = function (req, res, next)  {
    Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

