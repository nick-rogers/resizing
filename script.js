var resizeTimeout;

var selector = document.getElementById('slc');


var counter = 2;

function moving(){

    movementInterval = setInterval(function(){
    counter++;

    if(counter > 10){
        counter = 0;
    }

    selector.style.marginRight = counter+"px";
    selector.style.marginBottom = counter+"px";

    }, 100);

}



moving();


window.onresize = function() {


    clearTimeout(movementInterval);
    selector.style.marginRight = "2px";
    selector.style.marginBottom = "2px";



    var tabs = document.getElementsByClassName('tab');
	    for (var i = 0; i < tabs.length; i++) { 
		tabs[i].style.opacity='1';
	}
    //document.getElementById("t1").style.display = "block";

    resizeTimeout = setTimeout(function() {

        //document.getElementById("t1").style.display = "none";
        var tabs = document.getElementsByClassName('tab');
	    	for (var i = 0; i < tabs.length; i++) { 
			tabs[i].style.opacity='0';
		}
    }, 850);


    checkAttr();

};


function checkAttr(){
    var selected = document.getElementById("read");
    var status = window.getComputedStyle(selected, ':before').content;
    console.log("state: " + status);
}






















/**/