import React from 'react'
import FormGroup from '../../Components/FormGroup'
import CardForm from '../../Components/CardForm'
import { withRouter } from 'react-router-dom';


class RelatorioFilme extends React.Component{

    prepararCadastroCliente =()=>{
        this.props.history.push("/relatorio-cliente")
    }

    prepararCadastroFilme =()=>{
        this.props.history.push("/relatorio-filme")
    }

    render(){
        return(
            <div>
                <br></br>
                <button type="button" onClick={this.prepararCadastroCliente} className="btn btn-primary" style={{position:'relative', left:'1050px'}}>Filmes que nunca foram alugados</button>
                <button type="button" onClick={this.prepararCadastroCliente} className="btn btn-primary" style={{position:'relative', left:'250px'}}>Cinco filmes mais alugados do ultimo ano</button>
                <button type="button" onClick={this.prepararCadastroFilme} className="btn btn-primary" style={{position:'relative', left:'-650px'}}>Tres filmes menos alugados da ultima semana</button>
                <CardForm legend="Relatorio de Filmes"> 
                </CardForm>
            </div>
        )
    }
}
export default withRouter(RelatorioFilme);