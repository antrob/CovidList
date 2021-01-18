import RiscoInfo from './RiscoInfo'
import SelectConcelho from './SelectConcelho'

import React, { useState } from 'react';

function ConcelhoInfo()
{
    let [idConcelhoSeleccionado, setIdConcelhoSeleccionado] = useState(null);

    function testeCI( e ){
        console.log("onChange Concelho Seleccionado", e.target.value)
        setIdConcelhoSeleccionado( e.target.value )
    }
    
    let concelhoInfo

    if( idConcelhoSeleccionado )
        concelhoInfo = <RiscoInfo nivelRisco="Moderado" casos="199" />
    else
        concelhoInfo = ''

    return(
        <section>
            <h2>Concelho Info</h2>
            <SelectConcelho onChange={testeCI}/>
            {concelhoInfo}   
        </section>
    );

}

export default ConcelhoInfo