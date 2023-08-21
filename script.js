
$(document).ready(onReady);
let monthlySalaries = [];



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
       let salary = parseFloat ($('#salaryInput').val());

       let monthlySalary = salary /12;
        monthlySalaries.push(monthlySalary);


        let newRow=`<tr><td>${firstName}</td> <td>${lastName}</td><td>${id}</td><td>${title}</td><td>${salary}</td><td><button class="delete-button">Delete</button></td></tr>`;


        calculateAndAppendTotalMonthlyCost();

        // $('#employeeTableBody').append(newRow)
       $('#firstNameInput').val('');
        $('#lastNameInput').val('');
       $('#idInput').val('');
        $('#titleInput').val('');
        $('#salaryInput').val('')
        
        $('#employeeTableBody').append(newRow);
    
}

function deleteEmployee() {
    $(this).closest('tr').remove();
    calculateAndAppendTotalMonthlyCost();
}

function calculateAndAppendTotalMonthlyCost() {
    let totalCost = monthlySalaries.reduce((acc, val) => acc + val, 0);
    let totalMonthlyCostElement = $('#totalMonthlyCostValue'); // Cache the element for better performance
    
    totalMonthlyCostElement.text(totalCost.toFixed(2));
    
    if (totalCost > 20000) {
        totalMonthlyCostElement.addClass('high-cost'); // Add red background class
    } else {
        totalMonthlyCostElement.removeClass('high-cost'); // Remove red background class
    }
    
}

