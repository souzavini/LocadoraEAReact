import React from 'react'
import CardForm from '../../Components/CardForm'
import FormGroup from '../../Components/FormGroup'
import { withRouter } from 'react-router-dom'
import ClienteService from '../../Service/ClienteService';



class CadastroCliente extends React.Component{
    constructor(){
        super();
        this.service = new ClienteService();
    }

    state = {
        nome: '',
        cpf: '',
        dataNascimento: ''
    }

    cadastrar = () =>{
        const cliente = {
            nome: this.state.nome,
            cpf:this.state.cpf,
            dataNascimento: this.state.dataNascimento
        }
        this.service.cadastrar(cliente)
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

    render(){
        return(
            <div>
               <div>
                <CardForm legend="Cadastro de Clientes">
                    <FormGroup htmlfor="exampleInputEmail" label="Nome Cliente">
                    <input type="text" className="form-control" id="inputProduto" name="cliente" placeholder="Digite o nome do cliente" onChange={e=> this.setState({nome: e.target.value})}/>
                    </FormGroup>
                    <FormGroup htmlfor="exampleInputEmail" label="Quantidade">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite o CPF" onChange={e=> this.setState({cpf: e.target.value})}/>
                    </FormGroup>
                    <FormGroup htmlfor="exampleInputEmail" label="Preço produto">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite a data de nascimento" onChange={e=> this.setState({dataNascimento: e.target.value})}/>
                    </FormGroup>
                    <button onClick={this.cadastrar} type="button" className="btn btn-info">Salvar </button>
                    <button type="button" onClick={this.cancelar} className="btn btn-danger"> Cancelar</button>

                </CardForm>
            </div>
            </div>
        )
    }
}
export default withRouter(CadastroCliente);