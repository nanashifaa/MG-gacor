const movies = document.querySelector('.movie-list');

movies.addEventListener('wheel', (event) => {
    event.preventDefault();
    movies.scrollLeft += event.deltaY;
});

// Splash Screen fade out
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        splash.style.opacity = 0;
        splash.style.display = 'none';
    }, 1500);
});
