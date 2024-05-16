var express = require('express');
var router = express.Router();
var contratos = require('../controllers/contratos');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.entidade){
        contratos.findByEntidade(req.query.entidade)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    }
    else if(req.query.tipo){
        contratos.findByTipo(req.query.tipo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    }
    else{
        contratos.listarTudo()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    }
});

router.get('/entidades', function(req, res, next) {
    contratos.listEntidades()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
})

router.get('/tipos', function(req, res, next) {
    contratos.listTipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
})

router.get('/:id', function(req, res, next) {
    contratos.findById(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res, next) {
      contratos.addContrato(req.body)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
    contratos.removeContrato(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res, next) {
    contratos.updateContrato(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;