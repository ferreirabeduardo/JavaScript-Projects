 function countdown_operation() {
      var seconds = Number(document.getElementById("seconds").value);
  
      function tick() {
          seconds = seconds - 1;
          document.getElementById("timer").innerHTML = seconds;
          if (seconds <= 0) {
              alert("Time's up!");
              document.getElementById("timer").innerHTML = "Type here";
          } else {
              setTimeout(tick, 1000);
          }
      }
      tick();
  }