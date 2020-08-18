import React, {useState, useEffect} from 'react';
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    IconButton,
} from '@material-ui/core';
import {
    ThumbUpAlt as Like,
    ThumbDown as Dislike,
    Stars as Fav,
    Comment,
} from '@material-ui/icons'

import './Home.css'
import Header from '../../Componentes/Header/Header'
import { api } from '../../Services/api';

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        api.get('/filmes').then(response=>{
            if(response.status === 200){
                const { data } = response;
                setFilmes(data);
            }
        })
    }, [])

    const handleLike = async (id_filme)=>{
        await api.put(`/filmes/gostei/${id_filme}`);
    }
    const handleDislike = async (id_filme)=>{
        await api.put(`/filmes/nao_gostei/${id_filme}`);
    }
    return(
      <>
        <Header />
        {/* A container spacing define um espaçamento entre os elementos dentro dela */}
        <Grid container spacing={1} className="main">
            {/* Componente de Card começa no Grid (define o tamanho de 3 colunas para cada card) */}
            {/* Cada linha tem 12 colunas == 4 cards de 3 colunas */}
            {filmes.map(filme => (
                <Grid item xs={3} key={filme.id_filme}>
                    <Card className="root" key={filme.id_filme}>
                        <img 
                            src={filme.capa_filme} 
                            width="400" height="250"
                            alt=" "
                        />
                        <CardContent>
                            <Typography variant="h5">{filme.titulo}</Typography>
                            <Typography variant="subtitle2">{filme.ano_lancamento}</Typography>
                            <Typography variant="subtitle2">{filme.genero.map(genero=>(<p key={genero.id_genero}>{genero.nome_genero}</p>))}</Typography>
                            <Typography variant="body1">
                                Descrição do filme:
                            </Typography>
                            <Typography variant="body2" paragraph>{filme.descricao}</Typography>
                        </CardContent>
                        <CardActions >
                            <IconButton onClick={()=>handleLike(filme.id_filme)} aria-label="Curtir">
                                <Like />
                            </IconButton>
                            <IconButton onClick={()=> handleDislike(filme.id_filme)} aria-label="Não gostei">
                                <Dislike />
                            </IconButton>
                            <IconButton aria-label="Favorito">
                                <Fav />
                            </IconButton>
                            <IconButton aria-label="Comentários">
                                <Comment />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </>  
    );
  }
  
  export default Home;