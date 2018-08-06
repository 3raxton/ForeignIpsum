var French = "Je déteste faire du sport, cependant je vais à tout mes entraînements. J'en ai besoin parce que la vie Américaine m'a transformé (lol). Aujourd'hui c'était ma première compétition; je crois définitivement que le sport n'a pas été inventé pour moi...😂😂. Je suis fatiguée et suis couchée sur le canapé. J'aime vraiment faire du vélo. Elle est une très jolie femme. L'océan est bleu et très grand. J'ai acheté des nouvelles chaussures aujourd'hui et elles sont vraiment jolies. Si tu as chaud tu dois sauter dans la piscine. Hier, je suis tombée d'une échelle et ca fait très mal.";

// to load script with accurate language make different version of this script with the right language
// example: within the .js file change the script option to the correct language script

function fillLayers(layers) {
    var count = 0
    for (var i = 0; i < layers.length; ++i) {
        var layer = layers[i];
        if (layer.className() == "MSTextLayer") {
            [layer setStringValue:French];
            [layer setName:"French"];
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
