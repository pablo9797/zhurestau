import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import menu from'./Menu.json';
import MiniMenu from './MiniMenu';
import '../App.css';

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
    items: [...menu],
    modalOpen: false,
    keyMiniMenuModal:[]
  }
  this.isModalOpen = this.isModalOpen.bind(this);
  this.isModalClose = this.isModalClose.bind(this);
  this.recordKey=this.recordKey.bind(this)
  }
  isModalOpen(){
    this.setState({modalOpen:true})
  }
  isModalClose(){
    this.setState({modalOpen:false})
  }
  recordKey(miniMenuKey){
    this.setState({
      keyMiniMenuModal: miniMenuKey
    })
  } 
  

  render () {
    const { items } = this.state;
    return (
      <div className='carousel'>
        
        <h2>Menu</h2>
        
        <Carousel itemsToShow={3} pagination={false} transitionMs={1500}>
          {items.map(item =>
          <MiniMenu
            item={item} 
            isModalOpen={this.isModalOpen}
            keyMiniMenu={this.state.keyMiniMenu}
            recordKey={this.recordKey}
            keyMiniMenu={this.state.keyMiniMenu}
          />)}
        </Carousel>
        <div className= {this.state.modalOpen===false?'closeModalMiniMenu':'modalMiniMenu'}>
            <h2>Modal</h2>
            {this.state.items.keyMiniMenuModal}
              <button onClick={this.isModalClose}>
                  youyou
              </button>
            
        </div>
      </div>
    )
  }
}

export default Slider;