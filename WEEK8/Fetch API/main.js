document.getElementById("button").onclick = function() {
    this.disabled = true;
    fetch("data.json").then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                for (let i = 0; i < data.length; i++) {
                    let r = document.createElement("tr");
                    let d1 = document.createElement("td");
                    let d2 = document.createElement("td");
                    let d3 = document.createElement("td");
                    d1.innerHTML = data[i].name;
                    d2.innerHTML = data[i].age;
                    d3.innerHTML = data[i].cars.length;
                    for (let j = 0; j < data[i].cars.length; j++)
                        d3.innerHTML += "<br>" + data[i].cars[j].name + " - " + data[i].cars[j].models;
                    r.appendChild(d1);
                    r.appendChild(d2);
                    r.appendChild(d3);
                    document.querySelector("tbody").appendChild(r);	
                }
            });
        }
    });
};