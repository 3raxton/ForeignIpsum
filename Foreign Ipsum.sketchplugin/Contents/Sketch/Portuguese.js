var Portugese = "Eu gosto de escutar música enquanto me arrumo para sair. Eu não gosto de você. Eu gosto de você. Eu tenho que lavar meu cabelo. Essa garota que está cantando tem uma voz bonita. Eu queria poder cantar. Parece que todo mundo tem o mesmo sapato. Eu não quero te dar o meu número. Eu não gosto de você, eu gosto dela. Eu não sei se ela gosta de mim.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Portugese];
            [layer setName:"Portugese"];
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
