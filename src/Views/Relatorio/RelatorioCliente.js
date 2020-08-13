import React from 'react'
import FormGroup from '../../Components/FormGroup'
import CardForm from '../../Components/CardForm'
import { withRouter } from 'react-router-dom';


class RelatorioCliente extends React.Component{

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
                <button type="button" onClick={this.prepararCadastroCliente} className="btn btn-primary" style={{position:'relative', left:'1050px'}}>Clientes Em atraso na Devolução</button>
                <button type="button" onClick={this.prepararCadastroFilme} className="btn btn-primary" style={{position:'relative', left:'-250px'}}>O Segundo Cliente que mais alugou filmes</button>
                <CardForm legend="Relatorio de Clientes"> 
                </CardForm>
            </div>
        )
    }
}
export default withRouter(RelatorioCliente);