import React, { Component } from "react";


class HoverOver extends Component {
  render() {
    return (

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
              value={this.props.pet}
              onClick={() => {
                this.props.sendToWork(this.props.petStatus.id);
                window.location.reload();
              }}
            >
              Send to Work
            </button>
            <button className="breed-button">Feed</button>

            {this.props.isDeleting ? (
              <label className="delete-pet-field">
                <button
                  value={this.props.pet}
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
    )
  }
}

export default HoverOver;