import React from 'react';
import '../App.css';

function Menu(){
    return(
        <div id='navbar'>
            <div id='logo'>
                <h1>Bonjour</h1>
            </div>
            <div id='menu'>
                <div id='meal'>
                    Menus
                </div>
                <div id='plats'>
                    Plats
                </div>
                <div id='qsn'>
                    Qui sommes nous
                </div>
            </div>
        </div>
    
    )
}

export default Menu;