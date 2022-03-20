// varible
let inputStatus = 'm';
let outputSatus = 'm';

// function
function printing() {
    // 변수
    let inputBoxValue = document.getElementById('inPut').value;
    let outputBoxValue = document.getElementById('outPut');// output box 화면에서 2번쨰 결과물 나오는 box
    const inputBoxOptions = document.getElementById('inputSelect');// inputbox option m,inch,yard,feet
    const outputBoxOptions = document.getElementById('outputSelect');// outputbox option m,inch,yard,feet
    
    console.log('success');
    // switch
    switch (inputBoxOptions.value) {
        case 'm':
            console.log('success');
            switch (outputBoxOptions.value) {
                case 'm':
                    console.log('success');
                    //document.getElementById('outPut').value = inputBoxValue;
                    outputBoxValue.value = inputBoxValue;
                    break;
                case 'inch':
                    outputBoxValue.value = (inputBoxValue * 39.3701);
                    break;
                case 'yard':
                    outputBoxValue.value = (inputBoxValue * 1.09361);
                    break;
                case 'feet':
                    outputBoxValue.value = (inputBoxValue * 3.28084);
                    break;
            }
            break;

        case 'inch':
            switch (outputBoxOptions.value) {
                case 'm':
                    outputBoxValue.value = (inputBoxValue * 0.0254);
                    break;
                case 'inch':
                    outputBoxValue.value = inputBoxValue;
                    break;
                case 'yard':
                    outputBoxValue.value = (inputBoxValue * 0.0277778);
                    break;
                case 'feet':
                    outputBoxValue.value = (inputBoxValue * 0.0833333);
                    break;
            }
            break;

        case 'yard':
            switch (outputBoxOptions.value) {
                case 'm':
                    outputBoxValue.value = (inputBoxValue * 0.9144);
                    break;
                case 'inch':
                    outputBoxValue.value = (inputBoxValue * 36);
                    break;
                case 'yard':
                    outputBoxValue.value = inputBoxValue;
                    break;
                case 'feet':
                    outputBoxValue.value = (inputBoxValue * 3);
                    break;
            }
            break;

        case 'feet':
            switch (outputBoxOptions.value) {
                case 'm':
                    outputBoxValue.value = (inputBoxValue * 0.3048);
                    break;
                case 'inch':
                    outputBoxValue.value = (inputBoxValue * 12);
                    break;
                case 'yard':
                    outputBoxValue.value = (inputBoxValue * 0.333333);
                    break;
                case 'feet':
                    outputBoxValue.value = inputBoxValue;
                    break;
            }
            break;
    }
}
