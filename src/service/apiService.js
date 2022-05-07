
const VEICULO_API_BASE_URL = 'https://api-expoveiculos.herokuapp.com/';

class ApiService {

/**
* Busca os veiculos
* @returns{Promise<AxiosResponse<any>>}
*/
listarVeiculos() {
    const url = VEICULO_API_BASE_URL + '/listar-veiculos';
    return url;
}

/**
* Consulta um veiculo por Id
* @param veiculoId
* @returns{Promise<AxiosResponse<any>>}
*/
consultarVeiculoById(veiculoId) {
    const url = VEICULO_API_BASE_URL + '/consultar-veiculo' + veiculoId;
    return url;
}

/**
* Salva um Veiculo
* @param veiculo
* @returns{Promise<AxiosResponse<any>>}
*/
salvarUsuario(veiculo) {
    const url = VEICULO_API_BASE_URL + '/salvar-veiculo' + veiculo;
    return url;
}

/**
* Exclui um veiculo por Id
* @param veiculoId
* @returns{Promise<AxiosResponse<any>>}
*/
excluirUsuarioById(veiculoId) {
    const url = VEICULO_API_BASE_URL + '/excluir-veiculo' + veiculoId;
    return url;
}
}
export default new ApiService()