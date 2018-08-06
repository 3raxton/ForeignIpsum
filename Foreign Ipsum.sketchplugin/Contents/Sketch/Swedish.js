var Swedish = "Blommor doftar gott. Flingor med mjölk är inte gott, flingor är bara gott med filmjölk. Hundar är mycket bättre än katter men bästa djuret av alla måste ändå vara valrossar. Rosor är röda violer är blå jag gillar himmelen med moln på. Go och glad kexchoklad. Svensk godis är det bästa som finns skulle kunna äta ihjäl mig på sura skallar. Nu vattnas min mun bara för att jag skrev det.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Swedish];
            [layer setName:"Swedish"];
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
