import React, { Component } from "react";
import Creature from "./CreatureImg.jsx";

class CreatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: "",
      isDeleting: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeyPressEnter = this.onKeyPressEnter.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value }); // call post
  }

  handleSubmit(event) {
    alert("A name wasn't submitted, please " + this.state.name);
    event.preventDefault();
  }

  onKeyPressEnter(event) {
    if (event.key === "Enter") {
      this.props.editPet({ ...this.props.petStatus, name: this.state.name });
      this.setState({ isEditing: false });
    }
  }

  render() {
    let timer =
      (this.props.time.getTime() - this.props.petStatus.time_last_fed_or_work) /
      1000;

    let maxHunger = 200;
    let maxHappy = 200;

    let hunger =
      ((this.props.petStatus.hunger_at_time_last_fed -
        (this.props.petStatus.strength_gene / 10) * timer) /
        maxHunger) *
      100;

    let time_at_half_hunger =
      (-(0.5 * maxHunger - this.props.petStatus.hunger_at_time_last_fed) /
        (this.props.petStatus.strength_gene / 10)) *
        1000 +
      parseInt(this.props.petStatus.time_last_fed_or_work);

    if (hunger < 0) {
      hunger = 0;
    }

    // (time_at_half_hunger - this.props.petStatus.time_last_fed_or_work)/1000 TIME IT TAKES TO GET TO 50%

    let happiness_at_half =
      ((time_at_half_hunger - this.props.petStatus.time_last_fed_or_work) /
        1000) *
        (maxHappy / 60) +
      this.props.petStatus.happiness_at_time_last_fed;
    if (happiness_at_half > 100) {
      happiness_at_half = 100;
    }

    let happiness;
    if (hunger > 50) {
      happiness =
        ((this.props.time.getTime() -
          this.props.petStatus.time_last_fed_or_work) /
          1000) *
          (maxHappy / 3600) +
        this.props.petStatus.happiness_at_time_last_fed;
    } else {
      happiness =
        -(
          ((this.props.time.getTime() - time_at_half_hunger) / 1000) *
          (this.props.petStatus.intelligence_gene / 10)
        ) + happiness_at_half;
    }

    if (happiness > 100) {
      happiness = 100;
    }

    let happyId = 1;

    if (happiness > 50) {
      happyId = 1;
    } else if (happiness > 0) {
      happyId = 2;
    } else {
      happyId = 3;
      happiness = 0;
    }

    return (
      <div>
        <div className="cardBackground">
          <div className="nameContainer">
            <h2 className="name">
              {/*<form className="name-form" onSubmit={this.handleSubmit}>
                <label className="edit-name-field">
                  <textarea
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <input
                  className="confirm-name-button"
                  type="submit"
                  value="Confirm Name"
                />
              </form>*/}
            </h2>
            {this.state.isEditing ? (
              <label className="edit-name-field">
                <input
                  value={this.state.name}
                  onChange={this.handleChange}
                  onKeyPress={this.onKeyPressEnter}
                />
              </label>
            ) : (
              <h2 className="name">
                {" "}
                {this.props.petStatus.name}{" "}
                <button
                  className="edit-name-button"
                  type="submit"
                  name="Edit Name"
                  onClick={() => this.setState({ isEditing: true })}
                >
                  {" "}
                  Edit Name{" "}
                </button>
              </h2>
            )}

            <div className="nameBackground" />
          </div>
          <div className="creatureWindow">
            <Creature petStatus={this.props.petStatus} happyStatus={happyId} />
          </div>
          <div className="creatureStats">
            <div className="happinessGague">
              <img className="happiness" src="../../lib/img/noun_Heart.svg" />
              <p>{happiness.toFixed(2)}%</p>
              <h4>Int: {this.props.petStatus.intelligence_gene}</h4>
            </div>
            <div className="hungerGague">
              <img
                className="hunger"
                src="../../lib/img/noun_Bitten_Apple.svg"
              />
              <p>{hunger.toFixed(2)}%</p>
              <h4>Str: {this.props.petStatus.strength_gene}</h4>
            </div>

            <div className="breed-work-feed">
              <div className="breed-button-container">
                <button
                  className="breed-button"
                  onClick={() => this.props.onSelect(this.props.petStatus)}
                >
                  Breed this pet
                </button>

                <button className="breed-button">Send to Work</button>
                <button className="breed-button">Feed</button>

                {this.state.isDeleting ? (
                  <label className="delete-pet-field">
                    <button
                      value={this.state.pet}
                      onClick={() => {
                        this.props.deletePet(this.props.petStatus);
                        window.location.reload();
                      }}
                    >
                      {" "}
                      Click to confirm deletion{" "}
                    </button>
                  </label>
                ) : (
                  <h2 className="delete-pet">
                    {" "}
                    {this.props.petStatus.pet}{" "}
                    <button
                      className="breed-button"
                      type="submit"
                      name="Delete Pet"
                      onClick={() => this.setState({ isDeleting: true })}
                    >
                      {" "}
                      Set Free{" "}
                    </button>
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatureCard;
