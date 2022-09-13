import styled from 'styled-components'
export const Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem 0;
    }

`
/* ESTILIZANDO COM A BIBLIOTECA
https://styled-components.com/
INSTALAÇÃO
npm install --save styled-components

# with yarn
yarn add styled-components
*/

// Estilo para lista de filme

export const MovieList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem;

`
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span{
        font-weight: bold; 
        text-align: center;
        font-size: 120%;
    }
    a{
        transition: all 0.3s;
    }
    a:hover{
        transform: scale(1.1);
    }
`