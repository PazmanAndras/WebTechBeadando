document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');
    const errorMessages = document.getElementById('errorMessages');

    submitButton.addEventListener('click', function() {
        const name = document.getElementById('name');
        const location = document.getElementById('location');
        const birthdate = document.getElementById('birthdate');
        const gender = document.getElementById('gender');
        const yes = document.getElementById('yes');
        const no = document.getElementById('no');

        // Ellenőrzés és hibaüzenetek
        errorMessages.innerHTML = '';
        let errors = [];

        if (name.value === '') {
            errors.push('Név megadása kötelező');
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        }

        if (location.value === '') {
            errors.push('Lakhely megadása kötelező');
            location.classList.add('error');
        } else {
            location.classList.remove('error');
        }

        if (birthdate.value === '') {
            errors.push('Dátum megadása kötelező');
            birthdate.classList.add('error');
        } else {
            birthdate.classList.remove('error');
        }

        if (!gender.checked) {
            errors.push('Nem kiválasztása kötelező');
            gender.classList.add('error');
        } else {
            gender.classList.remove('error');
        }

        if (!yes.checked && !no.checked) {
            errors.push('Igen/Nem kiválasztása kötelező');
            yes.classList.add('error');
            no.classList.add('error');
        } else {
            yes.classList.remove('error');
            no.classList.remove('error');
        }

        // Hibák kiírása
        if (errors.length > 0) {
            for (let i = 0; i < errors.length; i++) {
                errorMessages.innerHTML += '<p>' + errors[i] + '</p>';
            }
        } else {
            // Sikeres űrlapkezelés, itt lehet további lépéseket végezni, például adatok küldése a szerverre
            alert('Űrlap elküldve!');
        }
    });
});
