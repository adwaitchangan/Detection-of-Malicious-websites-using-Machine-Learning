//showing visited domain
//chrome.runtime.sendMessage({ type: "getUrl" }, function (response) {
//    if (response["type"] == "sendurl") {
//        document.getElementById('visiteddomain').innerHTML = response["value"];
//    }
//});
chrome.storage.local.get('sitedomain', function (data) {
    document.getElementById('visiteddomain').innerHTML = data.sitedomain;
});



var psliderstatus = document.getElementById("pslider").checked;



chrome.storage.local.get('psliderstatus', function (data) {
    if (data.psliderstatus == undefined) {
        data.psliderstatus = true;
    }
    document.getElementById("pslider").checked = data.psliderstatus;
    psliderstatus = data.psliderstatus;
});



var pslider = document.getElementById('pslider');
pslider.addEventListener('click', function () {
    psliderstatus = !psliderstatus;
    chrome.storage.local.set({ 'psliderstatus': psliderstatus });

});

//showing site legitimate or phishing
var bpage = chrome.extension.getBackgroundPage();
document.getElementById('sitedetected').innerHTML = bpage.urlstatus;