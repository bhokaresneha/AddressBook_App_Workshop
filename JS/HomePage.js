let addresBookList
window.addEventListener('DOMContentLoaded', (event) => {
    addresBookList =   getAddressBookDataFromStorage();
    //document.querySelector(".emp-count").textContent = addresBookList.length;
    createInnerHtml();
});
getAddressBookDataFromStorage= () => {
    return localStorage.getItem('AddressBookList') ? 
                    JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if (addresBookList.length == 0) return;
    const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
        "<th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    for (const addressBookData of addresBookList) {
        innerHtml = `${innerHtml}
            <tr>
               
                <td>${addressBookData._name}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zipCode}</td >
                <td>${addressBookData._phoneNumber}</td>
               

                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="/Assets/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
