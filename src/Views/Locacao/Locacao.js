import React from 'react'
import FormGroup from '../../Components/FormGroup'
import CardForm from '../../Components/CardForm'
import { withRouter } from 'react-router-dom';


class Locacao extends React.Component{

    prepararCadastro =()=>{
        this.props.history.push("/alugar")
    }

    render(){
        return(
            <div>
                <br></br>
                <button type="button" onClick={this.prepararCadastro} className="btn btn-primary" style={{position:'relative', left:'1175px'}}>Alugar Filme</button>
                <CardForm legend="Filmes Alugados"> 
                </CardForm>
            </div>
        )
    }
}
export default withRouter(Locacao);