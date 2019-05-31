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