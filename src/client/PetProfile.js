  import React, { Component } from 'react';

  import './Home.css'
  import './creatureCard.css'
  import CreatureCard from './CreatureCard'
  import './HoverOver.jsx'

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
    <div className="pet-profile-name"><h2>Your Pet</h2></div>


            <div className="pet-profile-stats">

            <ul> Strength: {this.state.pet.strength_gene}</ul><br />
            <ul>Hunger: </ul><br />
            <ul> Intelligence: {this.state.pet.intelligence_gene}</ul><br />
            <ul>Happiness:</ul><br />



            </div>


      <div className="pet-profile-buttons">




      <button className="breed-button" onClick={() => {this.props.deletePet(this.props.match.params.petid);
        alert("By pressing ok you will permanently delete this pet!");
        this.props.history.goBack();

      }} >
      Set Free
      </button>







     </div>

    </div>

    </div>



    </div>







        )
    }
  }