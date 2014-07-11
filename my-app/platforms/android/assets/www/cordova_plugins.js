cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.finder.telephone/www/telephonenumber.js",
        "id": "com.finder.telephone.telephonenumber",
        "clobbers": [
            "telephonenumber"
        ]
    },
    {
        "file": "plugins/com.finder.sharedprefs/www/sharedprefs.js",
        "id": "com.finder.sharedprefs.sharedprefs",
        "clobbers": [
            "sharedprefs"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.4.1-dev",
    "org.apache.cordova.console": "0.2.9-dev",
    "org.apache.cordova.device": "0.2.10",
    "org.apache.cordova.geolocation": "0.3.8",
    "com.finder.telephone": "0.2.10",
    "com.finder.sharedprefs": "0.2.10"
}
// BOTTOM OF METADATA
});