var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button"); //getting all buttons 
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel")                 //getting all panels
var urldetected;
var x = document.querySelectorAll('.tabContainer .tabPanel');
function showPanel(panelIndex) {             //to display selected panel
    document.body.style.height = "";
    document.querySelector('.diceinfo').style.height = "";        //reset cause diceware changes ui 
    x[2].style.height = "";
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";                                        //color reset
        node.style.borderBottom = "";
        node.style.borderLeft = "";
        node.style.borderTop = "";
        node.style.borderRight = "";          
    });
    tabButtons[panelIndex].style.backgroundColor = "#34495E";
    tabButtons[panelIndex].style.borderLeft = "2px solid #5DADE2";
    tabButtons[panelIndex].style.borderTop = "2px solid #5DADE2";
    tabButtons[panelIndex].style.borderRight = "2px solid #5DADE2";
    tabButtons[panelIndex].style.borderBottom = "0px solid #5DADE2";

    tabPanels.forEach(function (node) {
        node.style.display = "none";             //hide content of all panel
    });
    tabPanels[panelIndex].style.display = "block"; //To show selected panel
}

document.addEventListener('DOMContentLoaded', function () {
    var phishcare = document.getElementById('phishcare');
    phishcare.addEventListener('click', function () {         //trigger on selecting Phishcare
        showPanel(0);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var adblock = document.getElementById('adblock');
    adblock.addEventListener('click', function () {           //trigger on selecting Ad Block
        showPanel(1);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var diceware = document.getElementById('diceware');
    diceware.addEventListener('click', function () {         //trigger on selecting diceware
        showPanel(2);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var about = document.getElementById('about');           //trigger on selecting about
    about.addEventListener('click', function () {
        showPanel(3);
    });
});

showPanel(0);                                                // by default so phishcare panel

