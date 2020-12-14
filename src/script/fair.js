var next = document.getElementById("next");
var section=document.getElementsByTagName("section");
console.log(section);
next.addEventListener("click",function(){
for(var i=0;i<section.length;i++)
{
    console.log(section[i]);
    //section[0].style.display="none";
    //section[i+1].style.display="block";
}
});