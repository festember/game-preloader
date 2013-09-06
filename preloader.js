
    var preload;
    $("#loadingOverlay").fadeIn("fast");
    
   	var manifest = [
           {src:"Sunrise.jpg", id:"image0"},
           //{src:"gallery.png", id:"image1"},
	];

        function init(){
            preload = new createjs.LoadQueue(true, "https://c9.io/judenaveenraj/game-preloader/workspace/images/");
            // Use this instead to use tag loading
            //preload = new createjs.PreloadJS(false);

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
            $("#loader").text("Go Ahead Choose Your Poison");

			// a new JS
			var js  = document.createElement("script");
			js.type = "text/javascript";
			js.src  = "gameScript.js";

			
			document.body.appendChild(js);

       


        }
        init();

