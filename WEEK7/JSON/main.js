document.getElementById("button").onclick = function() {
    this.disabled = true;
    var xmlhttp = new XMLHttpRequest(); // Khai bao XMLHttpRequest
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {    
            if (this.status == 200) {
                var obj = JSON.parse(this.responseText); // Chuyen JSON sang Object
                for (var i = 0; i < obj.length; i++) {
                    var r = document.createElement("tr");
                    var d1 = document.createElement("td");
                    var d2 = document.createElement("td");
                    var d3 = document.createElement("td");
                    d1.innerHTML = obj[i].name;
                    d2.innerHTML = obj[i].age;
                    d3.innerHTML = obj[i].cars.length;
                    for (var j = 0; j < obj[i].cars.length; j++)
                        d3.innerHTML += "<br>" + obj[i].cars[j].name + " - " + obj[i].cars[j].models;
                    r.appendChild(d1);
                    r.appendChild(d2);
                    r.appendChild(d3);
                    document.querySelector("#table tbody").appendChild(r);
                }
            }
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send(null);
}