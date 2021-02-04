import { Autorenew } from '@material-ui/icons';
import React, { useState} from 'react';


import { Title, Container  } from './styles'

const Dashboard: React.FC = ( ) => {
   const [tarefas, setTarefas] = useState([
       'Pagar os boletos de 1991',
       'Pagar os boletos de 2002'
   ]);

    const [input, setInput] = useState('');

    function handleAdd(){
        setTarefas([...tarefas, input])
        setInput('');
    }   
   
    return (
        <Container>
        <div>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} ></input>
            <button type="button" onClick={handleAdd} >Adicionar</button>
        </div>
        </Container>
    );
};

export default Dashboard;