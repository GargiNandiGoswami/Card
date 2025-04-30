document.getElementById('memberForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve input values
    const memberName = document.getElementById('memberName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const registrationDate = document.getElementById('registrationDate').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    // Create a new list item for the registered member
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Name:</strong> ${memberName}<br>
      <strong>Card No:</strong> ${cardNumber}<br>
      <strong>Date:</strong> ${registrationDate}<br>
      <strong>Phone:</strong> ${phoneNumber}
    `;
  
    // Append the new member to the members list
    document.getElementById('membersList').appendChild(listItem);
  
    // Reset the form
    document.getElementById('memberForm').reset();
  });
 