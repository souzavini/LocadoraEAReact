import React from 'react'

export default props => {

    const rows = props.Clientes.map(cliente => {
        return (
            <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.dataNascimento}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={e => props.editar(cliente.id)}>Editar</button>
                    <button type="button" className="btn btn-danger" onClick={e => props.deletar(cliente.id)}>Deletar</button>
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
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Data de Nascimento</th>
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