// script.js

function showDetails(card) {
    const image = card.style.backgroundImage.slice(5, -2);
    const title = card.querySelector('.card-title').textContent;
    const description = card.querySelector('.card-description').textContent;

    document.getElementById('modal-image').src = image;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
