var Italian = "Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso. Mi piace l'estate. Odio la pioggia. La pizza italiana è la migliore e tutti dovrebbero provarla. Adoro il gelato. Ascoltare la musica è la cosa migliore per rilassarsi. Amo il gelato. Non importa quanto possa fare freddo, letteralmente nulla può fermarmi dal mangiarlo anche d'inverno .";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Italian];
            [layer setName:"Italian"];
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
