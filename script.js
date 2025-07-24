// Placeholder for interactivity
document.querySelectorAll('.mood').forEach((mood) => {
    mood.addEventListener('click', () => {
        alert(`You selected ${mood.alt} mood!`);
    });
});

document.getElementById('seeMoreBtn').addEventListener('click', () => {
    alert('Loading more movies...');
});