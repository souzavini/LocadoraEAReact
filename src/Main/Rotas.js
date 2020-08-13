import React from 'react'
import { Route, Switch , HashRouter} from 'react-router-dom'
import Home from '../Views/home';
import Cliente from '../Views/Cliente/Cliente';
import CadastroCliente from '../Views/Cliente/CadastroCliente';
import EditarCliente from '../Views/Cliente/EditarCliente';
import Filme from '../Views/Filme/Filme';
import CadastroFilme from '../Views/Filme/CadastroFilme';
import EditarFilme from '../Views/Filme/EditarFilme';
import Locacao from '../Views/Locacao/Locacao';
import Alugar from '../Views/Locacao/Alugar';
import Relatorio from '../Views/Relatorio/Relatorio';
import RelatorioCliente from '../Views/Relatorio/RelatorioCliente';
import RelatorioFilme from '../Views/Relatorio/RelatorioFilme'


function Rotas(){
    return(
        <HashRouter>
            <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/cliente" component={Cliente}/>
            <Route path="/cadastro-cliente" component={CadastroCliente}/>
            <Route path="/editar-cliente" component={EditarCliente}/>
            <Route path="/filme" component={Filme}/>
            <Route path="/cadastro-filme" component={CadastroFilme}/>
            <Route path="/editar-filme" component={EditarFilme}/>
            <Route path="/locacao" component={Locacao}/>
            <Route path="/alugar" component={Alugar}/>
            <Route path="/relatorio" component={Relatorio}/>
            <Route path="/relatorio-cliente" component={RelatorioCliente}/>
            <Route path="/relatorio-filme" component={RelatorioFilme}/>
            </Switch>
        </HashRouter>
    )
}
export default Rotas;