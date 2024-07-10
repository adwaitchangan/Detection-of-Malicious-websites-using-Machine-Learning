var sliderstatus = document.getElementById("adslider").checked;


//chrome.storage.local.get('totalblocked',function(data){
//    if(data.totalblocked == undefined){
//        chrome.storage.local.set({'totalblocked': 0});        
//    }
//});


chrome.storage.local.get('sliderstatus', function (data) {
    if (data.sliderstatus == undefined) {
        data.sliderstatus = true;
    }
    document.getElementById("adslider").checked = data.sliderstatus;
    sliderstatus = data.sliderstatus;

});



var addslider = document.getElementById('adslider');
addslider.addEventListener('click', function () {
    sliderstatus = !sliderstatus;
    chrome.storage.local.set({ 'sliderstatus': sliderstatus });

});

chrome.storage.local.get('adsites', function (data) {

    if (data.adsites == undefined) {
        document.getElementById('adblockedthispage').innerHTML = "Ad Blocked This Page: 0";
    }
    else {
        document.getElementById('adblockedthispage').innerHTML = "Ad Blocked This Page: " + data.adsites;
        adblocksite = data.adsites;

    }
});





//chrome.storage.local.get('totalblocked',function(data){
//    document.getElementById('sessionadblock').innerHTML = "Ad Blocked This Page: "+data.totalblocked;
//    totalblocked = adblocksite + data.totalblocked;
//    chrome.storage.local.set({'totalblocked':totalblocked});
//    
//});







//chrome.storage.local.remove('totalblocked', onRemoved);


//function onRemoved() {
//    if (chrome.runtime.lastError) {
//      console.log(chrome.runtime.lastError);
//    } else {
//      console.log("OK");
//    }
//  }
