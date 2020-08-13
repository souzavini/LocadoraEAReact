import React from 'react'

export default props => {

    const rows = props.Filmes.map(filme => {
        return (
            <tr key={filme.id}>
                <td>{filme.id}</td>
                <td>{filme.titulo}</td>
                <td>{filme.classificacaoIndicativa}</td>
                <td>{filme.lancamento}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={e => props.editar(filme.id)}>Editar</button>
                    <button type="button" className="btn btn-danger" onClick={e => props.deletar(filme.id)}>Deletar</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="bs-component">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Classificacao Indicativa</th>
                                <th>Lancamento</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}