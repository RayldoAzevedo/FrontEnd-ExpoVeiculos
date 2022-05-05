import React from 'react'

function ListVeiculos() {

    const url = "http://localhost:8080/animais"

    const carro  = {
        imagem: "C:\Users\rayld\Desktop\Trabalho 4 Web\imagens",
        nome: "Rafael Maverick",
        marca: "Maverick",
        modelo: "Conversivel",
        ano: "1943",
        categoria: "passeio",
        valor: "10000000",        
        cor: "preta",      
        
    }

    return (
        <>
            <div className="container mt-5 mb-5 card bg-light d-flex w-100">
                <div className="row justify-content-center">

                    <div className="col col-sm-4" id="show">
                        <div className="row justify-content-center">
                            <img src={carro.imagem} className="" />
                            <div className="fs-2 fw-bold descricaotexto text-xl mb-2">
                                <p><label >{carro.nome} </label> - <label className="fst-italic fs-5">{carro.marca} </label></p>
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className="col-sm-1 col-lg-5 ms-3">
                            <a href="/login" className=""> <button className="button button-1">Voltar</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-5 col-lg-3 ms-4 exibirdetalhes">
                        <div className="row mt-4">
                            <label className=""><strong>Ano:</strong> <spam>{carro.ano}</spam></label>
                            <label className=""><strong>Modelo:</strong> <spam>{carro.modelo}</spam></label>
                            <label className=""><strong>Marca:</strong> <spam>{carro.marca}</spam></label>
                            <label className=""><strong>Cor:</strong> <spam>{carro.cor}</spam></label>
                            <label className=""><strong>Valor:</strong> <spam>{carro.valor}</spam></label>
                            <label className=""><strong>Categoria:</strong> <spam>{carro.categoria}</spam></label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListVeiculos;
