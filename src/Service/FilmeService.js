import ApiService from './ApiService'

class FilmeService extends ApiService{

    constructor(){
        super('/api/filme');
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


export default FilmeService;