import React from 'react'
import FormGroup from '../../Components/FormGroup'
import CardForm from '../../Components/CardForm'
import { withRouter } from 'react-router-dom';
import FilmeService from '../../Service/FilmeService';
import FilmeTabela from './FilmeTabela';


class Filme extends React.Component{
    
    constructor(){
        super();
        this.service = new FilmeService();
    }
    state ={
        filmes: [],
    }

    obterTodos= () =>{
        this.service.obterTodos()
        .then(response =>{
            this.setState({filmes: response.data})
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
        this.props.history.push("/editar-filme")
    }

    prepararCadastro =()=>{
        this.props.history.push("/cadastro-filme")
    }

    render(){
        return(
            <div>
                <br></br>
                <button type="button" onClick={this.prepararCadastro} className="btn btn-primary" style={{position:'relative', left:'1175px'}}>Adicionar Filme</button>
                <CardForm legend="Filmes"> 
                </CardForm>
                <FilmeTabela Filmes={this.state.filmes} 
                deletar={this.deletar}
                editar={this.editar}/>
            </div>
        )
    }
}
export default withRouter(Filme);