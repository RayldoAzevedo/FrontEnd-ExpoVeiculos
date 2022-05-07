import React from 'react'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {IoLogoModelS, } from 'react-icons/io'
import {MdModelTraining, } from 'react-icons/md'
import {GiMoneyStack, } from 'react-icons/gi'
import {FaUserAstronaut, } from 'react-icons/fa'
import {FiShare, } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import apiService from '../../service/apiService'

import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ListVeiculos.css'

const ListVeiculos = () =>{

        const [ veiculos, setVeiculo] = useState([]);

        // useEffect(() => {
        //     async function fetchVeiculo() {
        //       // You can await here
        //       const response = await fetch(apiService.listarVeiculos());
              
        //       const data = await response.json();
        //       setVeiculo(data);
        //     }
        //     //chamando o metodo
        //     fetchVeiculo();
            
        //   }, []);

        useEffect(() => {
            apiService.listarVeiculos().then((response) => {
                setVeiculo(response.data).catch((err) => {
                    console.error("ops! Erro ao listar veiculos" + err);
                });
            });
          }, []);
        
          if (!veiculos) return null;

          console.log(veiculos);        

        return (
            <div className='corpo'>
                <div className='container'>
                    <div class="row ">     
                           
                            {/* CARTAO DE EXIBIÇÃO COM MATERIAL UI */}
                            
                                {
                                veiculos.map( (veiculo, index) => (
                                    <div className='col s12 m6 l3 mb-4 ' >
                                        
                                    <Card sx={{ maxWidth: 400 }} className= 'grey lighten-2' key={index}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="240"
                                        image={veiculo.foto}
                                        alt="expo-veiculos"
                                        className='mt-2'
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        <IoLogoModelS className='icon'></IoLogoModelS> {veiculo.modelo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                            <div class="card-content">
                                                <label id='sobre' className='black-text'>{veiculo.sobre}</label><br></br>
                                                <div className='indigo lighten-5 p-2'>
                                                    <FaUserAstronaut className='icon'></FaUserAstronaut><span class="card-title black-text text-darken-4"> Proprietário: </span>
                                                    <label className='red-text'>{veiculo.proprietario}</label> <br></br>
                                                    <AiTwotoneCalendar className='icon'></AiTwotoneCalendar>    <span class="card-title  black-text text-darken-4"> Ano: </span>
                                                    <label className='red-text'>{veiculo.ano}</label> <br></br>
                                                    <MdModelTraining className='icon'></MdModelTraining>    <span class="card-title  black-text text-darken-4"> Marca: </span>
                                                    <label className='red-text'>{veiculo.marca}</label> <br></br>
                                                    <GiMoneyStack className='icon'></GiMoneyStack>    <span class="card-title  black-text text-darken-4"> Valor estimado: </span>
                                                    <label className='red-text'>{veiculo.valorEstimado}</label> <br></br>
                                                </div>
                                            </div>
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Button variant="contained" color="error">
                                        Compartilhar&nbsp;&nbsp;&nbsp;<FiShare className="icones"></FiShare>
                                    </Button>
                                    </CardActions>
                                    </Card>                            
                            </div>
                                    ))}
                    </div>
                </div>
            </div>
         )
}

export default ListVeiculos;

