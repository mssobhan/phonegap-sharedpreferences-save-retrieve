package com.finder.device;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import android.content.Context;
import android.telephony.TelephonyManager;
import android.util.Log;
import org.apache.cordova.PluginResult;

public class TelephoneNumber extends CordovaPlugin {

    public TelephoneNumber(){
    }

    public String getLine1Number(){
        TelephonyManager tManager = (TelephonyManager)this.cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
        Log.d("finder","DEVICE ID IS: "+tManager.getDeviceId());
        return tManager.getLine1Number();
    }
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";
        if (action.equals("line1Number")) {
            Log.d("finder","line1Number Called: "+this.getLine1Number());
            //result = this.DeviceImeiNumber();
            callbackContext.success(this.getLine1Number());
            return true;
        } 
        else {
            //status = PluginResult.Status.INVALID_ACTION;     
            return false;
        }
        //callbackContext.sendPluginResult(new PluginResult(status, result));
        //return true;
    } 
}
