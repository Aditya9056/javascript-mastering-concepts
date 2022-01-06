function jsfunction()
{
    var s,c=20;
    s  = 10;c=(s>2)?"WHOA":"BYE";
    document.getElementById("content").innerHTML="Equality:-"+(s==20);
    document.getElementById("content").innerHTML= "BIGGER  THAN :-"+(s>=200);
    document.getElementById("content").innerHTML= "REVERSE RESULT:-"+(!(s>=200));
    document.getElementById("content").innerHTML="HELLO"+c;  
}


function changestyle()
{
    var element = document.getElementById("content");
element.style.fontsize ="1px";
element.style.color = "blue"; 

}