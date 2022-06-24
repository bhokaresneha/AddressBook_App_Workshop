let addressBookList
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList =   getAddressBookDataFromStorage();
    //document.querySelector(".emp-count").textContent = addresBookList.length;
    createInnerHtml();
});
getAddressBookDataFromStorage= () => {
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
                    <img id="1" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}


const remove = (node) => {
    let addressBookData = addressBookList.find(bookData => bookData._id == node.id);

    console.log(addressBookData)
   if(!addressBookData) return;
    const index = addressBookList 
                    .map(addData => addData.id)
                    .indexOf(addressBookData.id);
                    addressBookList.splice(index, 1);
    localStorage.setItem('AddressBookList', JSON.stringify(addressBookList));
    createInnerHtml();
}