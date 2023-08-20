
$(document).ready(onReady);

function onReady() {
    $('#submit-button').on('click', addEmployee);

    console.log('Hey jQuery!');


}
//Add A function to handle adding a new employee. 
function addEmployee(event) {
    event.preventDefault();

        let firstName = $('#firstNameInput').val();
        let lastName = $('#lastNameInput').val();
        let id = $('#idInput').val();
        let title = $('#titleInput').val();
        let salary = $('#salaryInput').val();

        let submitButton = $('#submitButton').val();

        
        let newRow=`<tr><td>${firstName}</td> <td>${lastName}</td><td>${id}</td><td>${title}</td><td>${salary}</td><td><button class="delete-button">Delete</button></td></tr>`;
        


        $('#employeeTableBody').append(newRow);
    
}