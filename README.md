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


-Delta