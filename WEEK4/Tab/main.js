sel_ = null;

function MO(r) {
    if (r != sel_) r.className = "thucdon-dechuot";			
}

function MOut(r) {
    if (r != sel_) r.className = "thucdon-binhthuong";			
}

function MC(r) {
    if (sel_ != null)
    sel_.className = "thucdon-binhthuong";
    
    sel_ = r;
    sel_.className = "thucdon-duocchon";

    frm = document.getElementById("myframe");
    if (sel_.id == "m1") {
        frm.src = "http://vnexpress.net";
    } else if (sel_.id == "m2") {
        frm.src = "http://dantri.com.vn";
    } else if (sel_.id == "m3") {
        frm.src = "http://voanews.com";
    } else if (sel_.id == "m4") {
        frm.src = "http://zing.vn";
    }
}