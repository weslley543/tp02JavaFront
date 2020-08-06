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
} from '@material-ui/icons'
import './Home.css'


function Home() {
    return(
      <>
        {/* A container spacing define um espaçamento entre os elementos dentro dela */}
        <Grid container spacing={1} className="main">
            {/* Componente de Card começa no Grid (define o tamanho de 3 colunas para cada card) */}
            {/* Cada linha tem 12 colunas == 4 cards de 3 colunas */}
            <Grid item xs={3}> 
                <Card className="root" key="">
                    <img 
                        src={require('./img/frozen2.jpg')} 
                        width="400" height="250"
                        alt=" "
                    />
                    <CardContent>
                        <Typography variant="h5">Nome do Filme</Typography>
                        <Typography variant="subtitle2">Ano lançamento: AAAA</Typography>
                        <Typography variant="subtitle2">Gênero</Typography>
                        <Typography variant="body1">
                            Descrição do filme:
                        </Typography>
                        <Typography variant="body2" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <IconButton aria-label="Curtir">
                            <Like />
                        </IconButton>
                        <IconButton aria-label="Não gostei">
                            <Dislike />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className="root" key="">
                    <img 
                        src={require('./img/oSol.png')} 
                        width="400" height="250"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h5">Nome do Filme</Typography>
                        <Typography variant="subtitle2">Ano lançamento: AAAA</Typography>
                        <Typography variant="subtitle2">Gênero</Typography>
                        <Typography variant="body1">
                            Descrição do filme:
                        </Typography>
                        <Typography variant="body2" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <IconButton aria-label="Curtir">
                            <Like />
                        </IconButton>
                        <IconButton aria-label="Não gostei">
                            <Dislike />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className="root" key="">
                    <img 
                        src={require('./img/pokemon.jpg')} 
                        width="400" height="250"
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h5">Nome do Filme</Typography>
                        <Typography variant="subtitle2">Ano lançamento: AAAA</Typography>
                        <Typography variant="subtitle2">Gênero</Typography>
                        <Typography variant="body1">
                            Descrição do filme:
                        </Typography>
                        <Typography variant="body2" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <IconButton aria-label="Curtir">
                            <Like />
                        </IconButton>
                        <IconButton aria-label="Não gostei">
                            <Dislike />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className="root" key="">
                    <img 
                        src={require('./img/vingadores.png')} 
                        width="400" height="250"
                        alt=" "
                    />
                    <CardContent>
                        <Typography variant="h5">Nome do Filme</Typography>
                        <Typography variant="subtitle2">Ano lançamento: AAAA</Typography>
                        <Typography variant="subtitle2">Gênero</Typography>
                        <Typography variant="body1">
                            Descrição do filme:
                        </Typography>
                        <Typography variant="body2" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <IconButton aria-label="Curtir">
                            <Like />
                        </IconButton>
                        <IconButton aria-label="Não gostei">
                            <Dislike />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
      </>  
    );
  }
  
  export default Home;