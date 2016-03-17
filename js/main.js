function main() {
  cartodb.createVis('map', 'https://stanford.cartodb.com/u/fidelsalgado/api/v2/viz/aef39022-d11f-11e5-9b9c-0ecfd53eb7d3/viz.json', {
      shareable: false,
      title: true,
      description: true,
      search: true,
      tiles_loader: true,
      center_lat: 37.528484,
      center_lon: -122.270104,
      zoom: 12
      })
  .done(function(vis, layers) {
    // layer 0 is the base layer, layer 1 is cartodb layer
    // setInteraction is disabled by default
    layers[1].setInteraction(true);
    layers[1].on('featureOver', function(e, latlng, pos, data) {
      cartodb.log.log(e, latlng, pos, data);
    });
    // you can get the native map to work with it
    var map = vis.getNativeMap();
    // now, perform any operations you need
    // map.setZoom(3);
    // map.panTo([50.5, 30.5]);

    var LayerActions = {
      sanmateo: function() {
        map.panTo([37.572, -122.3187]);
        map.setZoom(16);
        return true;
      },
      northfairoaks: function() {
        map.panTo([37.471977, -122.203926]);
        map.setZoom(17);
        return true;
      },
      peninsula: function() {
        map.panTo([37.528484, -122.270104]);
        map.setZoom(12);
        return true;
      }
    };

    $('.button').click(function() {
        $('.button').removeClass('selected');
          $(this).addClass('selected');
            LayerActions[$(this).attr('id')]();
    });
  })
  .error(function(err) {
    console.log(err);
  });
}
window.onload = main;
