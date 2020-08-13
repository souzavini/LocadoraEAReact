import React from 'react'
import CardForm from '../../Components/CardForm'
import FormGroup from '../../Components/FormGroup'
import { withRouter } from 'react-router-dom'



class Alugar extends React.Component {


    cancelar = () => {
        this.props.history.push("/cliente")
    }

    render() {
        return (
            <div>
                <div>
                    <CardForm legend="Alugar Filme">
                        <FormGroup htmlfor="exampleInputEmail" label="Titulo do Filme">
                            <input type="text" className="form-control" id="inputProduto" name="cliente" placeholder="Digite o titulo do filme" onChange={e => this.setState({ nomeProduto: e.target.value })} />
                        </FormGroup>
                        <FormGroup htmlfor="exampleInputEmail" label="Escolha a classificação indicativa">
                            <select class="custom-select">
                                <option selected="">Escolha</option>
                                <option value="1">Livre</option>
                                <option value="2">Dez Anos</option>
                                <option value="3">Quatorze Anos</option>
                                <option value="3">Dezesseis Anos</option>
                                <option value="3">Dezoito Anos</option>
                            </select>
                        </FormGroup>
                        <FormGroup htmlfor="exampleInputEmail" label="O filme é um lançamento ? ">
                        <select class="custom-select">
                                <option selected="">Escolha</option>
                                <option value="1">Sim</option>
                                <option value="2">Não</option>
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
export default withRouter(Alugar);