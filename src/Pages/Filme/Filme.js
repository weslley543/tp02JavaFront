import React, {useState, useEffect} from 'react';

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
import { api } from '../../Services/api';

function Filme() {
    const [filme, setFilmes] = useState([]);
    const [genero, setGeneros] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    
    let [qtd_gostei, setGostei] = useState([]);
    let [qtd_nao_gostei, setNaoGostei] = useState([]);

    useEffect(()=>{
        let id_filme = window.location.href.split("/")[5];

        api.get(`filmes/${id_filme}`).then(response=>{
            if(response.status === 200){
                const { data } = response;
                setFilmes(data);
                setGeneros(data.genero);
                setGostei(data.qtd_gostei);
                setNaoGostei(data.qtd_nao_gostei);
            }
        })

        api.get(`/comentarios/filmes/${id_filme}`).then(response=>{
            if(response.status === 200){
                const { data } = response;
                setComentarios(data);
            }
        })
    }, [])

    const handleLike = async (id_filme)=>{
        await api.put(`/filmes/gostei/${id_filme}`);
        setGostei(++qtd_gostei);
    }
    const handleDislike = async (id_filme)=>{
        await api.put(`/filmes/nao_gostei/${id_filme}`);
        setNaoGostei(++qtd_nao_gostei);
    }

    return(
      <>
        <Header/>
        <div className="background-filme">
            <div className="container-filme">
                <h1 className="h1-titulo-filme">{filme.titulo}</h1>
                <Grid container className="grid-filme">
                    <div className="div-descricao">
                        <div className="div-descricao">
                            <img src={(filme.capa_filme)} className="img-capa-filme"></img>
                            <div>
                                <p className="p-descricao-filme">
                                    {filme.sinopse}
                                </p>

                                <h3 className="h3-detalhes-filme">Detalhes</h3>
                                <p className="p-dados-filme"><b>Data:</b> {filme.ano_lancamento}</p>
                                <p className="p-dados-filme"><b>Gênero: </b></p>
                                    {genero.map( (gen, index) => (
                                        <ul key={index} className="list-generos">{gen.nome_genero}</ul>
                                    ))}

                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <span className="p-dados-filme-likes">
                                        <IconButton onClick={()=>handleLike(filme.id_filme)}>
                                            <Like style={{ fontSize: 40, color: green[500] }}/>
                                        </IconButton>{qtd_gostei}
                                    </span>
                                    <span className="p-dados-filme-dislikes">
                                        <IconButton onClick={()=> handleDislike(filme.id_filme)}>
                                            <Dislike style={{ fontSize: 40, color: red[500] }}/>
                                        </IconButton>{qtd_nao_gostei}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-sessao-comentarios">
                        <h3 className="h3-detalhes-filme">Comentários</h3>
                        <div className="div-comentarios-filme">
                        {comentarios.map((comentario,index) => (
                            <div key={index} className="div-comentario-filme">
                                <IconButton>
                                    <IconeUsuario style={{ fontSize: 40 }}/>
                                </IconButton>
                                <span>{comentario.comentario}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                
                </Grid>
            </div>
        </div>
      </>  
    );
  }
  
export default Filme;