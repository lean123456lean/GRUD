import serviceTarefa from "../services/service.tarefa.js";

function Listar(req, res){
    serviceTarefa.Listar(function(err, result){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });    
}

function Inserir(req, res){
    serviceTarefa.Inserir(req.body, function(err, result){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(201).json(result[0]);
        }
    });   
}

function Editar(req, res){
    serviceTarefa.Editar(req.params.id_tarefa, req.body, function(err, result){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });   
}

function Excluir(req, res){
    serviceTarefa.Excluir(req.params.id_tarefa, function(err, result){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });   
}

export default {Listar, Inserir, Editar, Excluir};