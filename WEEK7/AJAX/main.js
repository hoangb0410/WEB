document.getElementById("button").onclick = function() {
    this.disabled = true;
    var xmlHttp = new XMLHttpRequest(); // Khai bao doi tuong XMLHttpRequest
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4) document.getElementById("div").innerHTML = this.responseText;
    };
    xmlHttp.open("GET", "abc.html", true);
    xmlHttp.send(null);
};