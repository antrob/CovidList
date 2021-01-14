import './SelectConcelho.css'

import React, { useState, useEffect } from 'react';

function SelectConcelho( ) {

    // Declare a new state variable, which we'll call "concelhos"
    let [concelhos, setConcelhos] = useState([]);

    useEffect( ()=> {
            fetch("http://localhost:3030/concelhos")
            .then(response => response.json())
            .then(data => setConcelhos(data) ) 
            .catch(error => {
                console.error('There has been a problem with the fetch operation:', error);
          });
        },
    [] );
    

    const listaOptions = concelhos.map( (concelho) =>
            <option value={concelho.id}>{concelho.concelho}</option>    
    );

    return ( 
            <select id="concelho">
                <option>Escolha Concelho no Mapa</option>
                {listaOptions}
            </select>
    );
}

export default SelectConcelho