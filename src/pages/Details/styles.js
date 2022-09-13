import styled from 'styled-components'

export const Container = styled.div`

        padding: 4rem 0;
        
    h1{
    margin: 3rem 0;
    }
    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        border-radius: 1rem;
        width: 300px;
    }
    .details{
      display: flex;
      flex-direction: column; 
      align-items: flex-start;
      margin-left: 4rem;
      max-width: 50%;
    }
    button{
      background: #06068a;
      border: none;  
      cursor: pointer;
      border-radius: 1rem;
      color: #fff;
      padding: 0.8rem 2rem;
      margin-top: 1rem;
      font-size: 100%;
      transition: all 0.3s;
    }
    button:hover{
        background: #080871;
    }
    span{
     line-height: 130%;  
     margin-botton: 1rem;
     font-size: 110%;
    }
    .release-date{
        opacity: 0.5;
    }
`