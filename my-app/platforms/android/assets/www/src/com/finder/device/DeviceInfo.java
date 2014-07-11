package com.finder.device;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

import android.content.Context;
import android.telephony.TelephonyManager;
import android.util.Log;
import org.apache.cordova.PluginResult;

public class DeviceInfo extends CordovaPlugin {

    public DeviceInfo(){
    }

    public String DeviceImeiNumber(){
        TelephonyManager tManager = (TelephonyManager)this.cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
        Log.d("finder","DEVICE ID IS: "+tManager.getDeviceId());
        return tManager.getDeviceId();
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";
        if (action.equals("imeiNumber")) {
            Log.d("finder","imeiNumber Called: "+this.DeviceImeiNumber());
            result = this.DeviceImeiNumber();
            //callbackContext.success(this.DeviceImeiNumber());
            //return true;
        } 
        else {
            status = PluginResult.Status.INVALID_ACTION;     
            //return false;
        }
        callbackContext.sendPluginResult(new PluginResult(status, result));
        return true;
    } 
}
