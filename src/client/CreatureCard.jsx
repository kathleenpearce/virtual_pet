import React, { Component } from "react";
import Creature from "./CreatureImg.jsx";

import caculateHungerHappy from "../scripts/caculate_hunger_and_happiness.js";

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

  // doesn't re-render elements that are off screen
  cardRef = React.createRef();

  shouldComponentUpdate() {
    const rect = this.cardRef.current.getBoundingClientRect();
    return (
      rect.left < window.innerWidth &&
      rect.right > 0 &&
      rect.bottom > 0 &&
      rect.top < window.innerHeight
    );
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

    let status = caculateHungerHappy(
      this.props.time,
      this.props.petStatus.time_last_fed_or_work,
      this.props.petStatus.hunger_at_time_last_fed,
      this.props.petStatus.happiness_at_time_last_fed,
      this.props.petStatus.strength_gene,
      this.props.petStatus.intelligence_gene,
      false
    );

    return (
      <div ref={this.cardRef}>
        <div className="cardBackground">
          <div className="nameContainer">
            <h2 className="name" />
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
            <Creature
              petStatus={this.props.petStatus}
              happyStatus={status.happyId}
            />
          </div>
          <div className="creatureStats">
            <div className="happinessGague">
              <img className="happiness" src="../../lib/img/noun_Heart.svg" />
              <p>{status.happiness.toFixed(2)}%</p>
              <h4>Int: {this.props.petStatus.intelligence_gene}</h4>
            </div>
            <div className="hungerGague">
              <img
                className="hunger"
                src="../../lib/img/noun_Bitten_Apple.svg"
              />
              <p>{status.hunger.toFixed(2)}%</p>
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

                <button
                  className="breed-button"
                  value={this.state.pet}
                  onClick={() => {
                    this.props.sendToWork(this.props.petStatus.id);
                    window.location.reload();
                  }}
                >
                  Send to Work
                </button>
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
