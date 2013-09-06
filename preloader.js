
    var preload;
    $("#loadingOverlay").fadeIn("fast");


    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [
           {src:"Sunrise.jpg", id:"image0"},
           {src:"bgsample.png", id:"image1"},
	];

    function init(){

        /////////////// ADD BASEPATH IN THE SECOND PARAMETER OF THE FOLLOWING LINE  /////////////////////
        //preload = new createjs.LoadQueue(true, "http://festember.com/your/base/path");
        preload = new createjs.LoadQueue(true, "http://localhost/images/");
        
        preload.addEventListener("progress", preloadHandleProgress);
        preload.addEventListener("complete", preloadHandleComplete);
        preload.setMaxConnections(10);
        preload.loadManifest(manifest);

    }

    function stop() {
        if (preload != null) { preload.close(); }
    }

    function preloadHandleProgress(event) {
        if(event)
            $("#loader").text(Math.round((event.loaded*100.0)).toString()+"%") ;
    }

    function preloadHandleComplete(event) { 
        $("#loader").text("Starting Game...");
		var js  = document.createElement("script");
		js.type = "text/javascript";
		js.src  = "gameScript.js";
		document.body.appendChild(js);
    }

    init();

