$(document).ready(function(){
    $("img.expend-colapse").click(function(){
        if (this.nextSibling.nextSibling.nextSibling.style.display == "") {
            this.nextSibling.nextSibling.nextSibling.style.display = "none";
            this.src = "static/plus.gif";
        } else {
            this.nextSibling.nextSibling.nextSibling.style.display = "";
            this.src = "static/minus.gif";
        }
    })
});