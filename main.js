// Select the button and the element to show
const shareButton = document.getElementById('button-share');
const shareMenu = document.getElementById('share-visible');
const shareImg = document.getElementById('share-img');

// Add click event listener
shareButton.addEventListener('click', () => {
    // Toggle visibility
    if (shareMenu.style.display === 'none' || shareMenu.style.display === '') {
        shareMenu.style.display = 'block'; // Make it visible
        shareButton.style.backgroundColor = 'var(--Desaturated_Dark_Blue)';
        shareImg.style.filter = 'brightness(10)'; // To change the svg arrow icon from dark grey to bright

    } else {
        shareMenu.style.display = 'none'; // Hide share menu again if clicked
        shareButton.style.backgroundColor = 'var(--Light_Grayish_Blue)';
        shareImg.style.filter = 'brightness(1)';
    }
});
