
function wrapText(current_text, maxWidth) {
	var current_lines = new Array();	
	var line_number = 0;

	var line = "";
   var words = current_text.split(" ");

   for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var testWidth = testLine.length * 8;
		
		if (testWidth > maxWidth) {
				current_lines[line_number] = line;
				line_number += 1;
            line = words[n] + " ";
         }
         else {
             line = testLine;
         }
		
	}
	
	current_lines[line_number] = line;
	line_number += 1;
	
	return current_lines
}


function writeLines(context, lines, x, y, lineHeight) {
			
	for (i=0; i<lines.length; i++) {
		context.fillStyle = "black";
	   context.fillText(lines[i], x, y);
	   y += lineHeight;	   
	}
	
}


function drawText(canvas, context, current_text, rgb) {

	var maxWidth = 680;
	var lineHeight = 20;
	var x = 14;
	var y = 24;
	
	var splitLines = wrapText(current_text, maxWidth);
	var textHeight = splitLines.length * lineHeight;
	         
	canvas.height = textHeight + 10;  
	         
	context.fillStyle = rgb;
	context.fillRect(5, 10, 690, textHeight);
	
	context.font = "18px 'LeagueGothicRegular'";
	context.fillStyle = "#333";
	
	writeLines(context, splitLines, x, y, lineHeight);
		
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


var canvas0 = document.getElementById('canvas0');
var ctx0 = canvas0.getContext('2d');

var canvas1 = document.getElementById('canvas1'); 
var ctx1 = canvas1.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');

var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');

canvas1.addEventListener('click', onclick1, false);
canvas2.addEventListener('click', onclick2, false);
canvas3.addEventListener('click', onclick3, false);
canvas4.addEventListener('click', onclick4, false);


function onclick1() {
	update(0)	
}

function onclick2() {
	update(1)
}

function onclick3() {
	update(2)
}

function onclick4() {
	update(3)
}

function update(active_index) {	
										
		if (active_index <= node_children.length) {
			
			
			var selected_node = bell_jar[node_children[active_index]]
			var child_ids = selected_node["child_ids"]
			
			if (selected_node["action"] == "GO_TO") {
				child_ids[child_ids.length] = selected_node["target"]
			}
									
			current_id = child_ids[0] 	
			node_children = []			
										
			redraw()	
		} 
				
}

function redraw() {
			
	ctx0.clearRect(0, 0, 700, 150);
	
	for (i=0; i< boxes.length; i++) {
		boxes[i].clearRect(0, 0, 700, 100);
	}
		
	current_node = bell_jar[current_id]	
			
	if (current_node["action"] == "SET_TOKEN") {
		tokens[tokens.length] = current_node["target"]
	}
	
	all_children = current_node["child_ids"]
	if (current_node["action"] == "GO_TO") {
		all_children[all_children.length] = current_node["target"]
	}
	
	var valid_children = [];
	var c = 0;
	while (c < all_children.length) {
		child_id = all_children[c]
		check_node = bell_jar[child_id]
		if (check_node["action"] == "GET_TOKEN") {
			if (contains(tokens, check_node["target"])) {
				valid_children[valid_children.length] = child_id
			}
		}
		
		else {
			valid_children[valid_children.length] = child_id
		}
		
		c++
		
	}
	
	node_children = valid_children
		
	drawText(canvas0, ctx0, current_node["contents"], "green")
	
	my_debugger.textContent = all_children + "..." + node_children + "/" + node_children.length;
	
	var i=0;	
	while (i < node_children.length) {
			
		child_node = bell_jar[node_children[i]];	
		current_canvas = canvases[i]	
		current_context = boxes[i];
				
		drawText(current_canvas, current_context, child_node["contents"], "yellow");
		i++
				
	}	
	
	// my_debugger.textContent = tokens
					
}

var canvases = [canvas1, canvas2, canvas3, canvas4]
var boxes = [ctx1, ctx2, ctx3, ctx4]
var current_id = "0000";
var node_children = []
var tokens = []
var my_debugger = document.getElementById("debugger");

redraw()

