let addressBookList
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    //document.querySelector(".emp-count").textContent = addresBookList.length;
    createInnerHtml();
    // city();
    // state();
    localStorage.removeItem('editBook');

});
getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?
        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}


const createInnerHtml = () => {
    if (addressBookList.length == 0) return;
    const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
        "<th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    for (const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
            <tr>
               
                <td>${addressBookData._name}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zipCode}</td >
                <td>${addressBookData._phoneNumber}</td>
                <td>
                    <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="/Assets/icons/delete-black-18dp.svg">
                    <img id="${addressBookData._id}" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const city = () => {

    let ddlItems = document.getElementById("ddlitemslist");
    // itemArray = ["a", "b", "c"];
    const itemArray = addressBookList.map(addData => addData._city);

    for (let i = 0; i < itemArray.length; i++) {
        let opt = itemArray[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ddlItems.appendChild(el);
    }
}

const state = () => {
    let ddlItems = document.getElementById("state");
    // itemArray = ["a", "b", "c"];
    const itemArray = addressBookList.map(addData => addData._state);

    for (let i = 0; i < itemArray.length; i++) {
        let opt = itemArray[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ddlItems.appendChild(el);
    }
}


const cityInnerHtml = () => {
    if (addressBookList.length == 0) return;
    const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
        "<th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    var data = document.getElementById("ddlitemslist");
    var subdata = data.options[data.selectedIndex].value;
    for (const addressBookData of addressBookList) {
        if (addressBookData._city==subdata) 
        {
            innerHtml = `${innerHtml}
            <tr>
               
                <td>${addressBookData._name}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zipCode}</td >
                <td>${addressBookData._phoneNumber}</td>
                <td>
                    <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="/Assets/icons/delete-black-18dp.svg">
                    <img id="${addressBookData._id}" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                </td>
            </tr>
            `;
        }

    }
        document.querySelector('#display').innerHTML = innerHtml;
    }

    const stateInnerHtml = () => {
        if (addressBookList.length == 0) return;
        const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
            "<th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>";
        let innerHtml = `${headerHtml}`;
        var data = document.getElementById("state");
        var subdata = data.options[data.selectedIndex].value;
        for (const addressBookData of addressBookList) {
            if (addressBookData._state==subdata) 
            {
                innerHtml = `${innerHtml}
                <tr>
                   
                    <td>${addressBookData._name}</td>
                    <td>${addressBookData._address}</td>
                    <td>${addressBookData._city}</td>
                    <td>${addressBookData._state}</td>
                    <td>${addressBookData._zipCode}</td >
                    <td>${addressBookData._phoneNumber}</td>
                    <td>
                        <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="/Assets/icons/delete-black-18dp.svg">
                        <img id="${addressBookData._id}" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
                `;
            }
    
        }
            document.querySelector('#display').innerHTML = innerHtml;
        }
    



const remove = (node) => {
    let addressBookData = addressBookList.find(bookData => bookData._id == node.id);

    console.log(addressBookData)
    if (!addressBookData) return;
    const index = addressBookList
        .map(addData => addData._id)
        .indexOf(addressBookData.id);
    console.log(addressBookList);
    addressBookList.splice(index, 1);
    localStorage.setItem('AddressBookList', JSON.stringify(addressBookList));
    createInnerHtml();
}

const update = (node) => {
    let addressBookData = addressBookList.find(bookData => bookData._id == node.id);
    if (!addressBookData) {
        return;
    }
    localStorage.setItem('editBook', JSON.stringify(addressBookData));
    window.location.replace(site_properties.add_address_book_page);

}