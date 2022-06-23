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
        }
    //     else{
    //     const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    //
    //     if (nameRegex.test(name.value)) {
    //         textError.textContent = "";
    //     } else {
    //         textError.textContent = "Name is incorrect";
    //     }
    // }

    try {
        (new AddressBook()).name = name.value;
         textError.textContent = "";
    } catch (e) {       
        console.error(e);
        textError.textContent = e;
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
        }
        // else{
        // const addressRegex = RegExp('^([A-Za-z0-9]{3,}.)+$');
        // if (addressRegex.test(address.value)) {
        //     addressError.textContent = "";
        // } else {
        //     addressError.textContent = "Address is incorrect";
        // }
         //}
        try {
                (new AddressBook()).address = address.value;
                addressError.textContent = "";
            } catch (e) {
                console.error(e);
                addressError.textContent = e;
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
        }
    //     else{
    //     const phoneRegex = RegExp('^[+][1-9]{2}\\s{0,1}[0-9]{10}$');
    //     if (phoneRegex.test(phoneNumber.value)) {
    //         phoneError.textContent = "";
    //     } else {
    //         phoneError.textContent = "Phone number is incorrect";
    //     }
    // }

        try {
                (new AddressBook()).phoneNumber = phoneNumber.value;
                phoneError.textContent = "";
            } catch (e) {
                console.error(e);
                phoneError.textContent = e;
            }

    });
}

//save method
const save = (event) => {
    // const data = new FormData(event.target);
    // const formJSON = Object.fromEntries(data.entries());
    // alert(JSON.stringify(formJSON));
    try{
        alert("Save Button");

        let addressBookData=createAddressBook();
        alert(addressBookData.toString());
        createAndUpdateStorage(addressBookData);
    }
    catch (e)
    {
    return;
    }

}

//creating Id automatically and storing into the Local storage
const createNewId = () => {
    let addressBookId = localStorage.getItem('addressBookID');
    addressBookId = !addressBookId ? 1 : (parseInt(addressBookId) + 1);
    localStorage.setItem('addressBookID', addressBookId);
    return addressBookId;
}

//getting all tyhe data from form and storing in addressBook object
const createAddressBook=()=>{
   let addressBook=new AddressBook();
    addressBook.id=createNewId();
    try {
        addressBook.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    addressBook.phone = getInputValueById('#phone');
    addressBook.address = getInputValueById('#address');
    addressBook.city = getInputValueById('#city');
    addressBook.state = getInputValueById('#state');
    addressBook.zipCode = getInputValueById('#zipcode');
    return addressBook;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
//Storing data locally
function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList))
}

//reset method
const resetForm = () => {
        alert("Reset Button");
       
    }


