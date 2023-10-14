function Click(F) {
	if (F.nextSibling.nextSibling.nextSibling.style.display == "") {
		F.nextSibling.nextSibling.nextSibling.style.display = "none";
		F.src = "static/plus.gif";
	} else {
		F.nextSibling.nextSibling.nextSibling.style.display = "";
		F.src = "static/minus.gif";
	}
}