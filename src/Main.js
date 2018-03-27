import React from "react";
import LoginView from './login/LoginView'
import MapView from './map/MapView'
import {StackNavigator} from 'react-navigation'

const RootNavigator = StackNavigator(
    {
        Login: {
            screen: LoginView,
            navigationOptions: {
                headerTitle: null,
                header: null  //隐藏顶部导航栏
            }
        },
        Map: {
            screen: MapView,
            navigationOptions: {
                headerTitle: '地图页面',
                headerBackTitle: null,
            }
        }
    },
    {
        headerMode: 'screen'
    }
);
export default RootNavigator