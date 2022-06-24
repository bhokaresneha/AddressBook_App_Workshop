window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const HeaderHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
    "<th>Zip Code</th><th>Phone No</th><th>Actions</th></tr>";
    const innerHtml = `${HeaderHtml}
        
                <tr>
                    <td>Nikhil Bhokare</td>
                    <td>Malegaon</td>
                    <td> Baramati</td>
                    <td>Maharashtra</td>
                    <td>314102</td>
                    <td>9876543234</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="/Assets/icons/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" src="/Assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
                `;
    document.querySelector('#display').innerHTML = innerHtml;
}