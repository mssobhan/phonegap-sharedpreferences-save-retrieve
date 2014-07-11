package com.finder.sharedprefs;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.Context;
import android.util.Log;
import org.apache.cordova.PluginResult;
import android.content.SharedPreferences;


public class SharedPrefs extends CordovaPlugin {

    public SharedPrefs(){
    }

    public String saveData(JSONArray args, String sharedName, String key, String value){
        Context context = this.cordova.getActivity();
        SharedPreferences sharedPreferences = context.getSharedPreferences(sharedName,context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(key,value);
        editor.commit();
        return "Done,"+sharedName+","+key+","+value;
        //return args;
    }
    public String getData(String sharedName, String key){
        Context context = this.cordova.getActivity();
        SharedPreferences sharedPreferences = context.getSharedPreferences(sharedName,context.MODE_PRIVATE);
        String data = sharedPreferences.getString(key,null);

        return data;
    }
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        try {        
            PluginResult.Status status = PluginResult.Status.OK;
            String sharedName = args.getString(0);
            String key = args.getString(1);
            String value = "";
            if(args.length()==3){
                value = args.getString(2);
            }
            
            String result = "";
            if (action.equals("saveData")) {
                callbackContext.success(this.saveData(args,sharedName,key,value));
                return true;
            }
            if (action.equals("getData")) {
                callbackContext.success(this.getData(sharedName,key));
                return true;
            } 
            else {
                return false;
            }
           } catch (JSONException e) {
            return false;
        }
    } 
}
