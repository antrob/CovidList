import './SelectConcelho.css'

import React, { useState, useEffect } from 'react';

function SelectConcelho( props ) {

    // Declare a new state variable, which we'll call "concelhos"
    let [concelhos, setConcelhos] = useState([]);

    useEffect( ()=> {
            fetch("https://demoapiconcelhos.herokuapp.com/concelhos")
            .then(response => response.json())
            .then(data => setConcelhos(data) ) 
            .catch(error => {
                console.error('There has been a problem with the fetch operation:', error);
          });
        },
    [] );
    

    const listaOptions = concelhos.map( (concelho) =>
            <option value={concelho.id} key={concelho.id}>{concelho.concelho}</option>    
    );

    return ( 
            <select id="concelho" onChange={props.onChange}>
                <option>Escolha Concelho no Mapa</option>
                {listaOptions}
            </select>
    );

    function teste( e ) { 
        console.log('Concelho Seleccionado', e.target.value)
     }
}

export default SelectConcelho