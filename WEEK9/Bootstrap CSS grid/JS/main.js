function studentIDKeyUp(e) {
    if (e.keyCode == 13) $("#fullname").focus();
}
function fullnameKeyUp(e) {
    $("#fullname_error").html("");
    if (e.keyCode == 13) $("#birthday").focus();
}
function birthdayKeyUp(e) {
    if (e.keyCode == 13) $("#gender").focus();
}
function genderKeyUp(e) {
    if (e.keyCode == 13) $("#hometown").focus();
}
function fullnameBlur(){
    $("#fullname").val(StandardizeName($("#fullname").val()));
}
function accept(){
    $("#fullname_error").html("");
    $("#studentID_error").html("");
    $("#birthday_error").html("");
    if ($("#fullname").val() == "") {
        $("#fullname_error").html("Chưa nhập họ tên.");
    }
    if ($("#studentID").val() == "") {
        $("#studentID_error").html("Chưa nhập mã.");
    }
    if ($("#birthday").val() != "") {
        if (!isDate($("#birthday").val()))
            $("#birthday_error").html("Ngày sinh không đúng.");
    }
}

$(document).ready(function(){
    $("#studentID").focus();
    $("#studentID").keyup(studentIDKeyUp);
    $("#fullname").keyup(fullnameKeyUp);
    $("#birthday").keyup(birthdayKeyUp);
    $("#gender").keyup(genderKeyUp);
    $("#fullname").blur(fullnameBlur);
    $("#acceptbtn").click(accept);
});

function StandardizeName(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (var i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}
function isDate(d) {
	s = d.split('/');
	if (s.length != 3) return false; 
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;
	s[1] = s[1].substring(s[1].length-2);
	if (s[1][0] == '0') s[1] = s[1].substring(s[1].length-1);
	day = parseInt(s[0]);
	month = parseInt(s[1]);
	year = parseInt(s[2]);
	if (month > 12 || month < 1) return false;
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		if (day > 31) return false;
	} else if (month == 2){
		if (year%4 == 0 && year%100 != 0) {
			if (day > 29) return false;
		} else if (day > 28) return false;
	} else if (day > 30) return false;
	date = new Date();
	if (year > date.getFullYear() || year < 1900) return false;
	return true;
}