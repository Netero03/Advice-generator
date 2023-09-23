


document.getElementById("dice").addEventListener("click",()=>{
    fetch('https://api.adviceslip.com/advice').then(response => response.json())
      .then(adviceData => {
        // Display the advice on the web page
        document.getElementById("advice").textContent=adviceData.slip.advice;
        document.getElementById("id").textContent=adviceData.slip.id;
      })
      .catch(error => {
        console.error('Error:', error);
      });

})
