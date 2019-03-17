var Italian = "Tenggorokan saya sakit, dan ada kerjaan yang seharusnya saya lakukan sekarang tetapi saya tidak mempunyai semangat untuk mengerjakan itu. Saya rasa saya harus ke rumah sakit untuk mengecek keadaan tenggorokan saya dan mendapatkan obat penahan rasa sakit, tetapi saya malas untuk bergerak.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Indonesian];
            [layer setName:"Indonesian"];
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
