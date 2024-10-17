export async function showCards() {
    try {
        const response = await axios.get('http://localhost:5000/todos');
        const todos = response.data;

        const cardHolder = document.querySelector('.card-holder');

        const cards = cardHolder.querySelectorAll('.card');

        cards.forEach(card => {
          if (!card.classList.contains('create-card')) {
            card.style.display = 'none'; 
          }
        });

        todos.forEach(todo => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.id = todo._id; 

            card.innerHTML = `
                <h2>Title: ${todo.title}</h2>
                <p class="desc-p">${todo.description}</p>
                <p class="due-dt">Due: ${new Date(todo.dueDate).toLocaleDateString()}</p>
                <p class="prio">${todo.priority} Priority</p>
                <button class="edit-btn">View details</button>
            `;
            cardHolder.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// cardHolder.innerHTML = `
//             <button class="create-card">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
//                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
//                     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
//                 </svg>
//             </button>
//         `;

