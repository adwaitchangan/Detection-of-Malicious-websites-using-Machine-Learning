var adsliderstatus;
var adsites;
var totalblocked;



const YOUTUBE_AD_REGEX = /(doubleclick\.net)|(adservice\.google\.)|(youtube\.com\/api\/stats\/ads)|(&ad_type=)|(&adurl=)|(-pagead-id.)|(doubleclick\.com)|(\/ad_status.)|(\/api\/ads\/)|(\/googleads)|(\/pagead\/gen_)|(\/pagead\/lvz?)|(\/pubads.)|(\/pubads_)|(\/securepubads)|(=adunit&)|(googlesyndication\.com)|(innovid\.com)|(tubemogul\.com)|(youtube\.com\/pagead\/)|(google\.com\/pagead\/)|(flashtalking\.com)|(googleadservices\.com)|(s0\.2mdn\.net\/ads)|(www\.youtube\.com\/ptracking)|(www\.youtube\.com\/pagead)|(www\.youtube\.com\/get_midroll_)|(www\.youtube\.com\/api\/stats)/


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading') {
        adsites = new Array();

        chrome.storage.local.set({ 'adsites': 0 });
        chrome.storage.local.get('sliderstatus', function (data) {
            if (data.sliderstatus == undefined) {
                data.sliderstatus = true;
            }
            adsliderstatus = data.sliderstatus;
        });
        chrome.webRequest.onBeforeRequest.addListener(
            function (details) {

                if (adsliderstatus) {
                    if (!adsites.includes(details.url)) {
                        adsites.push(details.url);
                    }
                    //adsites = adsites + 1;

                    console.log("blocking:", details.url);
                    chrome.storage.local.set({ 'adsites': adsites.length });
                    return { cancel: true };
                }

            },
            { urls: blocked_domains },
            ["blocking"]
        );



        chrome.webRequest.onBeforeRequest.addListener(({ tabId, url }) => {

            if (adsliderstatus && YOUTUBE_AD_REGEX.test(url)) {
                console.log("blockingzzzz:", url);
                //adsites = adsites + 1;
                if (!adsites.includes(url)) {
                    adsites.push(url);
                }
                chrome.storage.local.set({ 'adsites': adsites.length });
                return { cancel: true }
            }


        }, {
            urls: ['http://*/*', 'https://*/*'],
            types: [
                'script',
                'image',
                'xmlhttprequest',
                'sub_frame'
            ]
        }, ['blocking']
        )

    }
});





