import React from 'react';
import '../App.css';


function MiniMenu(props){

    return(
        
        <div className='miniMenuCard'>
            <img class='imageMiniMenu' src={props.item.photoMenu}/>
            <div className='content'>
                <h2>{props.item.titre}</h2>
                <div class='miniDescription'>{props.item.description}</div>                
            </div> 
            {props.item.key} 
                        
            <button onClick={() => { props.isModalOpen(); props.recordKey(props.item);}}  >
                Cliquez ici
            </button>
            
              
        </div>
    )
}
export default MiniMenu;