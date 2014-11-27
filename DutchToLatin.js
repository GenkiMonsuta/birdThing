/**
 * Created by Kirste on 27/11/14.
 */
$(function() {

    var score = 0;
    var negScore = 0;
    var shuffledBirdList = shuffle(birdList);
    var currentBirdIndex = 0;

    function nextBird(){
        if(currentBirdIndex < shuffledBirdList.length){
            currentBirdIndex++;
        }
        else {
            currentBirdIndex = 1;
        }

        document.getElementById("dutchClue").innerHTML = shuffledBirdList[currentBirdIndex-1].dutch;

    }

    nextBird();

    // document.getElementById("enoughButton").onclick = nextBird;

    function shuffle( arr ) {
        var m = arr.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }

        return arr;
    }



    function checkAnswer(){

        var toCheck = $('#answer').val();


        if (shuffledBirdList[currentBirdIndex-1].latin.toLowerCase() == toCheck.toLowerCase()){
            score += 1;
            nextBird();
            $('#result').html('');
            $('#answer').val('');


        }else{
            negScore += 1;
            $('#result').html('Oops, try again!');
            $('#answer').val('');

        }
    }

    function showResult(){

        var totscore = score + negScore;
        $('#result').html('your score is: ' + score + " out of " + totscore);
        document.getElementById("goButton").style.display = "none";
        document.getElementById("dutchClue").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("backHomeButton").style.display = "inline";
        document.getElementById("exitGameButton").style.display = "inline";
    }


    document.getElementById("goButton").onclick = checkAnswer;
    document.getElementById("enoughButton").onclick = showResult;



});