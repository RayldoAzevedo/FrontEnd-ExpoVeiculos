import React from 'react'
import {AiTwotoneCalendar, } from 'react-icons/ai'
import {IoLogoModelS, } from 'react-icons/io'
import {MdModelTraining, } from 'react-icons/md'
import {GiMoneyStack, } from 'react-icons/gi'
import {FaUserAstronaut, } from 'react-icons/fa'
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ListVeiculos = () =>{
        return (
            <>
                <div className='container'>
                    <div class="row ">

                        {/* CARTAO DE EXIBIÇÃO COM MATERIAL UI */}
                        <Card sx={{ maxWidth: 345 }} className= 'grey lighten-2'>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="240"
                                image="ft1.jpg"
                                alt="expo-veiculos"
                                className='mt-2'
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Maverick
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                    <div class="card-content">
                                        <label id='sobre' className='black-text mb-4'>Carro esportivo usado na competição de 1985 em Mic - USA </label><br></br>
                                        <div className='indigo lighten-5 p-2'>
                                            <span class="card-title  black-text text-darken-4"><FaUserAstronaut/> Proprietário: </span><br></br>
                                            <span class="card-title  black-text text-darken-4"><AiTwotoneCalendar/> Ano: </span><br></br>
                                            <span class="card-title  black-text text-darken-4"><IoLogoModelS/> Modelo</span><br></br>
                                            <span class="card-title  black-text text-darken-4"><MdModelTraining/> Marca</span><br></br>
                                            <span class="card-title  black-text text-darken-4"><GiMoneyStack/> Valor estimado</span><br></br>
                                        </div>
                                    </div>

                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Compartilhar
                                </Button>
                            </CardActions>
                            </Card>

                    </div>
                </div>
            </>
         )
}

export default ListVeiculos;

