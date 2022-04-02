import React, { useState } from 'react';
import { Button } from '../../components/button';



export function HomeComponent () {
    
    const [visible,setVisible] = useState('')
     
  
    return (
        <>
        {visible==='Thiago' && (
            <h1>Pagina de Home</h1>
        )}
        
        <Button click={()=>setVisible('Thiago')}>Enviar</Button>
        <Button click={()=>console.log(visible)}>Documentos</Button>
        <Button click={()=>setVisible('Pedro')}>{visible}</Button>

        </>
    )
}