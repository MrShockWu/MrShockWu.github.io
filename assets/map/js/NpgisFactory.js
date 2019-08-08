(function () {
    var e = TMapMapProxy = function (configUrl) {
        this.configUrl = configUrl;
    }
    e.prototype.createMap = function (type, mapId, opts) {
        var option = opts || {};
        var mapConfig;
        mapId = mapId == null ? "mapId" : mapId;
        $.ajax({
                async: false,
                dataType: 'json',
                url: this.configUrl || '/tmap/gis-manager/js/mapConfig.json?v=' + new Date().getTime(),
                type: 'get'
            })
            .then(
                function (res) {
                    mapConfig = res.mapOpts;
            
                   
                },
                function () {

                });
                console.log(mapConfig);
                var map = window.map = new TMap.Map(document
                    .getElementById(mapId), mapConfig);

                /** ****基础图层***** */
                var baseLayer = [],
                    vectorLayerItem, sattilateLayerItem, baseLayerItem, vectorBaseLayer = [],
                    sattilateBaseLayer = [],
                    layerType;
                for (var i = 0, len = mapConfig.vectorLayer.length; i < len; i++) {
                    vectorLayerItem = mapConfig.vectorLayer[i];
                    layerType = vectorLayerItem.layerType
                        .split('.');
                    baseLayerItem = new TMap.Layers[layerType[layerType.length - 1]](
                        vectorLayerItem.layerOpt.url,
                        vectorLayerItem.layerName,
                        vectorLayerItem.layerOpt);
                    vectorBaseLayer.push(baseLayerItem);
                    baseLayer.push(baseLayerItem);
                }
                map.addLayers(baseLayer);
                option.callback && option.callback(map);
                return map;
    };
})();