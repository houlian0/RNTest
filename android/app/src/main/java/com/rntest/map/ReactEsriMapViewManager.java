package com.rntest.map;

import android.os.Looper;
import android.support.v4.view.ViewCompat;
import android.widget.Toast;

import com.esri.arcgisruntime.layers.ArcGISTiledLayer;
import com.esri.arcgisruntime.layers.Layer;
import com.esri.arcgisruntime.mapping.ArcGISMap;
import com.esri.arcgisruntime.mapping.view.MapView;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Esri的地图MapView组件
 *
 * @author Asen
 * @version v2.0
 * @email houlian@gisinfo.com
 * @date 2018/03/27 10:45
 */
public class ReactEsriMapViewManager extends SimpleViewManager<MapView> {

    private static final String REACT_CLASS = "EsriMapView";

    private static final int COMMAND_PLAY = 1;
    private static final int COMMAND_RESET = 2;

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(
                "play", COMMAND_PLAY,
                "reset", COMMAND_RESET
        );
    }

    @Override
    public void receiveCommand(MapView root, int commandId, @Nullable ReadableArray args) {
        super.receiveCommand(root, commandId, args);
        switch (commandId) {
            case COMMAND_PLAY: {
                Toast.makeText(root.getContext(), "play", Toast.LENGTH_SHORT).show();
            }
            break;
            case COMMAND_RESET: {
                Toast.makeText(root.getContext(), "reset", Toast.LENGTH_SHORT).show();
            }
            break;
        }
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MapView createViewInstance(ThemedReactContext reactContext) {
        return new MapView(reactContext.getApplicationContext());
    }

    @ReactProp(name = "layers")
    public void setLayers(MapView mapView, String layers) {
        ArcGISMap map = new ArcGISMap();
        mapView.setMap(map);
        String[] split = layers.split(",");
        for (String s : split) {
            Layer layer = new ArcGISTiledLayer(s);
            map.getBasemap().getBaseLayers().add(layer);
        }
    }

}
