var Dutch = "Ik hou van eten, vooral lekker eten. Mijn favoriete eten is sushi. Ik hou ook van vakantie. Avary is heel erg verbrand vandaag. Ze is heel zielig want ze heeft heel veel pijn, Beterschap Ave! Mijn tuin is mooi en het leven ook! Doei! Aardbeien zijn lekker. Ik heb vandaag nieuwe schoenen gekocht en ze zijn heel mooi. Als je het heet hebt moet je in een zwembad springen. Ik ben gisteren van een ladder gevallen en het deed veel pijn. School is stom en de mensen zijn daar dom. Gras is groen.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Dutch];
            [layer setName:"Dutch"];
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
