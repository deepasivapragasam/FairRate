let next = document.getElementsByClassName("next");
let back = document.getElementsByClassName("back");
let dropBox= document.getElementsByClassName("drop-box")[0];

for(let i=0;i<next.length;i++)
{
  next[i].addEventListener("click",function(){
   this.parentNode.parentNode.parentNode.style.display="none";
    this.parentNode.parentNode.parentNode.nextElementSibling.style.display="block";
    console.log( this.parentNode.parentNode.parentNode.nextElementSibling);
  });
}
for(let j=0;j<back.length;j++)
{
    back[j].addEventListener("click",function(){
        this.parentNode.parentNode.parentNode.style.display="none";
        this.parentNode.parentNode.parentNode.previousElementSibling.style.display="block";
    }
    );
}
dropBox.addEventListener("click",function(){
  if(document.getElementsByClassName("drop-options")[0].style.display=="none")
  {
    document.getElementsByClassName("drop-options")[0].style.display="block";
  }
  else
  {
    document.getElementsByClassName("drop-options")[0].style.display="none";
  }
});

