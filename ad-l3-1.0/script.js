alert("Welcome!")

function colorAleatorio(){

    let rm = Math.random(0);
    switch(rm){
        case 0:
            document.getElementById("h5").style.color = "green";
            break;
        case 1:
            document.getElementById("h5").style.color = "blue";
            break;
        case 2:
            document.getElementById("h5").style.color = "red";
            break;
        default:
            console.log("No numero random");
            break;
        }

}