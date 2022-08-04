function start() {
  var buttonCalculateImc = document.querySelector('#button-claculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc (weight, height) {
    return weight / (height * height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result')

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    imcResult.textContent = imc;
}

start()