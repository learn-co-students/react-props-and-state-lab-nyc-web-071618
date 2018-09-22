import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    
  }

  onChangeType = (e) => {
    e.preventDefault()
    this.setState({
      filters:{
        type: e.target.value
      }
    })
  }

 

  onFindPetsClick = (e) => {
    const currentStateType = this.state.filters.type
    const fetchURL = currentStateType==='all' ? '/api/pets' : `/api/pets?type=${currentStateType}`
    fetch(fetchURL).then(res=>res.json()).then(petsArray=>this.setState({
      pets:petsArray
    })
   )
  }

  onAdoptPet = (petId) => {
    
   const adoptedPet = this.state.pets.find((petObj)=> petId===petObj.id)
  
    adoptedPet.isAdopted = !adoptedPet.isAdopted
    // console.log(adoptedPet.isAdopted)
    this.setState({
      pets:this.state.pets
    })

    console.log(this.state.pets)
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
                       onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
