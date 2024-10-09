import {db} from "../config/database.js";

function Listar(FunctionCallback){
    let sql = "select * from tarefas";

    db.all(sql, [], function(err, rows){
        FunctionCallback(err, rows);
    });
}

function Inserir(body, FunctionCallback){
    db.all("insert into tarefas(descricao, concluido) values(?, ?) returning id_tarefa", 
            [body.descricao, body.concluido], function(err, rows){
        FunctionCallback(err, rows);
    });
}

function Editar(id_tarefa, body, FunctionCallback){
    db.all("update tarefas set descricao=?, concluido=? where id_tarefa=? returning id_tarefa", 
        [body.descricao, body.concluido, id_tarefa], function(err, rows){
        FunctionCallback(err, rows);
    });
}

function Excluir(id_tarefa, FunctionCallback){
    db.all("delete from tarefas where id_tarefa=? returning id_tarefa", [id_tarefa], function(err, rows){
        FunctionCallback(err, rows);
    });
}

export default {Listar, Inserir, Editar, Excluir};