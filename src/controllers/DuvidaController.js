const DuvidaService = require('../services/DuvidaService');

module.exports = {
    buscarTodos: async(req, res)=>{
        let json = {error: '', result: []};

        let duvidas = await DuvidaService.buscarTodos();

        for(let i in duvidas){
            json.result.push({
                nome: duvidas[i].nome,
                email: duvidas[i].email,
                categoria: duvidas[i].categoria,
                mensagem: duvidas[i].mensagem
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; //para pegar o parametro
        let duvida = await DuvidaService.buscarUm(id);

        if(duvida){
            json.result = duvida; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async(req, res) =>{
        let json = {error:'', result:{}};

        let nome =req.body.nome;
        let email =req.body.email;
        let categoria =req.body.categoria;
        let mensagem =req.body.mensagem;

        if (nome && email && categoria && mensagem){
            let DuvidaId = await DuvidaService.inserir(nome, email, categoria, mensagem);
            json.result = {
                id: DuvidaId,
                nome,
                email,
                categoria,
                mensagem
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) =>{
        let json = {error:'', result:{}};

        let id =req.params.id;
        let nome =req.body.nome;
        let email =req.body.email;
        let categoria =req.body.categoria;
        let mensagem =req.body.mensagem;

        if (id && nome && email && categoria && mensagem){
            await DuvidaService.alterar(id, nome, email, categoria, mensagem);
            json.result = {
                id,
                nome,
                email,
                categoria,
                mensagem
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await DuvidaService.excluir(req.params.id);

        res.json(json);
    }
}