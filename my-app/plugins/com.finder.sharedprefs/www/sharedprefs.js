(function( cordova ) {

    function SharedPrefs() {}

    SharedPrefs.prototype.getData = function(win, fail, sharedName, key, value) {
        return cordova.exec(
                function (args) { if(win !== undefined) { win(args); } },
                function (args) { if(fail !== undefined) { fail(args); } },
                "SharedPrefs", "getData", [sharedName, key, value]);
    };
    SharedPrefs.prototype.saveData = function(win, fail, sharedName, key, value) {
        return cordova.exec(
                function (args) { if(win !== undefined) { win(args); } },
                function (args) { if(fail !== undefined) { fail(args); } },
                "SharedPrefs", "saveData", [sharedName,key,value]);
    };
    if(!window.plugins) {
        window.plugins = {};
    }

    if (!window.plugins.SharedPrefs) {
        window.plugins.SharedPrefs = new SharedPrefs();
    }

})( window.cordova );
