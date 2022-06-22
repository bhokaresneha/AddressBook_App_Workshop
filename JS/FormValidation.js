window.addEventListener('DOMContentLoaded', (event) => {
    validName();
    validAddress();
    validPhoneNumber();
});


function validName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }else{
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name.value)) {
            textError.textContent = "";
        } else {
            textError.textContent = "Name is incorrect";
        }
    }
    });

}
function validAddress() {
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }else{
        const addressRegex = RegExp('^([A-Za-z0-9]{3,}.)+$');
        if (addressRegex.test(address.value)) {
            addressError.textContent = "";
        } else {
            addressError.textContent = "Address is incorrect";
        }
    }
    });
}
function validPhoneNumber() {
    const phoneNumber = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneNumber.addEventListener('input', function() {
        if (phoneNumber.value.length == 0) {
            phoneError.textContent = "";
            return;
        }else{
        const phoneRegex = RegExp('^[+][1-9]{2}\\s{0,1}[0-9]{10}$');
        if (phoneRegex.test(phoneNumber.value)) {
            phoneError.textContent = "";
        } else {
            phoneError.textContent = "Phone number is incorrect";
        }
    }
    });
}

//save method
const save = (event) => {
    alert("Save button");
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    alert(JSON.stringify(formJSON));

}

//reset method
const resetForm = () => {
    alert("Reset button");
}


   
    //     const data = new FormData(event.target);
    //     const formJSON = Object.fromEntries(data.entries());
      
    //     // for multi-selects, we need special handling
    //  //   formJSON.snacks = data.getAll('');
        
    //     const results = document.querySelector('.results pre ');
    // //     results.innerText = JSON.stringify(formJSON, null, 2);
    // //   }