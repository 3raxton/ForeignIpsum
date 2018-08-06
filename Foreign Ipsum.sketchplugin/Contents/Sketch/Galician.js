var Galician = "Os paxariños das árbores fican os xornais onde xente de Nova Iork come mazás cun coitelo dourado. A miña nai come eses paxariños cando ninguén está a mirar, eu penso que é razoable seica o canibalismo é ilegal (penso eu). O meu irmán de acoxida ten o pelo vermello e os pantalóns rotos. O can ládralle ás catro da mañá para que esperte.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Galician];
            [layer setName:"Galician"];
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
