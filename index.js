function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => Response.json())
    .then((data) => {
      //console.log(data);
      document.getElementById(
        "card-title"
      ).textContent = `Advice # ${data.slip.id}`;
      document.getElementById("card-body").textContent = `${data.slip.advice}`;
    });
}

document.getElementById("dice-btn").addEventListener("click", getAdvice);
