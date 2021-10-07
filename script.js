document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.createElement('button');
        addButton.innerText = 'Generate Die';
        addButton.className="addButton";
    document.body.appendChild(addButton)
    let rollButton = document.createElement('button');
        rollButton.innerText="Reroll Dice";
        rollButton.className="rollButton";
    document.body.appendChild(rollButton);
    let sumButton = document.createElement('button');
        sumButton.innerText ="Sum Die";
        sumButton.className = 'sumButton';
    document.body.appendChild(sumButton);

    class Dice {
        constructor () {
            this.numOfFaces = numOfFaces;
            this.sum = 0;
            this.faceUpValue = null;
        }
    roll(faceUpValue) {
        rollButton.addEventListener('click', function() {
        this.faceUpValue = Math.floor(Math.random() * this.numOfFaces + 1);
        return this.faceUpValue;
        }); 
    };
};
        addButton.addEventListener('click', function() {
            this.numOfDice = 0;
            this.newDiv = document.createElement('div');
            this.newDiv.className='dice';
            this.numOfDice++;
            this.newDiv.id=numOfDice;
            this.newDice = newDie();
            this.newDice.roll();
            this.diceHolder.innerText = newDice.faceUpValue;
        
       /*     $('div').mouseover(function() {
                newDice.roll()
                this.innerText=newDice.faceUpValue;
        });
        $('div').mouseout(function() {
            this.remove();
        })*/
    })
        
         
     
    sum(); 
    sumButton.addEventListener('click', function() {
        this.sum = this.sum + this.faceUpValue;
        let sumArray = [];
        $('div').each(function() {
        this.sumArray.push(parseInt($(this).text()));
        });
        var sum=0;
        for (var i=0; i<sumArray.length; i++) {
            sum += sumArray[i];
        };
        alert("The sum equals "+ this.sum);
    });    
});









