// document.addEventListener("DOMContentLoaded", () => {
//     const burger = document.getElementById('burger');
//     const sidebar = document.getElementById('sidebar');

//     burger.addEventListener('click', () => {
//         sidebar.classList.toggle('open');
//         burger.classList.toggle('open');
//     });
// })

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');

    burger.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        burger.classList.toggle('open');
    }
})
