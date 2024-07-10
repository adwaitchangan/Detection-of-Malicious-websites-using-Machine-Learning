var aboutpanels = document.querySelectorAll('.aboutPanels');

function showaboutPanel(panelIndex) {             //to display selected panel
    aboutpanels.forEach(function (node) {
        node.style.display = "none";             //hide content of all panel
    });
    aboutpanels[panelIndex].style.display = "block"; //To show selected panel
}

document.addEventListener('DOMContentLoaded', function () {
    var about1 = document.getElementById('feedback');
    about1.addEventListener('click', function () {
        showaboutPanel(1);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var about2 = document.getElementById('aboutback');
    about2.addEventListener('click', function () {
        showaboutPanel(0);
    });
});

showaboutPanel(0);

var submit = document.getElementById('feedbacksubmit');
submit.addEventListener('click', function () {
    var emailtext = document.getElementById('email').value;
    var textarea = document.getElementById('comment').value;
    //console.log(emailtext + ' ' + textarea);
    if(emailtext.length==0 || textarea.length==0){
        document.getElementById("checkfield").innerHTML="Fill both Fields!!!";
        document.getElementById("aboutback").style.marginLeft="14px";
    }
    else{
    var nxhr = new XMLHttpRequest();
    nxhr.open("GET", "http://localhost/feedback.php?email=" + emailtext + "&textarea=" + textarea, true);
    nxhr.send();
    nxhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(nxhr.responseText);
            showaboutPanel(0);
            document.getElementById('email').value="";
            document.getElementById('comment').value="";
            document.getElementById("checkfield").innerHTML="";
            document.getElementById("aboutback").style.marginLeft="105px";
        }
    };

}

});

