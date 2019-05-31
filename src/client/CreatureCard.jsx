import React, { Component } from "react";
import Creature from "./CreatureImg.jsx";
import HoverOver from "./HoverOver.jsx"

import caculateHungerHappy from "../scripts/caculate_hunger_and_happiness.js";

class CreatureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: "",
      isDeleting: false,
      isHovering: false
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
    this.setState({ name: event.target.value });
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
    let working = false
    if (this.props.petStatus.job_start_time && !this.props.petStatus.job_end_time){
      working = true
    }

    let lastInteraction = this.props.petStatus.time_last_fed_or_work
    if (this.props.petStatus.time_last_fed_or_work < this.props.petStatus.job_start_time) {
      lastInteraction = this.props.petStatus.job_start_time
      if (this.props.petStatus.job_start_time < this.props.petStatus.job_end_time) {
        lastInteraction = this.props.petStatus.job_end_time
      }
    }


    let status = caculateHungerHappy(
      this.props.time,
      lastInteraction,
      this.props.petStatus.hunger_at_time_last_fed,
      this.props.petStatus.happiness_at_time_last_fed,
      this.props.petStatus.strength_gene,
      this.props.petStatus.intelligence_gene,
      working
    );

    return (
      <div ref={this.cardRef} onMouseEnter={() => this.setState ({ isHovering: true })} onMouseLeave={() => this.setState ({ isHovering: false })}>
        <div className={working ? "workingBackground" : "cardBackground"}>
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
               <a href={"/petprofile/" +this.props.petStatus.id} className="name-link"> {" "}
                {this.props.petStatus.name}{" "}</a>
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
            {this.state.isHovering && (
              <HoverOver onSelect={this.props.onSelect} petStatus={this.props.petStatus} sendToWork={this.props.sendToWork} pet={this.state.pet} deletePet={this.props.deletePet} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CreatureCard;
