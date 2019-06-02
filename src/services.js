import axios from "axios";


export const breedNewPet = (pet1, pet2, callback) => {
    // event.preventDefault();
    //const breedData = new FormData(event.target);

    // fetch("/api/breed", {
    //   method: "POST",
    //   body: breedData
    // });
    axios
      .post("/api/breed", {
        pet1,
        pet2
      })
      .then(response => {
        callback(response.data);
      });
  };

export const makeNewJob = (pet, callback) => {
  axios
    .post(`/api/pets/${pet.pet_id}/work`, {
    })
    .then(response => {
      callback(response.data)
    })
}

export const endJob = (job, callback) => {
  axios
    .post(`/api/jobs/${job.id}`, {
    })
    .then(response => {
      callback(response.data)
    })
}

export const newFeedEvent = (pet, foodType, callback) => {
  axios
    .post(`/api/pets/${petAssign.pet_id}/feed/${foodType}`, {
    })
    .then(response => {
      callback(response.data)
    })
}