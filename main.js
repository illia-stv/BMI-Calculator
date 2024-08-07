import './style.css'

const calculateButton = document.querySelector( '#calculate' );
const resetButton = document.querySelector( '#reset' );

calculateButton.addEventListener( 'click', calculateBMI );
resetButton.addEventListener( 'click', resetForm );

function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if ((height === '' || isNaN(height)) || parseInt(height) < 0) {
        alert('Please enter a valid height.');
        return;
    }

     if ((height === '' || isNaN(height)) || parseInt(weight) < 0) {
        alert('Please enter a valid weight.');
        return;
    }

    const normalizedHeight = height/100;
    const bmi = weight/(normalizedHeight**2);
    const finalResult = Math.round(bmi * 100) / 100

    const answer = document.querySelector('#answer');

    const heading = document.createElement( 'h3' );
    heading.innerText = `Your BMI is ${ finalResult }`;

    answer.append( heading );
}

function resetForm() {
    document.getElementById('gender').value = 'male';
    document.getElementById('age').value = 25;
    document.getElementById('age-value').textContent = 25;
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.querySelector('#answer h3').remove();
}