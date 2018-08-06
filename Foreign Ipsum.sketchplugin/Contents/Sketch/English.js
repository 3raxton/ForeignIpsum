var English = "How do we know that rain isn't tears falling from sad clouds? They could be but you've never asked a cloud, have you? Birds fly but ostriches can’t and they are birds. I wonder if there is a reason behind that. I really like days where it rains all day, it is super relaxing. Birds actually fly backwards which means that planes do the same. You should listen to music instead of eating. It makes you feel much better.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:English];
            [layer setName:"English"];
            count += 1;
        } else if (layer.className() == "MSLayerGroup")){
            count += fillLayer(layer.layers());
        }
    }
    return count;
}

function onRun(context) {

    var count = fillLayers(context.selection)

    if (count == 0) {
        context.api().alert("Please select a text layer.", "Oops!");
    } else {
        log("Filled: " + count);
      }
}
