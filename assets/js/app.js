
const btnMore = document.querySelector('.btn-read-more')


btnMore.addEventListener('click', function () {
    if (btnMore.innerHTML === "Read less") {
        btnMore.innerHTML = "Read more";
    } else {
        btnMore.innerHTML = "Read less";
    }
})


