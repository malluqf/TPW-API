const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM duvidas', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM duvidas WHERE id = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, email, categoria, mensagem) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO duvidas(nome, email, categoria, mensagem) VALUES (?, ?, ?, ?)', 
                [nome, email, categoria, mensagem], (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertId);
                }
            );
        });
    },

    alterar: (id, nome, email, categoria, mensagem) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE duvidas SET nome = ?, email = ?, categoria =?, mensagem = ? WHERE id = ?', 
                [nome, email, categoria, mensagem, id], (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (id) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM duvidas WHERE id = ?',[id], (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

};