var checks = document.getElementsByName("check");

for (let i = 0; i < checks.length; i++){
    checks[i].onchange = function() {
        if (this.checked==true) {
            this.parentNode.parentNode.classList.add("selected");
            let c = document.getElementsByName("check");
            let j = 0;
            for (; j < c.length; j++) 
                if (!c[j].checked) 
                    break;
            if (j == c.length) document.getElementById("checkall").checked = true;
            else document.getElementById("checkall").checked = false;

            document.querySelector("div.group").classList.remove("nodisplay");
        } else {
            this.parentNode.parentNode.classList.remove("selected");
            document.getElementById("checkall").checked = false;
            let c = document.getElementsByName("check");	
            let j = 0;		
            for (; j < c.length; j++)
                if (c[j].checked) 
                    break;
            if (j == c.length) document.querySelector("div.group").classList.add("nodisplay");
            else document.querySelector("div.group").classList.remove("nodisplay");
        }
	};
}

document.getElementById("checkall").onchange = function() {
	let c = document.getElementsByName("check");			
	for (let i = 0; i < c.length; i++) {
		c[i].checked = this.checked;
		if (c[i].checked) {
            c[i].parentNode.parentNode.classList.add("selected");
        }
		else c[i].parentNode.parentNode.classList.remove("selected");		
	}
	if (this.checked) {
        document.querySelector("div.group").classList.remove("nodisplay");
    }
	else document.querySelector("div.group").classList.add("nodisplay");
};

document.querySelector(".group-delete").onclick = function() {
	let c = document.getElementsByName("check");	 		
	for (let i = c.length-1; i >= 0; i--)
		if (c[i].checked) {
			c[i].parentNode.parentNode.parentNode.removeChild(c[i].parentNode.parentNode);
		}
};
