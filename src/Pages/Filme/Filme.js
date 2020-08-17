import React from 'react';

import {
    Grid,
    IconButton,
} from '@material-ui/core';

import {
    AccountCircle as IconeUsuario, 
    ThumbUpAlt as Like,
    ThumbDown as Dislike,
} from '@material-ui/icons'

import { green, red } from '@material-ui/core/colors';

import './Filme.css'
import Header from '../../Componentes/Header/Header'

function Filme(props) {
    return(
      <>
        <Header/>
        <div className="background-filme">
            <div className="container-filme">
                <h1 className="h1-titulo-filme">Nome do Filme{props.nome}</h1>
                <Grid container className="grid-filme">
                    <div className="div-descricao">
                        <div className="div-descricao">
                            <img src={require("../Home/img/pokemon.jpg")} className="img-capa-filme"></img>
                            <div>
                                <p className="p-descricao-filme">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Nulla at volutpat diam ut venenatis tellus in metus. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vel turpis nunc eget lorem dolor sed viverra ipsum. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Sed egestas egestas fringilla phasellus faucibus scelerisque. Mauris a diam maecenas sed. Vestibulum rhoncus est pellentesque elit ullamcorper. Gravida cum sociis natoque penatibus et magnis dis. Cursus vitae congue mauris rhoncus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Amet consectetur adipiscing elit ut aliquam purus sit. Mattis molestie a iaculis at erat. Pellentesque elit eget gravida cum. 
                                    Lectus sit amet est placerat in egestas erat imperdiet sed. Integer quis auctor elit sed vulputate. Eleifend donec pretium vulputate sapien. Tellus molestie nunc non blandit massa enim nec dui. Non sodales neque sodales ut etiam sit amet nisl purus. Eget nulla facilisi etiam dignissim diam quis. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Neque gravida in fermentum et. Amet tellus cras adipiscing enim eu. Dolor magna eget est lorem. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Lorem ipsum dolor sit amet consectetur. Odio aenean sed adipiscing diam.
                                </p>

                                <h3 className="h3-detalhes-filme">Detalhes</h3>
                                <p className="p-dados-filme">Data:</p>
                                <p className="p-dados-filme">Gênero:</p>
                                
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <span className="p-dados-filme-likes">
                                        <IconButton areaLabel="Likes">
                                            <Like style={{ fontSize: 40, color: green[500] }}/>
                                        </IconButton>100
                                    </span>
                                    <span className="p-dados-filme-dislikes">
                                        <IconButton areaLabel="Dislikes">
                                            <Dislike style={{ fontSize: 40, color: red[500] }}/>
                                        </IconButton>
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-sessao-comentarios">
                        <h3 className="h3-detalhes-filme">Comentários</h3>
                        {/* ITERAR PELOS COMENTÁRIOS AQUI! */}
                        <div className="div-comentarios-filme">
                            <div className="div-comentario-filme">
                                <IconButton areaLabel="Usuário Anônimo">
                                    <IconeUsuario style={{ fontSize: 40 }}/>
                                </IconButton>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Nulla at volutpat diam ut venenatis tellus in metus. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vel turpis nunc eget lorem dolor sed viverra ipsum. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Sed egestas egestas fringilla phasellus faucibus scelerisque. Mauris a diam maecenas sed. Vestibulum rhoncus est pellentesque elit ullamcorper. Gravida cum sociis natoque penatibus et magnis dis. Cursus vitae congue mauris rhoncus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Amet consectetur adipiscing elit ut aliquam purus sit.</span>
                            </div>
                            
                            <div className="div-comentario-filme">
                                <IconButton areaLabel="Usuário Anônimo">
                                    <IconeUsuario style={{ fontSize: 40 }}/>
                                </IconButton>
                                <span>Esse filme é bem bostinha hein, achei que pudesse ter algo melhor vindo desse investimento.</span>
                            </div>

                            <div className="div-comentario-filme">
                                <IconButton areaLabel="Usuário Anônimo">
                                    <IconeUsuario style={{ fontSize: 40 }}/>
                                </IconButton>
                                <span>QUE MERDA DE FILME, USAM ESSA LEI ROUANET PARA ISSO???? MEU DINHEIRO SENDO JOGADO FORA, ESQUERDOPATAS FDPS!!!!</span>
                            </div>
                        </div>
                    </div>
                
                </Grid>
            </div>
        </div>
      </>  
    );
  }
  
export default Filme;