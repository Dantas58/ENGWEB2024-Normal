var express = require('express');
var router = express.Router();
var contratos = require('../models/contratos');

module.exports.listarTudo = () => {
    const res = contratos.find({}).exec();
    return res;
}

module.exports.findById = (id) => {
    const res = contratos.findOne({ _id: id }).exec();
    return res;
}

module.exports.findByEntidade = (entidade) => {
    const res = contratos.find({ NIPC_entidade_comunicante: entidade }).exec();
    return res;
}

module.exports.findByTipo = (tipo) => {
    const res = contratos.find({ tipoprocedimento: tipo }).exec();
    return res;
}

module.exports.listEntidades = () => {
    const res = contratos.distinct("entidade_comunicante").exec();
    return res;
}

module.exports.listTipos = () => {
    const res = contratos.distinct("tipoprocedimento").exec();
    return res;
}

module.exports.addContrato = (id, contrato) => {
    if (!contrato) {
        throw new Error('contrato is undefined');
    }
    contrato._id = id;
    var novo = new contratos(contrato);
    return novo.save();
}

module.exports.removeContrato = (id) => {
    return contratos.deleteOne({ _id: id });
}

module.exports.updateContrato = (id, contrato) => {
    return contratos.updateOne({ _id: id }, contrato).then(
        data => {
            return data;
        }
    ).catch(
        err => {
            return err;
        }
    );
}