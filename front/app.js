import { showCards } from './comps/showCards.js';
import { editCard } from './comps/editCard.js';
import { createCard } from './comps/createCard.js';

window.onload = () => {
    showCards();

    createCard();

    const createCardButton = document.querySelector('.create-card');
    createCardButton.addEventListener('click', () => {
        document.querySelector('.create-tab').style.display = 'flex';
        document.querySelector('.update-tab').style.display = 'none';
    });

    document.querySelector('.card-holder').addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const card = e.target.closest('.card');
            const todoId = card.dataset.id;
            editCard(todoId); 
        }
    });
};
