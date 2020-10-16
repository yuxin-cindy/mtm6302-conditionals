const $buttonContainer = document.getElementById('button-container')
const $equals = document.getElementById('equals')
const $formula = document.getElementById('formula')
const $answer = document.getElementById('answer')

//Fuctions 

function insertFormula(event){
   $formula.textContent += event.target.textContent
}

function equals(){
    

   
    // declare variables
    let leftOperand = ''
    let rightOperand = ''
    let operation = ''
    let operationSet = false

    //parse the formula
    for (let character of $formula.textContent){

        if (operationSet === false){
            if (character === '+' || character ==='-'||character ==='*'||character ==='/'){
                operation = character
                operationSet = true 
                continue
            }
        }

        if (operationSet === false){
            leftOperand += character
        }

        if (operationSet === true ){
            rightOperand += character
        }
    }

    console.log(`leftOperand is: ${leftOperand}`)
    console.log(`operation is :${operation}`)
    console.log(`leftOperand is: ${rightOperand}`)

    // calculate the result
    let answer = 0 

    if(operation ==='+'){
        answer = parseInt(leftOperand) + parseInt(rightOperand)        
    }
    else if (operation ==='-'){
        answer = parseInt(leftOperand) - parseInt(rightOperand)       
    }
    else if (operation ==='*'){
        answer = parseInt(leftOperand) * parseInt(rightOperand)       
    }
    else if (operation ==='/'){
        answer = parseInt(leftOperand) / parseInt(rightOperand)       
    }

    $answer.textContent = answer
    $formula.textContent = ''
}


// Event Listeners
$buttonContainer.addEventListener('click',insertFormula)
$equals.addEventListener('click',equals)