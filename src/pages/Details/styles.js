import styled from "styled-components";

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
    @media screen and (max-width: 640px){
        padding: 0.5rem 0.5rem;
        .movie{
            display:flex;
            flex-direction: column;
            width: 100%
        }
        div.details{
            display: flex;
            flex-direction: column; 
            align-items: flex-start;
            max-width: 100%;
            margin: 0px 0px;
        }
        span{  
            margin-bottom: 0.5rem;
            font-size: 100%;
        }
        
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
      font-size: 110%;
      transition: all 0.3s;
    }
    button:hover{
        background: #080871;
    }
    span{
     line-height: 130%;  
     margin-bottom: 1rem;
     font-size: 110%;
    }
    .release-date{
        opacity: 0.5;
    }
`;
