var page = require("webpage").create();

page.onConsoleMessage = function (msg) {
    console.log("Webpage console: " + msg);
};

page.onInitialized = function() {
    page.injectJs('inject.js');
}

function get_features(){
    return JSON.stringify({'title':document.title, 'call_log':call_log});
}

var system = require("system")
var url = system.args[1];
console.log('Getting ' + url)
page.open(url, function (status) {
    if (status != 'success') {
        console.log('FAIL to load the address');
        phantom.exit();
    } else {
        console.log("loaded");
        console.log("eval call log:" + page.evaluate(get_features));
        page.close();
        phantom.exit();
    }
});

