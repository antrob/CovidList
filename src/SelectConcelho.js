import './SelectConcelho.css'

function SelectConcelho( props ) {
    const concelhos = props.concelhos;
    const listaOptions = concelhos.map( (concelho) =>
            <option value={concelho.id}>{concelho.concelho}</option>    
    );

    return ( 
            <select id="concelho" disabled="">
                <option>Escolha Concelho no Mapa</option>
                {listaOptions}
            </select>
    );
}

export default SelectConcelho