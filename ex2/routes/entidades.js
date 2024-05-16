var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/:nipc', function(req, res, next) {
    axios.get('http://localhost:16000/contratos?entidade=' + req.params.nipc)
        .then(function(response){
            var name = response.data[0].entidade_comunicante;
            var nipc = req.params.nipc;
            var somatorio = 0;
            for(var i = 0; i < response.data.length; i++){
                somatorio += response.data[i].precoContratual;
            }
            res.render('entidade', { contrato: response.data, name: name, nipc: nipc, somatorio: somatorio});
        })
        .catch(function(error){
        console.log(error);
        });
    });

module.exports = router;