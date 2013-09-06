game-preloader
==============
---
#Usage

- ####**scriptMain.js**  
Put your main .js script into this file. This file is only loaded and executed after the assets are D/L'ed by the browser. This is the essentially your game logic script.

- ####**index.html**  
- Maintain the structure of the html file. Leave the contents that are present at the top itself and add your code where marked. Libraries and css in the head, and html code in the body (inside the place marke
 
- ####**preloader.js**  
update the manifest list to include all your image filenames along with some random unique ID. Also change the basePath variable to your absolute website path when hosted on festember.com. (or localhost when testing)

- ####**images/**  
Drop all your image assets into this folder.

- ####**sounds/**  
Drop all your audio assets into this folder.

- ####**fonts/**  
Drop all your fonts into this folder.


###Tips:
- Resize your assets to exactly what size is required.
- Compress images into 'jpg' if there is no transparency required in the image.
- Else if 'png' use http://tinypng.org to compress them further. ( It will preserve transparency )
 
#####Important:
- Clone the repo and put your files in it and make appropriate modifications to your scripts as necessary.

-Delta
