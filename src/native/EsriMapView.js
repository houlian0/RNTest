import React, {PropTypes} from 'react';
import {
    requireNativeComponent,
    View,
    UIManager,
    findNodeHandle,
    ReactNative,
    Platform
} from 'react-native';

/*
var iface = {
    name: 'EsriMapView',
    propTypes: {
        ...View.propTypes
    }
};
module.exports = requireNativeComponent('EsriMapView', iface);
*/

const MapCustom = requireNativeComponent('EsriMapView', EsriMapView);

class EsriMapView extends React.Component {
    constructor(props) {
        super(props);
    }

    play() {
        this.runCommand('play');
    }

    reset() {
        this.runCommand('reset');
    }

    runCommand(name, args = []) {
        return Platform.select({
            android: () => UIManager.dispatchViewManagerCommand(
                this.getHandle(),
                UIManager.EsriMapView.Commands[name],
                args
            ),
            ios: () => EsriMapView[name](this.getHandle(), ...args),
        })();
    }

    getHandle() {
        return findNodeHandle(this.refs.mapCustom);
    }

    render() {
        return <MapCustom ref="mapCustom" {...this.props}/>;
    }
}

module.exports = EsriMapView;
