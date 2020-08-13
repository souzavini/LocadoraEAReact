import ApiService from './ApiService'

class ClienteService extends ApiService{

    constructor(){
        super('/api/cliente');
    }

    cadastrar(objeto){
        return this.post('',objeto);
    }

    obterTodos(){
        return this.get('/');
    }

    obterNomes(){
        return this.get('');
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

    editar(objeto,id){
        return this.put(`/${id}`,objeto);
    }
}


export default ClienteService;