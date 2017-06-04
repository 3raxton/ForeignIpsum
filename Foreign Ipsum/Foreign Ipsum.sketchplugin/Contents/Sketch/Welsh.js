var Welsh = "Titrwm, tatrwm, Gwen lliw'r wy, Lliw'r meillion mwy rwy'n curo, Mae'r gwynt yn oer oddi ar y llyn. O flodyn y dyffryn deffro. Chwyth y tân, mi gynnith toc, Mae hi'n ddrycinog heno. Os ymhell o'm gwlad yr af. Pa beth a wnaf a'm geneth? Pa run a'i mynd a hi efo mi Ai gadael hi mewn hiraeth? Hedd fy nghalon o bob man. I fryniau a phantiau Pentraeth. Weithiau'n Llundain, weithiau yng Nghaer. Yn gweithio'n daer amdani, Weithiau yn gwasgu fy mun mewn cell. Ac weithiau ymhell oddi wrthi: Mi gofleidiwn flodau'r rhos Pe bawn i'n agos ati. Titrwm, tatrwm, Gwen lliw'r wy, Lliw'r meillion mwy rwy'n curo, Mae'r gwynt yn oer oddi ar y llyn. O flodyn y dyffryn deffro. Chwyth y tân, mi gynnith toc, Mae hi'n ddrycinog heno..";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:Welsh];
            [layer setName:"Welsh"];
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
