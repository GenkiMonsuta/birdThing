$(function() {

    document.getElementById("latinName").onclick = selectLatin;

    function selectLatin(){
        document.getElementById("clueText").innerHTML = "Your clue is: <br/><p class='selectName'>Latin Name</p><br/> and your answer category is:<br/><p class='selectName'>Dutch Name</p><br/><br/>";
        document.getElementById("catButton").style.display = "none";
        document.getElementById("startLatinToDutch").style.display = "inline";


    }

    document.getElementById("dutchName").onclick = selectDutch;

    function selectDutch(){
        document.getElementById("clueText").innerHTML = "Your clue is: <br/><p class='selectName'>Dutch Name</p><br/> Your category is: <br/> <p class='selectName'>Latin Name</p><br/>";
        document.getElementById("startDutchToLatin").style.display = "inline";
        document.getElementById("catButton").style.display = "none";

    }

    document.getElementById("birdPic").onclick = selectPic;

    function selectPic(){
        document.getElementById("clueText").innerHTML = "Your clue is: <br/><p class='selectName'>Bird Picture</p><br/> Now choose your category <br/><br/>";
        document.getElementById("catButton").style.display = "inline";
    }


    document.getElementById("catLatinName").onclick = selectCatLatin;

    function selectCatLatin(){
        document.getElementById("clueText").innerHTML = "Your clue is: <br/><p class='selectName'>Bird Picture</p><br/> And your category is: <br/><p class='selectName'>Latin Name</p><br/>";
        document.getElementById("catButton").style.display = "none";
        document.getElementById("startPictureToLatin").style.display = "inline";
    }

    document.getElementById("catDutchName").onclick = selectCatDutch;

    function selectCatDutch(){
        document.getElementById("clueText").innerHTML = "Your clue is: <br/><p class='selectName'>Bird Picture</p><br/> And your category is: <br/><p class='selectName'>Dutch Name</p><br/>";
        document.getElementById("catButton").style.display = "none";
        document.getElementById("startPictureToDutch").style.display = "inline";
    }

});


