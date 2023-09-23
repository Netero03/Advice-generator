


document.getElementById("dice").addEventListener("click",()=>{
    fetch('https://api.adviceslip.com/advice').then(response => response.json())
      .then(adviceData => {
        // Display the advice on the web page
        document.getElementById("advice").textContent=advice.textContent.replace("Advice",adviceData.slip.advice);
        document.getElementById("Num").textContent=Num.textContent.replace("no",adviceData.slip.id);
      })
      .catch(error => {
        console.error('Error:', error);
      });

})
