const GET_URL = "https://api.adviceslip.com/advice"
function getAdvice() {
  fetch(GET_URL)
    .then((Response) => Response.json())
    .then((data) => {
      //console.log(data);
      const {id, advice} = data.slip
      document.getElementById(
        "card-title"
      ).textContent = `Advice # ${id}`;
      document.getElementById("card-body").textContent = `${advice}`;
    });
}

document.getElementById("dice-btn").addEventListener("click", getAdvice);
