/**
 * 登录页面
 */


'use strict';
import React, {Component} from 'react';
import {
    View,
    TextInput,
    ImageBackground,
    Button,
    Image,
    StyleSheet,
    Dimensions,
    ToastAndroid
} from 'react-native';
import * as ScreenUtils from '../utils/ScreenUtils'
import LoginModule from "../native/LoginModule";

export default class LoginView extends Component<{
    clickLogin: (loginName, password) => any,
}> {
    constructor(props) {
        super(props);
        this.state = {
            loginName: "",
            password: ""
        }
    }

    _onChangeTextLoginName(loginName) {
        this.state.loginName = loginName;
    }

    _onChangeTextPassword(password) {
        this.state.password = password;
    }

    _clickLogin() {
        LoginModule.checkLogin(
            this.state.loginName,
            this.state.password,
            (msg) => { // 登录成功
                ToastAndroid.show(msg, ToastAndroid.SHORT);
                this.props.navigation.navigate('Map', {
                    loginName: this.state.loginName,
                    password: this.state.password
                });
            },
            (msg) => { // 登录失败
                ToastAndroid.show(msg, ToastAndroid.SHORT);
            }
        );

    };

    render() {
        return (
            <ImageBackground
                style={styles.background}
                resizeMode={'stretch'} // 填满整个布局
                source={require('./image/ic_login_bg.jpg')}>

                <View style={styles.background}>

                    <Image
                        style={styles.login_logo}
                        resizeMode={'contain'}
                        source={require('./image/ic_login_logo.png')}/>

                    <ImageBackground
                        style={styles.login_input_bg}
                        resizeMode={'stretch'}
                        source={require('./image/ic_login_input.png')}>

                        <View style={styles.login_input_layout}>

                            <View style={styles.login_input_item}>
                                <Image
                                    style={styles.login_input_image}
                                    resizeMode={'center'}
                                    source={require('./image/ic_login_user.png')}/>

                                <TextInput
                                    placeholder={'请输入用户名'}
                                    underlineColorAndroid="transparent"
                                    onChangeText={this._onChangeTextLoginName.bind(this)}
                                    style={styles.login_input_input}/>
                            </View>

                            <View style={styles.login_input_divider}/>

                            <View style={styles.login_input_item}>

                                <Image
                                    style={styles.login_input_image}
                                    resizeMode={'center'}
                                    source={require('./image/ic_login_pass.png')}/>

                                <TextInput
                                    placeholder={'请输入密码'}
                                    secureTextEntry={true}
                                    onChangeText={this._onChangeTextPassword.bind(this)}
                                    underlineColorAndroid="transparent"
                                    style={styles.login_input_input}/>
                            </View>

                        </View>

                    </ImageBackground>

                    <View style={styles.login_button}>

                        <Button
                            onPress={() => this._clickLogin()}
                            title={'登录'}
                            style={styles.login_button}/>
                    </View>
                </View>

            </ImageBackground>
        )
    }

}

const size = Dimensions.get('window');

const styles = StyleSheet.create({
    background: { // 全屏的样式
        flex: 1,
        width: size.width,
        height: size.height,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' // 列--垂直布局
    },
    login_logo: {
        width: size.width - ScreenUtils.scaleSize(30),
        height: ScreenUtils.scaleSize(300),
        paddingStart: ScreenUtils.scaleSize(10),
        paddingEnd: ScreenUtils.scaleSize(10)
    },
    login_input_bg: {
        width: size.width - ScreenUtils.scaleSize(30),
        height: ScreenUtils.scaleSize(200),
        marginTop: ScreenUtils.scaleSize(30),
        marginStart: ScreenUtils.scaleSize(10),
        marginEnd: ScreenUtils.scaleSize(10)
    },
    login_input_layout: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' // 列--垂直布局
    },
    login_input_item: {
        width: size.width - ScreenUtils.scaleSize(20),
        height: ScreenUtils.scaleSize(100),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row' // 列--垂直布局
    },
    login_input_image: {
        width: ScreenUtils.scaleSize(36),
        height: ScreenUtils.scaleSize(36),
        marginStart: ScreenUtils.scaleSize(20)
    },
    login_input_divider: {
        width: size.width - ScreenUtils.scaleSize(40),
        height: ScreenUtils.scaleSize(1),
        marginStart: ScreenUtils.scaleSize(10),
        marginEnd: ScreenUtils.scaleSize(10),
        backgroundColor: '#CCCCCC'
    },
    login_input_input: {
        flex: 1,
        height: ScreenUtils.scaleSize(90)
    },
    login_button: {
        width: size.width - ScreenUtils.scaleSize(30),
        height: ScreenUtils.scaleSize(60),
        marginTop: ScreenUtils.scaleSize(30),
        marginBottom: ScreenUtils.scaleSize(100)
    },
});