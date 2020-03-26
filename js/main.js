function Generate()
{
    var random = Math.random()*10;
    random = Math.floor(random)+1;

    if (random ==1)
    {document.querySelector(".MOTOR").style.background ="salmon";}
    else if (random == 2){document.querySelector(".MOTOR").style.background = "blue";} 
    else if (random == 3){document.querySelector(".MOTOR").style.background = "gray";} 
    else if (random == 5){document.querySelector(".MOTOR").style.background = "yellow";} 
    else if (random == 4){document.querySelector(".MOTOR").style.background = "green";} 
    else
    {document.querySelector(".MOTOR").style.background = "black";}
}
function Show()
{
    if (document.querySelector("#randomcolor").value == "Blue")
    {
        document.querySelector(".MOTOR").style.background = "blue";
    }
    else if (document.querySelector("#randomcolor").value == "Gray")
    {
        document.querySelector(".MOTOR").style.background = "gray";
    }
    else if (document.querySelector("#randomcolor").value == "Yellow")
    {
        document.querySelector(".MOTOR").style.background = "yellow";
    }
    else if  (document.querySelector("#randomcolor").value == "Black")
    {
        document.querySelector(".MOTOR").style.background = "black";
    }
      else if  (document.querySelector("#randomcolor").value == "Green")
    {
        document.querySelector(".MOTOR").style.background = "green";
    }
}
function Reset()
{
    document.querySelector(".MOTOR").style.background = "white";
}