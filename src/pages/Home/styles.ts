import styled from 'styled-components';

export const Container = styled.div`
        background-color: #f1f1f1;
        width:100%;
        display: column;
        

`;


export const Header = styled.div` 
    font-size: 48px;
    color: fff;
    width: 100%;
    
    font-size: 40px;
    height: 50px;
    background-color: #d3d3d3;
    

    h1{
        font-size: 30px;
        margin-left: 50px;
        font-size: 40px;
        padding: 5px;
        
    };
`;

export const Search = styled.div`
    width: 400px;
    margin-left: 500px;
    height: 80px;
   position:relative;

   a{
       position: absolute;
       
   }
   
`;
export const Sidebar = styled.div`
   width: 20%;
   background-color: black;
    height: 620px;
    color: orange;
    
`;

export const Botão = styled.div`
    
   display: flex;
   
   
    
button{
    width: 230px;
    height: 40px;
    background-color: black;
    color: white;
    border-radius:10%;
    margin-top:7px;
    margin-left: 10px;
};
`;