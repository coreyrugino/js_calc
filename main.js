var historynum1 = [];
var historynum2 = [];
var historysymbol = [];
var historysum = [];
var equations = [];


function stop(){
  debugger;
}

function lastAnswer(){
  var element = document.getElementById('output');
  if (element.innerHTML == ''){
    return 0;
  }else{
    return parseFloat(element.innerHTML);
  }
}

function getInputs(){

  var inputOne = parseInt(document.getElementById('input_1').value);
  var inputTwo = parseInt(document.getElementById('input_2').value);
  historynum1.push(inputOne);
  historynum2.push(inputTwo);
  return [inputOne, inputTwo];
}

function setOutput(sum){
  var lastOutput = lastAnswer();
  document.getElementById('output').innerHTML = sum;
  document.getElementById('last_answer').innerHTML = lastOutput;
}

function add(){
  var inputs = getInputs();
  var sum = inputs[0] + inputs[1];
  setOutput(sum);
  historysymbol.push('+');
  historysum.push(sum);

}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  setOutput(sum);
  historysymbol.push('-');
  historysum.push(sum);
}

function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  setOutput(sum);
  historysymbol.push('/');
  historysum.push(sum);
}

function multiply(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  setOutput(sum);
  historysymbol.push('*');
  historysum.push(sum);
}

function priorEquations(){
  var eq = '';
  for (var i = 0; i < historynum1.length; i++){
    eq = "".concat(historynum1[i], historysymbol[i], historynum2[i], '=', historysum[i]);
    equations.push(eq);
  }
  document.getElementById('historyoutput').innerHTML = equations;

}
