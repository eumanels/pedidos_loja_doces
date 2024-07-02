import PedidoModel from "../Models/PedidoModel.js"

class PedidoController{
    constructor(){
        
    }

    create(req,res){
        const descricao = req.body.descricao;
        const valor_total = req.body.valor_total;
        const id_cliente = req.body.id_cliente;
        PedidoModel.create(descricao, valor_total, id_cliente).then(
            resposta => {
                console.debug("CADASTRANDO PEDIDO")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao cadastrar pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        PedidoModel.read().then(
            resposta => {
                console.debug("LISTANDO PEDIDOS")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro ao listar pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_pedido = req.params.id_pedido;
        const descricao = req.body.descricao;
        const valor_total = req.body.valor_total;
        const id_cliente = req.body.id_cliente;
        PedidoModel.update(id_pedido, descricao, valor_total, id_cliente).then(
            resposta =>{
                console.debug("Atualizando o pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_pedido = req.params.id_pedido;

        PedidoModel.delete(id_pedido).then(
            resposta =>{
                console.debug("Pedido Deletado")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar Pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }
}

export default new PedidoController();