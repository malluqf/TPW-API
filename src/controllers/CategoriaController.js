const CategoriaService = require('../services/CategoriaService');

module.exports = {
    buscarTodos: async(req, res)=>{
        let json = {error: '', result: []};

        let categorias = await CategoriaService.buscarTodos();

        for(let i in categorias){
            json.result.push({
                nome: categorias[i].nome,
                icone: categorias[i].icone
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; //para pegar o parametro
        let categoria = await CategoriaService.buscarUm(id);

        if(categoria){
            json.result = categoria; //se tiver nota ele joga no json
        }

        res.json(json);
    }
}