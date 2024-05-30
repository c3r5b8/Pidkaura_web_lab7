document.getElementById('task2').addEventListener('click', function () {
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    //swap innerHTML
    let temp = x.innerHTML;
    x.innerHTML = y.innerHTML;
    y.innerHTML = temp;
})


let task3 = false;
let task4 = false;

document.getElementById('task3').addEventListener('click', function () {
    let four = document.getElementById('four');
    four.innerHTML = '';
    if (task3) {
        task3 = false;
        return;
    }
    task3 = true;
    let a = document.createElement('input');
    a.type = 'number';
    a.id = 'a';
    a.placeholder = 'Enter a number a';

    let b = document.createElement('input');
    b.type = 'number';
    b.id = 'b';
    b.placeholder = 'Enter a number b';

    four.appendChild(a);
    four.appendChild(b);

    let calculate = document.createElement('button');
    calculate.innerHTML = 'Calculate';
    calculate.addEventListener('click', function () {
        let a = document.getElementById('a').value;
        let b = document.getElementById('b').value;
        a_value = parseInt(a);
        b_value = parseInt(b);
        result.innerHTML = `a: ${a_value} b: ${b_value} area: ${a_value * b_value}`;

    })
    four.appendChild(calculate);
    let result = document.createElement('p');
    four.appendChild(result);
})

document.getElementById('task4').addEventListener('click', function () {
    let four = document.getElementById('four');
    four.innerHTML = '';
    if (task4) {
        task4 = false;
        return;
    }
    task4 = true;
    for (let i = 0; i < 10; i++) {
        let input = document.createElement('input');
        input.type = 'number';
        input.id = `input${i}`;
        input.placeholder = `Enter a number ${i}`;
        input.value = Math.floor(Math.random() * 100 - 50);
        four.appendChild(input);
    }
    let calculate = document.createElement('button');
    calculate.innerHTML = 'Calculate';
    calculate.addEventListener('click', function () {
        max = parseInt(document.getElementById(`input1`).value);
        min = parseInt(document.getElementById(`input1`).value);

        for (let i = 0; i < 10; i++) {
            let value = parseInt(document.getElementById(`input${i}`).value);
            if (value > max) {
                max = value;
            }
            if (value < min) {
                min = value;
            }
        }
        result.innerHTML = `Max: ${max} Min: ${min}`;
        document.cookie = `max=${max}`;
        document.cookie = `min=${min}`;
    })
    four.appendChild(calculate);
    let result = document.createElement('p');
    four.appendChild(result);

})

window.onload = function () {
    //get max and min from cookies
    let max = document.cookie.split(';').find((item) => item.trim().startsWith('max='));
    let min = document.cookie.split(';').find((item) => item.trim().startsWith('min='));

    if (max || min) {
        let saveData = confirm("Ви хочете зберегти дані з куків? " + max + min);
        if (saveData) {
            alert("Куки збережено. Будь ласка, перезавантажте сторінку.");
        } else {
            document.cookie = "max=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            document.cookie = "min=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            location.reload();
        }
    }
}