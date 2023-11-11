// Use AJAX
document.querySelector(".ajax-submit").onclick = function() {
    let xmlhttp = getXmlHttpObject(); //Send request by AJAX
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            // Receive JSON result
            let v = xmlhttp.responseText;
            if (v.length > 0) {
                // parse to object
                let o = JSON.parse(v);

                document.getElementById("lx").innerHTML = o.x;
                document.getElementById("ly").innerHTML = o.y;
                document.getElementById("sum").innerHTML = o.sum;
                document.getElementById("plus").innerHTML = " + ";
                document.getElementById("equal").innerHTML = " = ";
                document.getElementById("x").value = o.x;
                document.getElementById("y").value = o.y;
            }
        }
    };
    xmlhttp.open("POST", "c.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + document.getElementById("x").value + "&y=" + document.getElementById("y").value);
};

//	Use Fetch API 
document.querySelector(".fetch-submit").onclick = function() {
    fetch("c.php", {
        method: "POST", //send POST request
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body: "x=" + document.getElementById("x").value + "&y=" + document.getElementById("y").value
    }).then(response => {
        if (response.status == 200) { // Successfull
            response.json().then(	// Received data is JSON
                o => {
                    document.getElementById("lx").innerHTML = o.x;
                    document.getElementById("ly").innerHTML = o.y;
                    document.getElementById("sum").innerHTML = o.sum;
                    document.getElementById("plus").innerHTML = " + ";
                    document.getElementById("equal").innerHTML = " = ";
                    document.getElementById("x").value = o.x;
                    document.getElementById("y").value = o.y;
                }
            );
        }
    });
};