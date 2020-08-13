import React from 'react'
import CardForm from '../../Components/CardForm'
import FormGroup from '../../Components/FormGroup'
import { withRouter } from 'react-router-dom'
import FilmeService from '../../Service/FilmeService';



class CadastroFilme extends React.Component {
    constructor(){
        super();
        this.service = new FilmeService();
    }

state = {
    classificacaoIndicativa: '',
    lancamento: '',
    titulo:''

}
cadastrar = () =>{
    const filmes = {
        classificacaoIndicativa:this.state.classificacao,
        lancamento:this.state.lancamento,
        titulo:this.state.titulo
    }
    this.service.cadastrar(filmes)
    .then(response => {
        console.log("Sucesso")
        this.props.history.push('/filme')
    }).catch(erro => {
        console.log(erro.response)
    })
}

    cancelar = () => {
        this.props.history.push("/cliente")
    }

    render() {
        return (
            <div>
                <div>
                    <CardForm legend="Cadastro de Filmes">
                        <FormGroup htmlfor="exampleInputEmail" label="Titulo do Filme">
                            <input type="text" className="form-control" id="inputProduto" name="cliente" placeholder="Digite o titulo do filme" onChange={e => this.setState({ titulo: e.target.value })} />
                        </FormGroup>
                        <FormGroup htmlfor="exampleInputEmail" label="Escolha a classificação indicativa">
                            <select class="custom-select" onChange={e=> this.setState({classificacaoIndicativa: e.target.value})}>
                                <option selected="">Escolha</option>
                                <option value="1">Livre</option>
                                <option value="2">Dez Anos</option>
                                <option value="3">Quatorze Anos</option>
                                <option value="3">Dezesseis Anos</option>
                                <option value="3">Dezoito Anos</option>
                            </select>
                        </FormGroup>
                        <FormGroup htmlfor="exampleInputEmail" label="O filme é um lançamento ? ">
                        <select class="custom-select" onChange={e=> this.setState({lancamento: e.target.value})}>
                                <option selected="">Escolha</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </FormGroup>
                        <button onClick={this.cadastrar} type="button" className="btn btn-info">Salvar </button>
                        <button type="button" onClick={this.cancelar} className="btn btn-danger"> Cancelar</button>

                    </CardForm>
                </div>
            </div>
        )
    }
}
export default withRouter(CadastroFilme);