

import Ripples from 'react-ripples'
import React, { useState } from 'react';
import  {  FaSearch } from 'react-icons/fa';




import { Container, Header, Sidebar, Botão, Search} from './styles'
import { pink } from '@material-ui/core/colors';

const Home: React.FC = ( ) => (
<Container>
     
     <Header>
         
        
          <h1>Minha Van e Encomendas</h1>
     </Header>           
    
     <Sidebar>
         
       
         <Botão >
              <Ripples>
                          <button>Funções para ad</button>
               </Ripples>
               
           </Botão>
           <Botão>
              <Ripples>
                          <button>Funções para ad</button>
               </Ripples>
           </Botão>
           <Botão>
              <Ripples>
                          <button>Funções para ad</button>
               </Ripples>
               
           </Botão>
           <Botão>
              <Ripples>
                          <button>Funções para ad</button>
               </Ripples>
           </Botão>
           <Botão>
              <Ripples>
                          <button>Funções para ad</button>
               </Ripples>
               
           </Botão>
           <Botão>
              <Ripples>
                          <button>Funções para ad</button>
               </Ripples>
           </Botão>

           <Search>
           
               <input  type="text" name="name" /> 
               <a href="">
                   <FaSearch style = {{ color:'#0c0b0b', background: '#fff', }} />
               </a>
              
               </Search>


        
     </Sidebar>
   
    
     
            
</Container>
);


export default Home;