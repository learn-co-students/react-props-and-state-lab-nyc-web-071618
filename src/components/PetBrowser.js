import React from 'react'

import Pet from './Pet'
import v4 from 'uuid'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }

  renderPetCards = () => {
    return this.props.pets.map((petObj)=>{
      return <Pet key={v4()}
                  onAdoptPet={this.props.onAdoptPet}
                  pet={petObj}/>
      
    })
  }

  render() {
    
    return (
    
    <div className="ui cards">
      {this.renderPetCards()}
    </div>
    )
  }
}

export default PetBrowser
