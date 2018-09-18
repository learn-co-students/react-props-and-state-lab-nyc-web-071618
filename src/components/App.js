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
    this.onFindPetsClick()
  }

  onChangeType = (type)=>{
    this.setState({
      filters:{
        ...this.filters,
        type:type
      }
    })
  }

  onFindPetsClick = ()=>{
    let type = this.state.filters.type
    let uri = '/api/pets' + (type!=="all"?`?type=${type}`:"")
    fetch(uri)
      .then(rsp=>rsp.json())
      .then(json=>{
        this.setState({
          pets:json
        })
      })
  }
  onAdoptPet = (id)=>{
    let pet = this.state.pets.find(pet=>pet.id===id)
    if( !pet ){
      console.log(" onAdoptPet: can not find pet by id:", id)
      return;
    }
    pet.isAdopted = !pet.isAdopted

    this.setState({
      pets: this.state.pets
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
