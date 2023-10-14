// BANG 1
var col = 0;
var dir = "";
var table1 = document.getElementById("table1");
// Ham sap xep 
function Sort1() {
	var rows = table1.rows;
	for (var i = 1; i < rows.length; i++)
		for (var j = i+1; j < rows.length; j++) 
			if ((dir == "asc" && rows[i].cells[col].innerHTML.toLowerCase() > rows[j].cells[col].innerHTML.toLowerCase()) || 
				(dir == "desc" && rows[i].cells[col].innerHTML.toLowerCase() < rows[j].cells[col].innerHTML.toLowerCase()))
			{
				temp = rows[i].cells[1].innerHTML;
				rows[i].cells[1].innerHTML = rows[j].cells[1].innerHTML;
				rows[j].cells[1].innerHTML = temp;

				temp = rows[i].cells[2].innerHTML;
				rows[i].cells[2].innerHTML = rows[j].cells[2].innerHTML;
				rows[j].cells[2].innerHTML = temp;
			}
};
// Sap xep theo Ma san pham (hang 0 o 1)
table1.rows[0].cells[1].onclick = function() {
	if (col == 1) 
		table1.rows[0].cells[1].classList.remove(dir);
	else if (col == 2) 
		table1.rows[0].cells[2].classList.remove(dir);
	if (col == 1) {
		dir = (dir == "asc" ? "desc" : "asc");
	} else {
		col = 1;
		dir = "asc";
	}
	this.classList.add(dir);
	Sort1();
};
// Sap xep theo ten san pham (hang 0 o 2)
table1.rows[0].cells[2].onclick = function() {
	if (col == 1) 
		table1.rows[0].cells[1].classList.remove(dir);
	else if (col == 2) 
		table1.rows[0].cells[2].classList.remove(dir);
	if (col == 2) {
		dir = (dir == "asc" ? "desc" : "asc");
	} else {
		col = 2;
		dir = "asc";
	}
	this.classList.add(dir);
	Sort1();
};

// BANG 2
var table2 = document.getElementById("table2");
function Sort2() {
	var rows = table2.rows;
	for (var i = 1; i < rows.length; i++)
		for (var j = i+1; j < rows.length; j++) 
			if ((dir == "asc" && rows[i].cells[col].innerHTML.toLowerCase() > rows[j].cells[col].innerHTML.toLowerCase()) || 
				(dir == "desc" && rows[i].cells[col].innerHTML.toLowerCase() < rows[j].cells[col].innerHTML.toLowerCase()))
			{
				temp = rows[i].cells[1].innerHTML;
				rows[i].cells[1].innerHTML = rows[j].cells[1].innerHTML;
				rows[j].cells[1].innerHTML = temp;

				temp = rows[i].cells[2].innerHTML;
				rows[i].cells[2].innerHTML = rows[j].cells[2].innerHTML;
				rows[j].cells[2].innerHTML = temp;

				temp = rows[i].cells[3].innerHTML;
				rows[i].cells[3].innerHTML = rows[j].cells[3].innerHTML;
				rows[j].cells[3].innerHTML = temp;
			}
};
// Sap xep theo Ma san pham (hang 0 o 2)
table2.rows[0].cells[2].onclick = function() {
	if (col == 1) 
		table2.rows[0].cells[1].classList.remove(dir);
	else if (col == 2) 
		table2.rows[0].cells[2].classList.remove(dir);
	if (col == 2) {
		dir = (dir == "asc" ? "desc" : "asc");
	} else {
		col = 2;
		dir = "asc";
	}
	this.classList.add(dir);
	Sort2();
};
// Sap xep theo ten san pham (hang 0 o 3)
table2.rows[0].cells[3].onclick = function() {
	if (col == 1) 
		table2.rows[0].cells[1].classList.remove(dir);
	else if (col == 2) 
		table2.rows[0].cells[2].classList.remove(dir);
	if (col == 2) {
		dir = (dir == "asc" ? "desc" : "asc");
	} else {
		col = 2;
		dir = "asc";
	}
	this.classList.add(dir);
	Sort2();
};