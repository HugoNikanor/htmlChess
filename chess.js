var inmove = false;

var oldPos = "";
var oldData = "";

for( l = 0; l < 8; l++ ) {
	for( n = 0; n < 8; n++ ) {
		var pos = String.fromCharCode(97+l) + (n+1);
		document.getElementById(pos).onclick = function( e ) {

			var clickedPos = e.toElement.id;

			if( inmove ) {
				// place active piece
				var oldSpace = document.getElementById(oldPos);

				if( clickedPos == oldPos ) {
					if( oldSpace.className == "white" )
						document.getElementById(oldPos).style.backgroundColor = "White";
					else
						document.getElementById(oldPos).style.backgroundColor = "Black";
					inmove = false;
				} else {
					// set color of space moving from back to original
					if( oldSpace.className == "white" )
						document.getElementById(oldPos).style.backgroundColor = "White";
					else
						document.getElementById(oldPos).style.backgroundColor = "Black";

					document.getElementById(clickedPos).innerHTML = oldData;
					document.getElementById(oldPos).innerHTML = "";

					document.getElementById("move-log").innerHTML +=
						oldPos + " " + clickedPos + "<br>";

					inmove = false;
				}
			} else {
				// make piece active
				oldPos = clickedPos;
				oldData = document.getElementById(oldPos).innerHTML;

				if( oldData == "" ) {
					inmove = false;
				} else {
					// mark space moving from
					document.getElementById(clickedPos).style.backgroundColor = "Blue";
					inmove = true;
				}
			}
		};
	}
}
