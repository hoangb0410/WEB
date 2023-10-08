// Dat tam diem vao o ho ten khi moi vao trang
document.getElementById("name").focus();

// Ham xuong dong sau khi nhan enter 
function XuongDong(e, myself, nextcontrolid) {
	if (window.event) e = window.event;
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}
// Xuong dong sau khi nhan enter 
document.getElementById("name").onkeyup = function(e) {
	XuongDong(e, this, 'address');
};
document.getElementById("address").onkeyup = function(e) {
	XuongDong(e, this, 'male');
};
document.getElementById("male").onkeyup = function(e) {
	XuongDong(e, this, 'female');
};
document.getElementById("female").onkeyup = function(e) {
	XuongDong(e, this, 'birthday');
};
document.getElementById("birthday").onkeyup = function(e) {
	XuongDong(e, this, 'email');
};
document.getElementById("email").onkeyup = function(e) {
	XuongDong(e, this, 'phone');
};

// Ham chuan hoa ten
function Name_Standardization(name) {
	temp = name;
	ss = temp.split(' ');
	temp = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (temp.length > 0) temp = temp + " ";
			temp = temp + ss[i].substring(0, 1).toUpperCase();
			temp = temp + ss[i].substring(1).toLowerCase();
		}
	return temp;
}
// Chuan hoa ten
document.getElementById("name").onblur = function() {
	this.value = Name_Standardization(this.value);
};

// Ham kiem tra dinh dang ngay/thang/nam (nn/tt/nnnn)
function IsDate(dmy) { 
	// Kiem tra co du 3 phan ngay, thang, nam
	s = dmy.split('/');
	if (s.length != 3) return false;
	//Kiem tra ca 3 deu la so
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;
	//Chuyen thanh so nguyen
	day = parseInt(s[0]);
	month = parseInt(s[1]);
	year = parseInt(s[2]);
	
	// Kiem tra thang
	if (month > 12 || month < 1) return false;

	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		if (day > 31) return false;
	} 
	else if (month == 2){ // Kiem tra thang 2 nam nhuan/ khong nhuan
		if (year%4 == 0 && year%100 != 0) { 
			if (day > 29) return false;
		} 
		else if (day > 28) return false;
	} 
	else if (day > 30) return false;
	// Kiem tra ngay
	if (day < 1) return false;

	// Kiem tra nam
	date = new Date();
	if (year > date.getFullYear() || year < 1950) return false;
	return true;
}

// Ham kiem tra dinh dang email
function IsEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

// Ham kiem tra lỗi khi nhan nut Chap nhan
function Accept() {
	var OK = true; 
	document.getElementById("name_error").innerHTML  = "";
	document.getElementById("birthday_error").innerHTML = "";
	document.getElementById("email_error").innerHTML = "";
	document.getElementById("username_error").innerHTML = "";
	document.getElementById("password_error").innerHTML = "";
	document.getElementById("repassword_error").innerHTML = "";

	// Ho ten
	if (document.getElementById("name").value == "") {
		document.getElementById("name_error").innerHTML = "Quý vị chưa nhập họ tên";
		document.getElementById("name").focus();
		OK = false;
	}

	// Ngay sinh
	if (document.getElementById("birthday").value == "") {
		document.getElementById("birthday_error").innerHTML = "Quý vị chưa nhập ngày sinh";
		document.getElementById("birthday").focus();
		OK = false;
	} else if (!IsDate(document.getElementById("birthday").value)) {
		document.getElementById("birthday_error").innerHTML = "Ngày sinh không đúng định dạng";
		document.getElementById("birthday").focus();
		OK = false;
	}

	//Email
	if (document.getElementById("email").value == "") {
		document.getElementById("email_error").innerHTML = "Quý vị chưa nhập e-mail";
		document.getElementById("email").focus();
		OK = false;
	} else if (!IsEmail(document.getElementById("email").value)) 				{
		document.getElementById("email_error").innerHTML = "E-mail không đúng định dạng";
		document.getElementById("email").focus();
		OK = false;
	}

	// Username
	if (document.getElementById("username").value == "") {
		document.getElementById("username_error").innerHTML = "Quý vị chưa nhập tên sử dụng";
		document.getElementById("username").focus();
		OK = false;
	}

	// Mat khau va go lai mat khau
	if (document.getElementById("password").value == "") {
		document.getElementById("password_error").innerHTML = "Quý vị chưa nhập mật khẩu";
		document.getElementById("password").focus();
		OK = false;
	} else	if (document.getElementById("repassword").value == "") {
		document.getElementById("repassword_error").innerHTML = "Quý vị chưa gõ lại mật khẩu";
		document.getElementById("repassword").focus();
		OK = false;
	} else	if (document.getElementById("password").value  != document.getElementById("repassword").value ) {
		document.getElementById("password").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
		document.getElementById("password").focus();
		OK = false;
	}
	
	//submit form
	if (OK) document.getElementById("form").submit();
}

// Ham nhan nut bo qua
function Ignore() {
	document.location.href = "../";
}


// Hien thi hinh anh
document.getElementById("FileUpload").onchange = function () {
    let preview = document.querySelector("img.preview");
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
        preview.classList.remove("nodisplay");
    }
};