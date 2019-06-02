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
    .post(`/api/pets/${pet}/work`, {
    })
    .then(response => {
      console.log(response.data)
      callback(response.data)
    })
}