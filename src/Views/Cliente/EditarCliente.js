import React from 'react'
import CardForm from '../../Components/CardForm'
import FormGroup from '../../Components/FormGroup'
import { withRouter } from 'react-router-dom'
import ClienteService from '../../Service/ClienteService';



class EditarCliente extends React.Component{  
    constructor(){
        super();
        this.service = new ClienteService();
    }

    state = {
        id:'',
        nome: '',
        cpf: '',
        dataNascimento: ''
    }

    atualizar = () =>{
        const cliente = {
            id: this.state.id,
            nome: this.state.nome,
            cpf:this.state.cpf,
            dataNascimento: this.state.dataNascimento
        }
        this.service.editar(cliente,cliente.id)
        .then(response => {
            console.log("Sucesso")
            this.props.history.push('/cliente')
        }).catch(erro => {
            console.log(erro.response)
        })
    }

    cancelar =()=>{
        this.props.history.push("/cliente")
    }
    cancelar =()=>{
        this.props.history.push("/cliente")
    }

    render(){
        return(
            <div>
               <div>
               <CardForm legend="Edição de Clientes">
                   <div>
                   <p className="lead">Digite exatamente as mesmas informações e altere apenas o necessario</p>
                   </div>
                    <FormGroup htmlfor="exampleInputEmail" label="ID">
                    <input type="text" className="form-control" id="inputProduto" name="cliente" placeholder="Digite seu ID" onChange={e=> this.setState({id: e.target.value})}/>
                    </FormGroup>
                    <FormGroup htmlfor="exampleInputEmail" label="Nome Cliente">
                    <input type="text" className="form-control" id="inputProduto" name="cliente" placeholder="Digite o nome do cliente" onChange={e=> this.setState({nome: e.target.value})}/>
                    </FormGroup>
                    <FormGroup htmlfor="exampleInputEmail" label="Quantidade">
                    <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Digite o CPF" onChange={e=> this.setState({cpf: e.target.value})}/>
                    </FormGroup>
                    <FormGroup htmlfor="exampleInputEmail" label="Preço produto">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite a data de nascimento" onChange={e=> this.setState({dataNascimento: e.target.value})}/>
                    </FormGroup>
                    <button onClick={this.atualizar} type="button" className="btn btn-info">Salvar </button>
                    <button type="button" onClick={this.cancelar} className="btn btn-danger"> Cancelar</button>

                </CardForm>
            </div>
            </div>
        )
    }
}
export default withRouter(EditarCliente);