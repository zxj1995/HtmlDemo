function myfun(A, B) {
    alert("结果为" + A * B);
}


function myfun1() {
    alert("我被调用了");
}

function ajaxload() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

var strtemp = "123"
function demodataType() {

    var x = 1;        //number类型
    var x = 0.1;     //number类型，JS不区分整数值和浮点数值

    var x = "hello world"; //由双引号内文本构成字符串
    var x = 'javascript';   //单引号内文本同样可以构成字符串

    var x = true;    //true和false作为布尔值

    var x = null;
    var x = undefined;  //null和undefined很相似，是特殊的类型
    var x = null;
    var x = undefined;

    if (typeof (x) == "boolean") 
    {
        alert("hahah");
    }
    else{

        alert("heheh");
    }
}
function arrtestfun()
{
    var strtemp;
var x=['a','b','c','d'];
var y=['a','b','c','d'];
var z=x.toString();
strtemp+=z;
strtemp+='<hr>';
strtemp+=x.reverse()
}