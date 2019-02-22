const Product = require('../Models/ProductModel');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    const product = new Product(
        {
            nome: req.body.nome,
            preco: req.body.preco
        }
    );

    product.save(function (err,data) {
        res.send({message:'Product Created successfully',data:data})
    })
};

exports.product_details = function (req, res) {

    Product.findById(req.params.id, function (err, product) {
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findOneAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        res.send('Deleted successfully!');
    })
};

exports.index = function (req, res) {
    Product.find({}, function (err, product) {
        res.send(product);
    })
};