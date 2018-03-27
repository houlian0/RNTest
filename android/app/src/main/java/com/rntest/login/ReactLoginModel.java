package com.rntest.login;

import android.text.TextUtils;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 登录的验证
 *
 * @author Asen
 * @version v2.0
 * @email houlian@gisinfo.com
 * @date 2018/03/27 11:23
 */
public class ReactLoginModel extends ReactContextBaseJavaModule {

    public ReactLoginModel(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LoginModule";
    }

    @ReactMethod
    public void checkLogin(String username, String password, Callback successCallback, Callback errorCallback) {
        try {
            if (TextUtils.isEmpty(username)) {
                errorCallback.invoke("请输入用户名");
                return;
            }
            if (TextUtils.isEmpty(password)) {
                errorCallback.invoke("请输入密码");
                return;
            }
            if ("admin".equals(username) && "000000".equals(password)) {
                successCallback.invoke("登录成功");
            } else {
                errorCallback.invoke("用户名密码错误");
            }
        } catch (Exception e) {
            e.printStackTrace();
            errorCallback.invoke(e.getMessage());
        }
    }

}
