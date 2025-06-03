const themeSwitch = document.getElementById('switcherTheme');
const body = document.body;

themeSwitch.addEventListener('change', function() {
    if (themeSwitch.checked) {
        console.log('add')
        body.classList.add('dark-theme');
    } else {
        console.log('remove')
        body.classList.remove('dark-theme');
    }
});