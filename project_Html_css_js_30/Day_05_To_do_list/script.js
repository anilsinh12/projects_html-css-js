// Get the necessary elements
const input = document.querySelector('.txt');
const addButton = document.querySelector('.btn');
const container = document.querySelector('.container');

// Add event listener to the Add button
addButton.addEventListener('click', function () {
  // Get the value of the input field
  const taskText = input.value;

  // Create a new list item element
  const listItem = document.createElement('div');
  listItem.className = 'task';
  listItem.innerHTML = `<span>${taskText}</span><button class="delete-btn">Delete</button>`;

  // Add event listener to the Delete button
  const deleteButton = listItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function () {
    listItem.remove();
  });

  // Append the new list item to the container
  container.appendChild(listItem);

  // Clear the input field
  input.value = '';
});
