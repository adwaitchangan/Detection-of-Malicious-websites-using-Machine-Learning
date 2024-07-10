var visitedUrl = { "type": "sendurl" };

var psliderstatus;
var url;
var urlstatus;

//chrome.extension.onMessage.addListener(
//  function (response, sender, sendResponse) {
//    if (response["type"] == "urlvisited") {
//      visitedUrl["value"] = response["value"];
//    }
//    if (response["type"] == "getUrl") {
//      sendResponse(visitedUrl);
//    }



//  });


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'loading') {
    chrome.storage.local.get('psliderstatus', function (data) {
      if (data.psliderstatus == undefined) {
        data.psliderstatus = true;
      }
      psliderstatus = data.psliderstatus;
    });
    if (psliderstatus) {
      urlstatus = "Loading..";
      var xhr = new XMLHttpRequest();
      //params = "url=" + url;
      // alert(params);
      tablink = tab.url;
      console.log(tablink);
      //console.log('q="'+ tablink+'"');
      var urlencode = encodeURIComponent(tablink);
      xhr.open("GET", "http://localhost/clientServer.php?q_url_is="+urlencode, true);
      //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //xhr.send('q_url_is="'+ tablink+'"');
      xhr.send();
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhr.responseText);
          urlstatus = xhr.responseText;
          chrome.tabs.sendMessage(tabId, {parameter: urlstatus});
        }
      };



    }



  }
});
