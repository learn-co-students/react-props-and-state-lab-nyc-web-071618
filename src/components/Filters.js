import React from 'react'

class Filters extends React.Component {
  handleClick = (event)=>{
    this.props.onFindPetsClick()
  }

  handleSelectChange = (event)=>{
    console.log("select change:",event.target.value)
    this.props.onChangeType(event.target.value)
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelectChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
