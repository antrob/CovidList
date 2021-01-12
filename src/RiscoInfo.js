import "./RiscoInfo.css"

function RiscoInfo( props ) { 
    let classe = props.nivelRisco.toLowerCase().replace(' ','');
    return(
        <div id="risco" style={{display: 'block'}}  className={classe}>
                <p>{props.nivelRisco}</p>
                <strong>{props.casos}</strong><span> novos casos por 100 mil habitantes</span>
        </div>
    );
}

export default RiscoInfo
