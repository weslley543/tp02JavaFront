import React from 'react';
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


function Home() {
    var filmes = [
        {
            id: 1,
            nome: "Frozen 2",
            ano_lancamento: 2019,
            genero: "Animação",
            descricao: "Duas irmãs, uma faz gelo e a outra não",
            imagem: require('./img/frozen2.jpg')
        },
        {
            id: 2,
            nome: "O Sol também é uma estrela",
            ano_lancamento: 2019,
            genero: "Romance",
            descricao: "Filminho de romance que você chora",
            imagem: require('./img/oSol.png')
        },
        {
            id: 3,
            nome: "Detetive Pikachu",
            ano_lancamento: 2018,
            genero: "Aventura",
            descricao: "O pikachu de quando você era criança",
            imagem: require('./img/pokemon.jpg')
        },
        {
            id: 4,
            nome: "Avengers - End Game",
            ano_lancamento: 2019,
            genero: "Ação",
            descricao: "Thanos morre no começo do filme",
            imagem: require('./img/vingadores.png')
        },
        {
            id: 5,
            nome: "Harry Potter",
            ano_lancamento: 2006,
            genero: "Aventura",
            descricao: "O menino que viveu e o cara sem nariz",
            imagem: require('./img/harryPotter.jpg')
        },
        {
            id: 6,
            nome: "Titanic",
            ano_lancamento: 1998,
            genero: "Romance",
            descricao: "Ele não precisava ter morrido né",
            imagem: require('./img/titanic.jpg')
        }
    ]

    return(
      <>
        {/* A container spacing define um espaçamento entre os elementos dentro dela */}
        <Grid container spacing={1} className="main">
            {/* Componente de Card começa no Grid (define o tamanho de 3 colunas para cada card) */}
            {/* Cada linha tem 12 colunas == 4 cards de 3 colunas */}
            {filmes.map(filme => (
                <Grid item xs={3} key={filme.id}>
                    <Card className="root" key={filme.id}>
                        <img 
                            src={filme.imagem} 
                            width="400" height="250"
                            alt=" "
                        />
                        <CardContent>
                            <Typography variant="h5">{filme.nome}</Typography>
                            <Typography variant="subtitle2">{filme.ano_lancamento}</Typography>
                            <Typography variant="subtitle2">{filme.genero}</Typography>
                            <Typography variant="body1">
                                Descrição do filme:
                            </Typography>
                            <Typography variant="body2" paragraph>{filme.descricao}</Typography>
                        </CardContent>
                        <CardActions >
                            <IconButton aria-label="Curtir">
                                <Like />
                            </IconButton>
                            <IconButton aria-label="Não gostei">
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