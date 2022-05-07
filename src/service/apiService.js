import axios from "axios";

const VEICULO_API_BASE_URL = 'http://localhost:8080';

class ApiService {

/**
* Busca os veiculos
* @returns{Promise<AxiosResponse<any>>}
*/
listarVeiculos() {
    return axios.get(VEICULO_API_BASE_URL + '/listar-veiculos');    
}

/**
* Consulta um veiculo por Id
* @param veiculoId
* @returns{Promise<AxiosResponse<any>>}
*/
consultarVeiculoById(veiculoId) {
        return axios.get(VEICULO_API_BASE_URL + '/consultar-veiculo/' + veiculoId);
}

/**
* Salva um Veiculo
* @param veiculo
* @returns{Promise<AxiosResponse<any>>}
*/
salvarUsuario(veiculo) {
    return axios.post(VEICULO_API_BASE_URL + '/salvar-veiculo' , veiculo);

}

/**
* Exclui um veiculo por Id
* @param veiculoId
* @returns{Promise<AxiosResponse<any>>}
*/
excluirUsuarioById(veiculoId) {
    return axios.delete(VEICULO_API_BASE_URL + '/excluir-veiculo/' + veiculoId);
}
}
export default new ApiService()