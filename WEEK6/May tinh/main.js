var FKey = document.Keypad;
var Cal = 0;
var FlagNewNum = false;
var PendingOperator = "";
// Nhấn số
function NumPressed (Number) {
    if (FlagNewNum==true) {
        FKey.ReadOut.value  = Number;
        FlagNewNum = false;
    }
    else {
        if (FKey.ReadOut.value == "0")
            FKey.ReadOut.value = Number;
        else
            FKey.ReadOut.value += Number;
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
    PendingOperator = "";
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
// Phep tinh
function Operation (Op) {
    var Readout = FKey.ReadOut.value;
    if (FlagNewNum==false || PendingOperator == "=");
    {
        FlagNewNum = true;
        if ( '+' == PendingOperator )
            Cal += parseFloat(Readout);
        else if ( '-' == PendingOperator )
            Cal -= parseFloat(Readout);
        else if ( '/' == PendingOperator )
            Cal /= parseFloat(Readout);
        else if ( '*' == PendingOperator )
            Cal *= parseFloat(Readout);
        else
            Cal = parseFloat(Readout);

        FKey.ReadOut.value = Cal;
        PendingOperator = Op;
    }
}