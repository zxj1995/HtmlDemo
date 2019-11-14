function myfun(A,B)
{
alert("结果为"+A*B);
}


function myfun1()
{
alert("我被调用了");
}

function ajaxload()
{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML =
                this.responseText;
           }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send(); 
}