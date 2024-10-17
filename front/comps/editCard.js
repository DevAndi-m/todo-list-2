export function editCard(todoId) {
    axios.get(`http://localhost:5000/todos/${todoId}`)
        .then(response => {
            const todo = response.data;

            document.querySelector('.update-tab input[type="text"]').value = todo.title;
            document.querySelector('.update-tab textarea').value = todo.description;
            document.querySelector('.update-tab input[type="date"]').value = todo.dueDate.slice(0, 10); 
            document.querySelector('.update-tab select').value = todo.priority;
            document.querySelector('.update-tab input[type="checkbox"]').checked = todo.completed;

            document.querySelector('.create-tab').style.display = 'none';
            document.querySelector('.update-tab').style.display = 'flex';

            const updateForm = document.querySelector('.update-tab form');

            updateForm.onsubmit = (event) => {
                event.preventDefault();

                const updatedTodo = {
                    title: document.querySelector('.update-tab input[type="text"]').value,
                    description: document.querySelector('.update-tab textarea').value,
                    dueDate: document.querySelector('.update-tab input[type="date"]').value,
                    priority: document.querySelector('.update-tab select').value,
                    notes: document.querySelector('.update-tab textarea:last-of-type').value,
                    completed: document.querySelector('.update-tab input[type="checkbox"]').checked
                };

                axios.put(`http://localhost:5000/todos/${todoId}`, updatedTodo, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(() => {
                    window.onload();
                })
                .catch(error => {
                    console.error('Error updating todo:', error);
                });
            };

            const deleteButton = updateForm.querySelector('.delTodo');
            deleteButton.addEventListener('click', (event) => {
                event.preventDefault(); 
                
                if (confirm('Are you sure you want to delete this todo?')) {
                    axios.delete(`http://localhost:5000/todos/${todoId}`)
                    .then(() => {
                        window.onload(); 
                    })
                    .catch(error => {
                        console.error('Error deleting todo:', error);
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error fetching todo:', error);
        });
}
