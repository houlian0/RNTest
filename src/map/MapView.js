import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';
import EsriMapView from '../native/EsriMapView'

export default class MapView extends Component {
    // static navigationOptions = {
    //     // title: 'Two', // 写死标题
    //     title: (navigation, childRouter) => {  // 动态标题
    //         return `${navigation.state.params.loginName}没选中`;
    //         // if (navigation.state.params.isSelected) {
    //         //     return `${navigation.state.params.name}选中`;
    //         // } else {
    //         //     return `${navigation.state.params.name}没选中`;
    //         // }
    //     },
    //     // header: ({ state, setParams, goBack }) => {
    //     //     let right;
    //     //     if (state.params.isSelected) {
    //     //         right = (<Button title="取消" onPress={() => setParams({ isSelected: false })}/>);
    //     //     } else {
    //     //         right = (<Button title="选择" onPress={() => setParams({ isSelected: true })}/>);
    //     //     }
    //     //     let left = (<Button title="返回" onPress={() => goBack()}/>);
    //     //     let visible = false;  // 是否显示导航栏
    //     //     return { right, left, visible };
    //     // },
    //     // header: {left: <Button title="返回"/>},
    // };
    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.background}>
                <Text style={styles.titleText}>标题栏{params.loginName}, {params.password}</Text>
                <EsriMapView style={styles.map} layers='http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },
    map: {
        flex: 1
    }
});
