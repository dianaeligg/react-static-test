import React from 'react';
import "./style.css"

function CharacterCard(props){
    return (
        <img onClick={() => props.click(props.id)} src={require('../../'+props.img)} alt={props.name} />
    )
}

export default CharacterCard;


