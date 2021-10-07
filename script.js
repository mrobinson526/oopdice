document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.createElement('button');
        addButton.innerText = 'Generate Die';
        addButton.className="addButton";
    document.body.appendChild(addButton)
    var rollButton = document.createElement('button');
        rollButton.innerText="Reroll Dice";
        rollButton.className="rollButton";
    document.body.appendChild(rollButton);
    var sumButton = document.createElement('button');
        sumButton.innerText ="Sum Die";
        sumButton.className = 'sumButton';
    document.body.appendChild(sumButton);
    var Die = function() {
        this.roll = function() {
            var result = Math.floor(Math.random()*6+1);
            this.value = result;
        }
    }
    addButton.addEventListener('click', function() {
        var diceHolder = document.createElement('div');
            diceHolder.className='diceHolder';
        document.body.appendChild(diceHolder);
        var newDice = new Die()
        newDice.roll()
        diceHolder.innerText = newDice.value;
        $('div').dblclick(function() {
            this.remove();
        })
    })
    rollButton.addEventListener('click', function() {
        $('div').each(function(){
            var num = Math.floor(Math.random()*6+1);
            $(this).text(num);
        })
    });
    summButton.addEventListener('click', function() {
        var sumArray = [];
        $('div').each(function() {
            sumArray.push(parseInt($(this).text()));
        })
        var sum=0;
        for (var i=0; i<sumArray.length; i++) {
            sum += sumArray[i];
        }
        alert("The sum equals "+sum);
    });
});









