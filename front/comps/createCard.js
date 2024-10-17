export function createCard() {
    const createForm = document.querySelector('.create-tab form');
    
    createForm.onsubmit = (event) => {
        event.preventDefault();

        const title = document.querySelector('.create-tab input[type="text"]').value.trim();
        const description = document.querySelector('.create-tab textarea').value.trim();
        const dueDate = document.querySelector('.create-tab input[type="date"]').value;
        const priority = document.querySelector('.create-tab select').value;

        const errorMessage = document.querySelector('.error-message');
        if (!title || !description || !dueDate || !priority) {
            errorMessage.style.display = 'block';
            return;
        }
        errorMessage.style.display = 'none'; 

        const newTodo = {
            title,
            description,
            dueDate,
            priority,
            completed: false 
        };

        axios.post('http://localhost:5000/todos', newTodo, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            window.onload();
            createForm.reset(); 
        })
        .catch(error => {
            console.error('Error creating todo:', error);
        });
    };
}
