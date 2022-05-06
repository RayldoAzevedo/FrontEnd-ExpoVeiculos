import React from 'react'
import {AiTwotoneCalendar, AiOutlineSend} from 'react-icons/ai'
import {IoLogoModelS, } from 'react-icons/io'
import {MdModelTraining, } from 'react-icons/md'
import {GiMoneyStack, } from 'react-icons/gi'
import {FaUserAstronaut, } from 'react-icons/fa'
import {FiShare, } from 'react-icons/fi'

import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ListVeiculos.css'

const ListVeiculos = () =>{
        return (
            <div className='corpo'>
                <div className='container'>
                    <div class="row ">

                            {/* CARTAO DE EXIBIÇÃO COM MATERIAL UI */}
                        <div className='col s12 m6 l3 mb-4'>
                            <Card sx={{ maxWidth: 400 }} className= 'grey lighten-2'>
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
                                            <label id='sobre' className='black-text'>Carro esportivo usado na competição de 1985  </label><br></br>
                                            <div className='indigo lighten-5 p-2'>
                                            <FaUserAstronaut className='icon'></FaUserAstronaut><span class="card-title black-text text-darken-4"> Proprietário: </span><br></br>
                                            <AiTwotoneCalendar className='icon'></AiTwotoneCalendar>    <span class="card-title  black-text text-darken-4"> Ano: </span><br></br>
                                            <IoLogoModelS className='icon'></IoLogoModelS>    <span class="card-title  black-text text-darken-4"> Modelo</span><br></br>
                                            <MdModelTraining className='icon'></MdModelTraining>    <span class="card-title  black-text text-darken-4"> Marca</span><br></br>
                                            <GiMoneyStack className='icon'></GiMoneyStack>    <span class="card-title  black-text text-darken-4"> Valor estimado</span><br></br>
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

                            {/* CARTAO DE EXIBIÇÃO COM MATERIAL UI */}
                        <div className='col s12 m6 l3 mb-4'>
                            <Card sx={{ maxWidth: 400 }} className= 'grey lighten-2'>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="240"
                                    image="ft2.jpg"
                                    alt="expo-veiculos"
                                    className='mt-2'
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Comb Corujinha
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <div class="card-content">
                                            <label id='sobre' className='black-text'>de 1968 a 1975  </label><br></br>
                                            <div className='indigo lighten-5 p-2'>
                                            <FaUserAstronaut className='icon'></FaUserAstronaut><span class="card-title black-text text-darken-4"> Proprietário: </span><br></br>
                                            <AiTwotoneCalendar className='icon'></AiTwotoneCalendar>    <span class="card-title  black-text text-darken-4"> Ano: </span><br></br>
                                            <IoLogoModelS className='icon'></IoLogoModelS>    <span class="card-title  black-text text-darken-4"> Modelo</span><br></br>
                                            <MdModelTraining className='icon'></MdModelTraining>    <span class="card-title  black-text text-darken-4"> Marca</span><br></br>
                                            <GiMoneyStack className='icon'></GiMoneyStack>    <span class="card-title  black-text text-darken-4"> Valor estimado</span><br></br>
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

                            {/* CARTAO DE EXIBIÇÃO COM MATERIAL UI */}
                        <div className='col s12 m6 l3 mb-4'>
                            <Card sx={{ maxWidth: 400 }} className= 'grey lighten-2'>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="240"
                                    image="ft3.jpg"
                                    alt="expo-veiculos"
                                    className='mt-2'
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ford Galaxie
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <div class="card-content">
                                            <label id='sobre' className='black-text'>De 1967 a 1969 </label><br></br>
                                            <div className='indigo lighten-5 p-2'>
                                            <FaUserAstronaut className='icon'></FaUserAstronaut><span class="card-title black-text text-darken-4"> Proprietário: </span><br></br>
                                            <AiTwotoneCalendar className='icon'></AiTwotoneCalendar>    <span class="card-title  black-text text-darken-4"> Ano: </span><br></br>
                                            <IoLogoModelS className='icon'></IoLogoModelS>    <span class="card-title  black-text text-darken-4"> Modelo</span><br></br>
                                            <MdModelTraining className='icon'></MdModelTraining>    <span class="card-title  black-text text-darken-4"> Marca</span><br></br>
                                            <GiMoneyStack className='icon'></GiMoneyStack>    <span class="card-title  black-text text-darken-4"> Valor estimado</span><br></br>
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
                            {/* CARTAO DE EXIBIÇÃO COM MATERIAL UI */}
                        <div className='col s12 m6 l3 mb-4'>
                            <Card sx={{ maxWidth: 400 }} className= 'grey lighten-2'>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="240"
                                    image="ft4.jpeg"
                                    alt="expo-veiculos"
                                    className='mt-2'
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ford Pickup
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <div class="card-content">
                                            <label id='sobre' className='black-text'>Ano 1929 </label><br></br>
                                            <div className='indigo lighten-5 p-2'>
                                            <FaUserAstronaut className='icon'></FaUserAstronaut><span class="card-title black-text text-darken-4"> Proprietário: </span><br></br>
                                            <AiTwotoneCalendar className='icon'></AiTwotoneCalendar>    <span class="card-title  black-text text-darken-4"> Ano: </span><br></br>
                                            <IoLogoModelS className='icon'></IoLogoModelS>    <span class="card-title  black-text text-darken-4"> Modelo</span><br></br>
                                            <MdModelTraining className='icon'></MdModelTraining>    <span class="card-title  black-text text-darken-4"> Marca</span><br></br>
                                            <GiMoneyStack className='icon'></GiMoneyStack>    <span class="card-title  black-text text-darken-4"> Valor estimado</span><br></br>
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
                    </div>
                </div>
            </div>
         )
}

export default ListVeiculos;

