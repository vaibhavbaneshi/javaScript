const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')

    if(height === '' || height <= 0 || isNaN(height) && (weight === '' || weight <= 0 || isNaN(weight)))
        result.innerHTML = `${height} and ${weight} are not valid values!!!`

    else if(height === '' || height <= 0 || isNaN(height))
        result.innerHTML = `${height} is not a valid height!!!`

    else if(weight === '' || weight <= 0 || isNaN(weight))
        result.innerHTML = `${weight} is not a valid weight!!!`

    else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        // result.innerHTML = bmi

        if(bmi < 18.6)
            result.innerText = `${bmi}\nUnder Weight`

        else if(bmi > 18.6 && bmi < 24.9)
            result.innerText = `${bmi}\nNormal Weight`

        else 
            result.innerText = `${bmi}\nOver Weight`
    }   
})