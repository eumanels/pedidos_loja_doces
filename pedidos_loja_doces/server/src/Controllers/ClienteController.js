import ClienteModel from "../Models/ClienteModel.js"
import PedidoModel from "../Models/PedidoModel.js";

class ClienteController{
    constructor(){
        
    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente;
        const endereco = req.body.endereco;
        ClienteModel.create(nome_cliente, endereco).then(
            resposta => {
                console.debug("CADASTRANDO CLIENTE")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao cadastrar")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        ClienteModel.read().then(
            resposta => {
                console.debug("LISTANDO CLIENTES")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao listar clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_cliente = req.params.id_cliente;
        const nome_cliente = req.body.nome_cliente;
        const endereco = req.body.endereco

        ClienteModel.update(id_cliente, nome_cliente, endereco).then(
            resposta =>{
                console.debug("Atualizando o cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente;

        ClienteModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Cliente Deletado")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }
}

export default new ClienteController();