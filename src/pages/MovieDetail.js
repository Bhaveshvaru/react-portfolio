/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {MovieState} from "../MovieState";
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {pageAnimaiton} from './animation'

const MovieDetail = ()=>{
    const history = useHistory();
    const url = history.location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);
    //useEffect
    useEffect(()=>{
        const currentMovie = movies.filter((stateMovie)=>stateMovie.url === url);
        setMovie(currentMovie[0])
    },[movies,url])

return(
    <>
    {movie && (
        <Deatils variants={pageAnimaiton} initial="hidden" animate="show" exit="exit">
        <HeadLine>
        <h1>{movie.title}</h1>
        <div className="line"></div>
        <img src={movie.mainImg} alt="movie" />
        </HeadLine>
        <Awards>
            {movie.awards.map((award)=> (
                <Award title={award.title} description={award.description} key={award.title}/>
            ))}
        </Awards>
        <ImageDisplay>
            <img src={movie.secondaryImg} alt="image" />
        </ImageDisplay>
        </Deatils>
    )}
 
    </>
)
}

const Deatils = styled(motion.div)`
color:white;
`

const HeadLine = styled.div`
min-height:90vh;
padding-top:20vh;
position: relative;
.line {
    width:100%;
    background:#23d997;
    height:0.5rem;
    margin:1rem 0rem;
  }
h1{
    position: absolute;
    top:10%;
    left:50%;
    transform:translate(-10%,-50%);
}
img{
    width:100%;
    height:70vh;
    object-fit: cover;
}
`

const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;
`
const AwardStyle =styled.div`
padding: 5rem;
h3{
    font-size:2rem;
}
.line{
    width:50%;
    background:#23d997;
    height:0.5rem;
    margin:1rem 0rem;
}
`

const ImageDisplay = styled.div`
min-height:50vh;
img{
      width:100%;
height:100vh;
object-fit: contain;
}

`

const Award =({title,description})=>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;