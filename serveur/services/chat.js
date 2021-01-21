var Chat = require('../models/chat.js');

exports.getAll = function  (req, res, next) {
    Chat.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
}

exports.getById = function (req, res, next)  {
    Chat.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}
exports.add = function (req, res, next)  {
    Chat.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.update = function (req, res, next)  {
    Chat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.delete = function  (req, res, next)  {
    Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

