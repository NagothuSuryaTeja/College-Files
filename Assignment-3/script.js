let ComputerChoice = (Math.random());
if(ComputerChoice <0.3 && ComputerChoice >0)
    {
        ComputerChoice="Rock";
    }
else if(ComputerChoice <0.6 && ComputerChoice>0.3)
    {
        ComputerChoice="Papper"
    }
else{
    ComputerChoice="scissor"
}  
console.log(ComputerChoice);
function InputRock()//rock
{
    if(ComputerChoice=="Rock")
    {
        alert("Tie");
    }
    else if(ComputerChoice=="Papper")
    {
        alert("you Loss");
    }
    else
    {
        alert("you win")
    }
    
}
function InputPapper()//papper
{
    if(ComputerChoice=="Rock")
        {
            alert("You Win");
        }
        else if(ComputerChoice=="Papper")
        {
            alert("Tie");
        }
        else
        {
            alert("you Loss")
        }
}
function InputScissor()//Scissor
{
    if(ComputerChoice=="Rock")
        {
            alert("you loss");
        }
        else if(ComputerChoice=="Papper")
        {
            alert("you won");
        }
        else
        {
            alert("you Tie");
        }
}
