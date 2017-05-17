var Turkish = "Karabiberim vur kadehlere hadi içelim, içelim her gece. Zevki sefa doldu gönlüme. Hadi içelim acıların yerine. Buralara yaz günü kar yağıyor canım ölene kadar seni bekleyemem. Ona buna benzemem oyuna gelmem senin için ölmeye söz veremem.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Turkish];
            [layer setName:"Turkish"];
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
