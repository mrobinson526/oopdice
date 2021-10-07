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

    
    let numberOfDice = 0;
    addButton.addEventListener('click', function() {
        this.diceHolder = document.createElement('div');
        this.diceHolder.className="diceHolder";
    document.body.appendChild(diceHolder);
        this.newDice = new Die()
        this.newDice.roll()
        this.diceHolder.innerText = newDice.faceUpValue;
        $('div').click(function() {
            newDice.roll()
            this.innerText = newDice.faceUpValue;
        })
        $('div').dblclick(function() {
            this.remove();
        })
})


    class Dice {
        constructor () {
            this.numOfFaces = numOfFaces;
            this.sum = 0;
            this.value=faceUpValue;
            }
    
        roll() {
            rollButton.addEventListener('click', function() {
                $('div').each(function() {
                this.faceUpValue = Math.floor(Math.random() * this.numOfFaces + 1);
                this.faceUpValue=value;
                $(this).Text(num);
                return this.faceUpValue;    
        });
        });
        }; 
    };

       /*  addButton.addEventListener('click', function() {
            this.Die = function() {
                let div = document.createElement('div');
                div.id="div";
            document.body.appendChild(div);
                }
            this.diceHolder = document.createElement('div');
                this.diceHolder.className="diceHolder";
            document.div.appendChild(diceHolder);
            let newDice = new Die();
            newDice.roll();
            this.diceHolder.innerText = newDice.faceUpValue;
            $('div').dblclick(function() {
                this.innerText = newDice.this.faceUpValue;
            })
            $('div').dblclick(function() {
                this.remove;
            });
    }); */
        
         
     
    this.sum() =  sumButton.addEventListener('click', function() {
            let sumArray = [];
            $('div').each(function() {
            this.sumArray.push(parseInt($(this).text()));
            });
            var sum=0;
            for (var i=0; i<sumArray.length; i++) {
                sum += sumArray[i];
            };
            alert("The total value is:  "+ this.sum);
    }); 
      
});




 




