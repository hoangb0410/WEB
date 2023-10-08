var FKey = document.Keypad;
var Cal = 0;
var FlagNewNum = false;
var PendingOp = "";

// Nhan so
function NumPressed (Num) {
    if (FlagNewNum==true) {
        FKey.ReadOut.value  = Num;
        FlagNewNum = false;
    }
    else {
        if (FKey.ReadOut.value == "0")
            FKey.ReadOut.value = Num;
        else
            FKey.ReadOut.value += Num;
    }
}

// Phep tinh
function Operation (Op) {
    var Readout = FKey.ReadOut.value;
    if (FlagNewNum==false || PendingOp == "=");
    {
        FlagNewNum = true;
        if ( '+' == PendingOp )
            Cal += parseFloat(Readout);
        else if ( '-' == PendingOp )
            Cal -= parseFloat(Readout);
        else if ( '/' == PendingOp )
            Cal /= parseFloat(Readout);
        else if ( '*' == PendingOp )
            Cal *= parseFloat(Readout);
        else
            Cal = parseFloat(Readout);

        FKey.ReadOut.value = Cal;
        PendingOp = Op;
    }
}
// So thap phan
function Decimal () {
    var curReadOut = FKey.ReadOut.value;
    if (FlagNewNum) {
        curReadOut = "0.";
        FlagNewNum = false;
    }
    else {
        if (curReadOut.indexOf(".") == -1)
        curReadOut += ".";
    }
    FKey.ReadOut.value = curReadOut;
}
// Xoa dau vao
function ClearEntry () {
    FKey.ReadOut.value = "0";
    FlagNewNum = true;
}
// Xoa toan bo
function Clear () {
    Cal = 0;
    PendingOp = "";
    ClearEntry();
}
// So am
function Negative () {
    FKey.ReadOut.value = parseFloat(FKey.ReadOut.value) * -1;
}
// Phan tram
function Percent () {
    FKey.ReadOut.value = (parseFloat(FKey.ReadOut.value) / 100) * parseFloat(Cal);
}