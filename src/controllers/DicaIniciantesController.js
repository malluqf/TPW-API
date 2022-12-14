const DicaIniciantesService = require('../services/DicaIniciantesService');

module.exports = {
    buscarTodos: async(req, res)=>{
        let json = {error: '', result: []};

        let dicas = await DicaIniciantesService.buscarTodos();

        for(let i in dicas){
            json.result.push({
                titulo : dicas[i].titulo,
                imagem: dicas[i].imagem
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; //para pegar o parametro
        let dica = await DicaIniciantesService.buscarUm(id);

        if(dica){
            json.result = dica; //se tiver nota ele joga no json
        }

        res.json(json);
    }
}