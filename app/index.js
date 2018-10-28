'use strict';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/style.scss';

// randomly using ES7 object rest spread because it currently raises
// an error in all browsers, but can be transpiled by Babel
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
const n = { x, y, ...z };
// if (Object.keys(n).map((key) => n[key]).reduce((p,v) => p + v) === 10) {
//   document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1>works.</h1>');
// }

const debounce = (func, timer) => {
    let timeout = 0;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), timer);
    }
}

const inputVol = document.getElementById('vol');
inputVol.addEventListener('keyup', debounce(function(event) {
    const num = document.getElementById('vol').value;
    const decimalPart = (num.split('.').length > 1) ? `.${num.split('.')[1]}` : 0;
    const base4List = convert2baseN({ input: parseFloat(decimalPart), base: 4, precision: 6 });

    const base4Marks = list => list.map((x, i) => (((i + 1) % 2) == 0) ? evenMarks[x] : oddMarks[x]);
    const teluguDescriptors = list => list.map((x, i) => fraclookup[i][x-1]).filter(x => x !== undefined);
    document.getElementById('base4').innerHTML = `${Math.floor(num)}${base4Marks(base4List).join('')}`;
    document.getElementById('telugu').innerHTML = `${Math.floor(num)} ${teluguDescriptors(base4List).join(', ')}`;
    console.log('------------------------------------');
    console.log(base4Marks(base4List));
    console.log(teluguDescriptors(base4List));
    console.log('------------------------------------');

}, 500));

const fraclookup = [
    ['కాలు', 'అర', 'ముక్కాలు'],
    ['వీసము', 'పరక', 'మువ్వీసము'],
    ['కాని', 'అరవీసము', 'ముక్కాని'],
    ['ప్రియ', 'అరకాని', 'ముప్ప్రియ'],
    ['సుర', 'రెండు సురలు', 'మూడు సురలు'],
    ['గోకరకాని', 'రెండు గోకరకానులు', 'మూడు గోకరకానులు']
];

const oddMarks = ["౸", "౹", "౺", "౻"];
const evenMarks = ["౦", "౼", "౽", "౾"];

const convert2baseN = ({ input, base, precision, accuracy }) => {

    const convertInternal = ({ input, iterationCount, accumulator }) => {
        if ((iterationCount < precision) && (input != 0.0)) {
            const nextStep = input * base;
            const integerPart = Math.floor(nextStep);
            const decimalPart = nextStep - Math.floor(nextStep);
            iterationCount = iterationCount + 1;
            accumulator.push(integerPart);
            return convertInternal({ input: decimalPart, iterationCount, accumulator });
        } else {
            return accumulator;
        }
    };

    return convertInternal({ input, iterationCount: 0, accumulator: [] });
}

