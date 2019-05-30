  import React, { Component } from 'react';

  import './Home.css'
  import './creatureCard.css'
  import CreatureCard from './CreatureCard'

  export default class PetProfile extends Component {
    state={
      pet: {}
    }
    componentDidMount() {
      fetch("/api/getPets/"+this.props.match.params.petid)
        .then(res => res.json())
        .then(pet => {

          this.setState({
            pet: pet.pet[0]
          });
        });
    }
    render () {
      return (

    <div>
    <br /><br />
    <div className="pet-profile-content">
    <div className="pet-profile-creature-card">
    <div className='creature-grid-item'><CreatureCard className="creature-grid-item"
                petStatus={this.state.pet}
                time={this.props.time}
                onSelect={this.props.onSelect}
                editPet={this.props.editPet}
                deletePet={this.props.deletePet}
                sendToWork={this.props.sendToWork}/></div>
    </div>

    <div className="pet-profile-info">
    <div className="pet-profile-name"><h2>Pet Name</h2></div>


            <div className="pet-profile-stats">
            <ul> Energy:  </ul><br />
            <ul> Strength: </ul><br />
            <ul>Hunger: </ul><br />
            <ul> Intelligence: </ul><br />
            <ul>Happiness: </ul><br />
            <ul> Gender:</ul><br />


            </div>


      <div className="pet-profile-buttons">

      <a href="#" className="button-free">Set Free</a>

     </div>

    </div>

    </div>



    </div>







        )
    }
  }