var urlvisited = window.location.host;                                      //get host of recent page

chrome.storage.local.set({ 'sitedomain': urlvisited });

//var urldict = {
//    "type": "urlvisited",
//    "value": urlvisited,
//};
//chrome.runtime.sendMessage(urldict);                                      //send host to background       

chrome.runtime.onMessage.addListener(function(message) {
    var receivedParameter = message.parameter;
    console.log(receivedParameter);
    if(receivedParameter == "Phishing1"){
        var overlaydiv = document.createElement("div");
        overlaydiv.setAttribute("id", "xyz");
        overlaydiv.style.width = "100%";
        overlaydiv.style.height = "100%";
        overlaydiv.style.position = "fixed";
        overlaydiv.style.top = 0;
        overlaydiv.style.left = 0;
        overlaydiv.style.background = "rgba(0,0,0,0.4)";
        overlaydiv.style.overflowX = "hidden";
        overlaydiv.style.zIndex = 1;
    
        var overlayboxdiv = document.createElement("div");
        overlayboxdiv.setAttribute("id", "pqr");
        overlayboxdiv.style.width = "400px";
        overlayboxdiv.style.height = "200px";
        overlayboxdiv.style.backgroundColor = "rgb(252, 213, 213)";
        overlayboxdiv.style.marginLeft = "auto";
        overlayboxdiv.style.marginRight = "auto";
        overlayboxdiv.style.marginTop = "100px";
        overlayboxdiv.style.fontSize = "medium";
        overlayboxdiv.style.paddingTop = "15px";
        overlayboxdiv.style.paddingLeft = "5px";
        overlayboxdiv.style.paddingRight = "5px";
    
        var overlayboxdivtext = document.createTextNode("The visitng site is a Phishing Site.Access to the site can lead to danger and your data can be stolen.");
    
        var safety = document.createElement("button");
        safety.innerHTML = "Back To Safety";
        safety.style.marginTop = "100px";
        safety.style.marginLeft = "10px";
        safety.setAttribute("id", "safetybutton")
    
        var harm123 = document.createElement("button");
        harm123.innerHTML = "Advance Anyway";
        harm123.style.marginTop = "100px";
        harm123.style.marginLeft = "120px";
        harm123.setAttribute("id", "harmbutton")
    
        overlayboxdiv.appendChild(overlayboxdivtext);
        overlayboxdiv.appendChild(safety);
        overlayboxdiv.appendChild(harm123);
        overlaydiv.appendChild(overlayboxdiv)
        document.body.appendChild(overlaydiv);
    
    
        var safetybutton = document.getElementById('safetybutton');
        safetybutton.addEventListener('click', function () {
            history.back();
        });
    
        var harmbutton = document.getElementById('harmbutton');
        harmbutton.addEventListener('click', function () {
            document.getElementById("xyz").style.width = "0%";
        });
    }
});


