import React from 'react'
import FormGroup from '../../Components/FormGroup'
import CardForm from '../../Components/CardForm'
import { withRouter } from 'react-router-dom';
import ClienteTabela from './ClienteTabela';
import ClienteService from '../../Service/ClienteService';


class Cliente extends React.Component{

    constructor(){
        super();
        this.service = new ClienteService();
    }

    state ={
        clientes: [],
    }

    prepararCadastro =()=>{
        this.props.history.push("/cadastro-cliente")
    }

    obterTodos= () =>{
        this.service.obterTodos()
        .then(response =>{
            this.setState({clientes: response.data})
        }).catch(error => {
            console.log("Erro");
        })
    }

    deletar = (id) => {
        this.service.deletar(id)
            .then(response => {
                this.obterTodos();
            }).catch(error => {
                console.log("Erro ao deletar");
            })
    }

    componentDidMount(){
        this.obterTodos();
    }

    editar = (id) => {
        this.props.history.push("/editar-cliente")
    }

    render(){
        return(
            <div>
                <br></br>
                <button type="button" onClick={this.prepararCadastro} className="btn btn-primary" style={{position:'relative', left:'1175px'}}>Adicionar Cliente</button>
                <CardForm legend="Clientes"> 
                </CardForm>
                <ClienteTabela Clientes={this.state.clientes} 
                deletar={this.deletar}
                editar={this.editar}/>
            </div>
        )
    }
}
export default withRouter(Cliente);