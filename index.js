const sad = document.getElementById("sad");
setInterval(onTimer, 1000);
function onTimer() {
  let theTimer = Number($("#theTimer").text());
  theTimer = theTimer + 1;
  $("#theTimer").text(theTimer);
}

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  if (correct == response) {
    let score = Number($("#score").text());
    score = score + 1;
    $("#score").text(score);
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
  } else {
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
    if (Math.random() > 0.1) {
      sad.play();
    }
  }
}
window.onload = function() {
    var wrapper = document.getElementById('wrapper');
    var wfInterval = setInterval(flowers, 1300);
    var counterTwo = 0;
    
    function flowers() {
        var posTwo = Math.floor(Math.random() * 100) + 1;
        var whiteflower = document.createElement('div');
        whiteflower.setAttribute('class', 'flowers');
        whiteflower.classList.add('whiteflower');
        
        var wfPetalOne = document.createElement('div');
        wfPetalOne.setAttribute('class', 'wf-petal-one');
        var wfPetalTwo = document.createElement('div');
        wfPetalTwo.setAttribute('class', 'wf-petal-two');
        var wfPetalThree = document.createElement('div');
        wfPetalThree.setAttribute('class', 'wf-petal-three');
        
        whiteflower.appendChild(wfPetalOne);
        whiteflower.appendChild(wfPetalTwo);
        whiteflower.appendChild(wfPetalThree);
        
        whiteflower.style.left = posTwo+'%';
        wrapper.appendChild(whiteflower);
        
        counter = counterTwo++;
        
        setTimeout(function(){
            var posOne = Math.floor(Math.random() * 100) + 1;
            var sunflower = document.createElement('div');
            sunflower.setAttribute('class', 'flowers');
            sunflower.classList.add('sunflower');
        
            var sfPetalOne = document.createElement('div');
            sfPetalOne.setAttribute('class', 'sf-petal-one');
            var sfPetalTwo = document.createElement('div');
            sfPetalTwo.setAttribute('class', 'sf-petal-two');
            var sfPetalThree = document.createElement('div');
            sfPetalThree.setAttribute('class', 'sf-petal-three');
        
            sunflower.appendChild(sfPetalOne);
            sunflower.appendChild(sfPetalTwo);
            sunflower.appendChild(sfPetalThree);
        
        
            sunflower.style.left = posOne+'%';
            wrapper.appendChild(sunflower);
        }, 1500);
        
        if(counter == 5) {
            clearInterval(wfInterval);
        }
    }
}
