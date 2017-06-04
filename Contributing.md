If you would like to add your own language to Foreign Ipsum follow the instructions below to do so easily. 

Go to the [Sketch contents folder](https://github.com/3raxton/ForeignIpsum/tree/master/Foreign%20Ipsum/Foreign%20Ipsum.sketchplugin/Contents/Sketch) .
  * If the language you are adding already exists follow follow the steps below.
  * If the language you are adding does not already exist [these]() steps


# For a language that is already a part of Foreign Ipsum
  * Find the language in [this list](https://github.com/3raxton/ForeignIpsum/tree/master/Foreign%20Ipsum/Foreign%20Ipsum.sketchplugin/Contents/Sketch)
  * Choose the file that has the language you are adding to and add to the end of the first line before the last quotation mark. 
  * Add the text you added and its translation to the [README](https://github.com/3raxton/ForeignIpsum#writers--supported-languages) along with your name and the link to a social profile if you prefer. 
    * Please follow the same formatting as previous languages. 
  * Commit your changes and submit a pull request. I will review then merge or deny it. Cheers!





# For a language that does not already exist
 * Choose one of the languages in [this list](https://github.com/3raxton/ForeignIpsum/tree/master/Foreign%20Ipsum/Foreign%20Ipsum.sketchplugin/Contents/Sketch)
  * Copy all of the code and create a new file with the name of the language as the file name.
    * Please put the file within [this](https://github.com/3raxton/ForeignIpsum/tree/master/Foreign%20Ipsum/Foreign%20Ipsum.sketchplugin/Contents/Sketch) folder
  * Change the language name (the word following var) that you copied (for this example, Dutch) in the first line to the language you are adding.
```
var Dutch = "Ik hou van eten, vooral lekker eten. Mijn favoriete eten is sushi. Ik hou ook van vakantie.";
```
  * Replace the string of text (the words between the quotation marks) of the language (for this example, Dutch) that you copied in the first line to the language that you are adding.
  
```
var Dutch = "Ik hou van eten, vooral lekker eten. Mijn favoriete eten is sushi. Ik hou ook van vakantie.";
```
  
  * Set the following lines from the language you copied (for this example, Dutch) to the language name that you are adding.
``` 
  [layer setStringValue:Dutch];
            [layer setName:"Dutch"];
```
  * Add the text you added and its translation to the [README](https://github.com/3raxton/ForeignIpsum#writers--supported-languages) along with your name and the link to a social profile if you prefer. 
    * Please follow the same formatting as previous languages. 
  * Commit your changes and submit a pull request. I will review then merge or deny it. Cheers!
