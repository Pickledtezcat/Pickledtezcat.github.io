
function wrapText(current_text, maxWidth) {
	var current_lines = new Array();	
	var line_number = 0;

	var line = "";
   var words = current_text.split(" ");

   for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var testWidth = testLine.length * 15;
		
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
	         
	
	var start_x = 5;
	var start_y = 10;
	var end_x = 690;
	var end_y = textHeight;	
	
	var offset = -3;
	context.fillStyle = rgb[0];	
	context.fillRect(start_x + offset, start_y + offset, end_x + offset, end_y + offset);	
	
	var offset = 3;
	context.fillStyle = rgb[1];	
	context.fillRect(start_x + offset, start_y + offset, end_x + offset, end_y + offset);	
	
	
	context.font = "18px 'Lucida Console'";
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
			
			var child_ids = [];
			var all_children = [];
			
			var selected_node = bell_jar[node_children[active_index]]
			var all_children = selected_node["child_ids"]
			
			if (selected_node["action"] == "GO_TO") {
				all_children[child_ids.length] = selected_node["target"]
			}
			
			if (selected_node["action"] == "SET_TOKEN") {
				tokens[selected_node["target"]] = selected_node["value"]
			}
						
			var valid_children = [];
			var c = 0;
			while (c < all_children.length) {
				child_id = all_children[c]
				check_node = bell_jar[child_id]
				if (check_tokens(child_id)) {
					valid_children[valid_children.length] = child_id	
							
				}
						
				c++
				
			}
			
			child_ids = valid_children		
									
			current_id = child_ids[0] 	
			node_children = []			
										
			redraw()	
		} 
				
}

function check_tokens(dialog_id) {

	var token_dict = [">", "<", "==", "!=", "<=", ">=", ""];
	var dialog = bell_jar[dialog_id];		
	var valid_check = false;
	
	if (dialog["action"] == "GET_TOKEN") {
		if (tokens[dialog["target"]] != undefined) {
			var check = dialog["check"];
		
			if (contains(token_dict, check)) {		
				
				var token_value = tokens[dialog['target']];
				var target_value = dialog['value'];
				
				
				if (check == "") {
					valid_check = true;
				}
				
				if (check == ">" && token_value > target_value) {
					valid_check = true;
				}
				
				if (check == "<" && token_value < target_value) {
					valid_check = true;
				}
				
				if (check == "==" && token_value == target_value) {
					valid_check = true;
				}
				
				if (check == "!=" && token_value != target_value) {
					valid_check = true;
				}
				
				if (check == "<=" && token_value <= target_value) {
					valid_check = true;
				}
				
				if (check == ">=" && token_value >= target_value) {
					valid_check = true;
				}
				
				if (check == "=" && token_value == target_value) {
					valid_check = true;
				}
			}
			
		}
		
		return valid_check
		
	}
	else {
		return true
	}		
}


function redraw() {
			
	ctx0.clearRect(0, 0, 700, 150);
	
	for (i=0; i< boxes.length; i++) {
		boxes[i].clearRect(0, 0, 700, 100);
	}
		
	current_node = bell_jar[current_id]	
	
	if (current_node != undefined) {
		
		if (current_node["action"] == "SET_TOKEN") {
			tokens[current_node["target"]] = current_node["value"]
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
			if (check_tokens(child_id)) {
				valid_children[valid_children.length] = child_id	
						
			}
					
			c++
			
		}
		
		node_children = valid_children
		
				
		rgb = ["#0066ff", "#3399ff"]
			
		drawText(canvas0, ctx0, current_node["contents"], rgb)
		
		var token_names = []
		
		for (token in tokens) {
			token_names[token_names.length] = ["[", token, "/" ,tokens[token], "]"]
		}
		
		// my_debugger.textContent = token_names;
		
		var i=0;	
		while (i < node_children.length) {
		
			rgb = ["#ffcc00", "#ffff66"]
				
			child_node = bell_jar[node_children[i]];	
			current_canvas = canvases[i]	
			current_context = boxes[i];
					
			drawText(current_canvas, current_context, child_node["contents"], rgb);
			i++
		}
				
	}	
	
	else {
		rgb = ["#0066ff", "#3399ff"]
		drawText(canvas0, ctx0, "Congratulations! You win.", rgb)		
	}
						
}

var canvases = [canvas1, canvas2, canvas3, canvas4]
var boxes = [ctx1, ctx2, ctx3, ctx4]
var current_id = "0000";
var node_children = []
var tokens = {"": true}
var my_debugger = document.getElementById("debugger");

redraw()

