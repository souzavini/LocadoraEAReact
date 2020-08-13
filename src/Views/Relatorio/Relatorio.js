import React from 'react'
import FormGroup from '../../Components/FormGroup'
import CardForm from '../../Components/CardForm'
import { withRouter } from 'react-router-dom';


class Relatorio extends React.Component{

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
                <button type="button" onClick={this.prepararCadastroCliente} className="btn btn-primary" style={{position:'relative', left:'1160px'}}>Relatorio de Clientes</button>
                <button type="button" onClick={this.prepararCadastroFilme} className="btn btn-primary" style={{position:'relative', left:'-175px'}}>Relatorio de Filmes</button>
                <CardForm legend="Relatorios"> 
                </CardForm>
            </div>
        )
    }
}
export default withRouter(Relatorio);