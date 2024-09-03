class Employee {
  constructor(name, address, empId, designation) {
    this.name = name;
    this.address = address;
    this.empId = empId;
    this.designation = designation;
  }
}
//Declare the public array
let employees = [];

//Function for add the new employee in list
function addOrUpdateEmployee() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const empId = document.getElementById("empId").value;
  const designation = document.getElementById("designation").value;

  if (name && address && empId && designation) {
    // Add new employee
    employees.push(new Employee(name, address, empId, designation));
    console.log(employees);
    showToaster();
  } else {
    alert("All fields are required.");
  }

  resetForm();
  displayEmployees();
}

//Funtion for rset the form after save the employee.
function resetForm() {
  document.getElementById("employee-form").reset();
}

//Function for Disply the employee list in the table.
function displayEmployees() {
  const tbody = document
    .getElementById("employee-table")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  employees.forEach((employee, index) => {
    const row = tbody.insertRow();
    row.setAttribute("data-index", index);

    row.insertCell(0).innerText = employee.name;
    row.insertCell(1).innerText = employee.address;
    row.insertCell(2).innerText = employee.empId;
    row.insertCell(3).innerText = employee.designation;

    const actionsCell = row.insertCell(4);
    actionsCell.innerHTML = `
            <button onclick="editEmployee(${index})">Edit</button>
            <button onclick="deleteEmployee(${index})">Delete</button>
        `;
  });
}

//Function for delete the employee
function deleteEmployee(index) {
  employees.splice(index, 1);
  displayEmployees();
}

//Funtion for edit the employee from list
function editEmployee(index) {
  const row = document.querySelector(
    `#employee-table tbody tr[data-index="${index}"]`
  );
  const cells = row.querySelectorAll("td");

  cells[0].setAttribute("contenteditable", "true");
  cells[1].setAttribute("contenteditable", "true");
  cells[2].setAttribute("contenteditable", "true");
  cells[3].setAttribute("contenteditable", "true");
  cells[4].innerHTML = `<button type="submit" onclick="saveEdit(${index})">Save</button> <button onclick="cancelEdit(${index})">Cancel</button>`;
}

// Funtion for the save the data after edit.
function saveEdit(index) {
  const row = document.querySelector(
    `#employee-table tbody tr[data-index="${index}"]`
  );
  const cells = row.querySelectorAll("td");

  const name = cells[0].innerText.trim();
  const address = cells[1].innerText.trim();
  const empId = cells[2].innerText.trim();
  const designation = cells[3].innerText.trim();

  if (name && address && empId && designation) {
    employees[index] = new Employee(name, address, empId, designation);
    displayEmployees();
    showToaster();
  } else {
    alert("All fields are required.");
  }
}

// Funtion for cancle the edit employee.
function cancelEdit(index) {
  displayEmployees();
}

//Funtion is for show thw save toaster
function showToaster() {
  const toaster = document.getElementById("toaster");
  toaster.classList.add("show");
  setTimeout(() => {
    toaster.classList.remove("show");
  }, 3000);
}

// Initial display of employees
displayEmployees();
