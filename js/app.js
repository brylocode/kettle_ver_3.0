const measurementsList = document.querySelector('.measurements-list');
const addMeasurementPanel = document.querySelector('.add-new-measurement-modal');
const summarySection = document.querySelector('.summary')
const summaryText = document.querySelector('.summary__text')

const timeInput = document.querySelector('.data__time--input');
const massInput = document.querySelector('.data__mass--input');
const startTemperatureInput = document.querySelector('.data__start-temperature--input');
const powerInput = document.querySelector('.data__power--input');

const saveBtn = document.querySelector('.control-buttons__save-btn');
const cancelBtn = document.querySelector('.control-buttons__cancel-btn');
const addMeasurementBtn = document.querySelector('.measurements-buttons__add-measurement');
// const deleteBtn = document.querySelector('.measurement__delete-btn');
const deleteAllBtn = document.querySelector('.measurements-buttons__delete-all');
const summaryBtn = document.querySelector('.measurements-buttons__summary');


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const stopwatch = document.querySelector('.timer__stopwatch');
const timeInfo = document.querySelector('.timer__time');

let countTime;
let minutes = 0;
let seconds = 0;


let measurements = [];
let ID = 1;

const showPanel = () => {
    addMeasurementPanel.classList.add('add-new-measurement-modal--active');
    clearInputs();
    summarySection.style.display = 'none';
    clearStuff();
    timeInfo.style.visibility = 'hidden';
}

const closePanel = () => {
    addMeasurementPanel.classList.remove('add-new-measurement-modal--active');
}

const checkForm = () => {
    if (parseFloat(timeInput.value) <= 0) {
        alert('Uzupełnij poprawnie czas!');
    } else if (parseFloat(massInput.value) <= 0) {
        alert('Uzupełnij poprawnie masę!');
    } else if (parseFloat(startTemperatureInput.value) < -273.15 || parseFloat(startTemperatureInput.value) > 100) {
        alert('Uzupełnij poprawnie początkową temperaturę!');
    } else if (parseFloat(powerInput.value) <= 0) {
        alert('Uzupełnij poprawnie moc czajnijka!');
    } else if (timeInput.value === '' || massInput.value === '' || startTemperatureInput.value === '' || powerInput.value === '') {
        alert('Uzupełnij wszystkie pola');
    } else {
        createNewMeasurement();
    }
}

const clearInputs = () => {
    timeInput.value = '';
    massInput.value = '';
    startTemperatureInput.value = '';
}

const createNewMeasurement = () => {
    const newMeasurement = document.createElement('div');
    newMeasurement.classList.add('measurement');
    newMeasurement.setAttribute('id', ID);

    const time = parseFloat(timeInput.value);
    const mass = parseFloat(massInput.value);
    const startTemperature = parseFloat(startTemperatureInput.value);
    const power = parseFloat(powerInput.value);
    const efficiency = Math.round(((4200 * mass * (100 - startTemperature)) / (power * time)) * 100);

    const measurement = {
        id: ID,
        time: time,
        mass: mass,
        startTemperature: startTemperature,
        power: power,
        efficiency: efficiency,
    }

    newMeasurement.innerHTML = `
        <p class="measurement__number">${ID}.</p>
        <p class="measurement__mass" >${massInput.value}</p>
        <p class="measurement__time" >${timeInput.value}</p>
        <p class="measurement__efficiency" >${efficiency}%</p> 
        <i class = "fas fa-times measurement__delete-btn" onclick="deleteMeasurement(${ID})"></i>
    `
    measurementsList.appendChild(newMeasurement);
    measurements.push(measurement);

    closePanel();
    ID++;
    clearInputs();
}

const deleteMeasurement = id => {
    const measurementToDelete = document.getElementById(id);
    const indexOfMeasurement = measurements[ID];

    measurements.splice(indexOfMeasurement, 1);
    measurementsList.removeChild(measurementToDelete);
    summarySection.style.display = 'none';
}

const deleteAllMeasurements = () => {
    measurementsList.innerHTML = '';
    measurements = [];
    ID = 1;
    console.log('dziala');
    powerInput.value = '';
    summarySection.style.display = 'none';
}

// const refreshID = () => {
//     measurements.forEach(el => {
//         el.id = measurements.indexOf(el) + 1
//     });

//     ID = measurements.length + 1;

//     const measurementsArr = [...document.querySelectorAll('.measurement')];
//     console.log(measurementsArr);

//     measurementsArr.forEach(el => el.id = measurementsArr.indexOf(el) + 1);

//     const numbersArr = [...document.querySelectorAll('.measurement__number')]
//     numbersArr.forEach(number => number.textContent = `${numbersArr.indexOf(number) + 1}.`)

//     console.log(ID);

//     deleteBtnArr = [...document.querySelectorAll('.measurement__delete-btn')]

//     deleteBtnArr.forEach(btn => btn.setAttribute('onclick', `deleteMeasurement(${numbersArr.indexOf(number) + 1})`))
// }

const summary = () => {
    summarySection.style.display = 'flex';
    const massesArr = [];
    const efficienciesArr = [];
    const powersArr = [];

    measurements.forEach(el => massesArr.push(el.mass))
    measurements.forEach(el => efficienciesArr.push(el.efficiency))
    measurements.forEach(el => powersArr.push(el.power))

    let sumMass = 0;
    for (let i = 0; i < massesArr.length; i++) {
        sumMass += massesArr[i];
    }

    let sumEff = 0
    for (let i = 0; i < efficienciesArr.length; i++) {
        sumEff += efficienciesArr[i];
    }
    const averageEff = sumEff / efficienciesArr.length;

    let sumPower = 0;
    for (let i = 0; i < powersArr.length; i++) {
        sumPower += powersArr[i];
    }
    const averagePower = sumPower / efficienciesArr.length;

    summaryText.innerHTML = `
    C z e ś ć!
    <br>
    Właśnie został zakończony Twój eksperyment badania sprawności mechanicznej twojego czajnika.
    <br> 
    Liczba wykonanych przez Ciebie pomiarów to: <strong>${efficienciesArr.length}</strong>. 
    <br>
    Średnia sprawność mechaniczna twojego czajnika elektrycznego o średniej mocy <strong>${Math.floor(averagePower)}W</strong> wynosi <strong>${averageEff.toFixed(2)}%</strong> ${averageEff < 50 ? ' :( . Niestety... Sprawność Twojego czajnika jest niska. Jeśli chcesz być ECO i mieć więcej w portfelu sprubuj gotować jak najwięcej wody za jednym razem lub wymień czajnik na nowszy' : ':) .  Huraa! Sprawność Twojego czajnika jest w pożądku, ale pamiętaj, jeśli chcesz bardziej oszczędzać swoje pieniądze to gotuj jak najwięcej wody za jednym razem'}.
    <br>
    Do twojego eksperymentu zużyłeś <strong>${sumMass.toFixed(2)}</strong> litrów wody. 
    <br>
    Pamiętaj NIE WYLEWAJ jej tylko zrób herbatę dla całej rodziny. Na zdrowie ;) !
    <br>
    Obok znajduje się wykres twoich pomiarów.
    <br>
    Nic nie stoi na przeszkodzie aby dodać jeszcze kolejny pomiar. Poprostu kliknij w przycisk "DODAJ POMIAR"
    `

    Chart.defaults.global.defaultFontColor = '#14161f';
    Chart.defaults.global.defaultFontFamily = 'Open Sans Condensed';
    Chart.defaults.global.defaultFontSize = 16;

    var ctx = document.getElementById('efficiencyChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: massesArr,
            datasets: [{
                label: 'Sprawność czajnika [%]',
                backgroundColor: '#14161f',
                borderColor: '#14161f',
                data: efficienciesArr,
                showLine: false
            }]
        },
        options: {
            responsive: true,
            layout: {
                padding: 10
            },
            legend: {
                position: 'bottom',
            },

            scales: {
                xAxes: [{
                    min: 0,
                    scaleLabel: {
                        display: true,
                        labelString: 'masa[kg]'
                    }
                }],
                yAxes: [{
                    min: 0,
                    max: 100,
                    scaleLabel: {
                        display: true,
                        labelString: 'sprawność[%]'
                    }
                }]
            }

        }
    });
    chart.update();
}

const handleStart = () => {
    clearInterval(countTime);

    countTime = setInterval(() => {

        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`;
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`;
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`;
        }
    }, 1000);
}

const handleStop = () => {
    const timeToformula = seconds + minutes * 60;
    timeInfo.innerHTML = `Czas twojego pomiaru to: ${stopwatch.textContent}`;

    if (stopwatch.textContent !== '0:00') {
        timeInfo.style.visibility = 'visible';
        timeInput.value = timeToformula;
    }
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    seconds = 0;
    minutes = 0;
}

const handleReset = () => {
    timeInfo.style.visibility = 'hidden';
    timeInput.value = '';
    clearStuff();
}



addMeasurementBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', checkForm);
deleteAllBtn.addEventListener('click', deleteAllMeasurements);
summaryBtn.addEventListener('click', () => {
    if (measurements.length !== 0) {
        summary()
    } else {
        alert('Dodaj chociaż jeden pomiar')
    }
});

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);