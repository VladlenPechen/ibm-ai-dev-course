const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Full Stack Development' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Talent Acquisition' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Financial Analysis' },
    { id: 4, name: 'Sarah Wilson', age: 42, department: 'Marketing', salary: 52000, specialization: 'Digital Marketing' },
    { id: 5, name: 'Mike Chen', age: 26, department: 'IT', salary: 48000, specialization: 'Cybersecurity' },
    { id: 6, name: 'Emily Davis', age: 31, department: 'HR', salary: 47000, specialization: 'Employee Relations' },
    { id: 7, name: 'David Brown', age: 39, department: 'Finance', salary: 65000, specialization: 'Budget Planning' },
    { id: 8, name: 'Lisa Garcia', age: 29, department: 'Marketing', salary: 51000, specialization: 'Content Strategy' },
    { id: 9, name: 'Tom Anderson', age: 45, department: 'IT', salary: 72000, specialization: 'System Architecture' },
    { id: 10, name: 'Jessica Taylor', age: 33, department: 'Operations', salary: 55000, specialization: 'Process Optimization' }
  ];

    // Function to display all employees
    function displayEmployees() {
        const totalEmployees = employees
            .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
            .join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
    }

    function calculateTotalSalaries() {
        const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
        alert(`Total Salaries: $${totalSalaries}`);
    }

    function displayHREmployees() {
        const hrEmployees = employees.filter(employee => employee.department === 'HR');
        const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
    }

    function findEmployeeById(employeeId) {
        const foundEmployee = employees.find(employee => employee.id === employeeId);
        if (foundEmployee) {
            document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
          }
        else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
           }
       }

    function findEmployeeBySpec(specialization) {
        const foundEmployee = employees.find(employee => employee.specialization.toLowerCase() === specialization.toLowerCase());
        if (foundEmployee) {
            document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
          }
        else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this Specialization';
           }
    }