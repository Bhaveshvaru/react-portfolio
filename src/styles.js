import styled from 'styled-components'

export  const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 5rem 10rem;
color:white;
`
export const Description = styled.div`
flex:1;
z-index: 2;
padding-right:5rem;
h2{
    font-weight:lighter;
}
`
export const Imgae = styled.div`
flex: 1;
z-index: 2;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`
export const Hide = styled.div`
overflow: hidden;
`