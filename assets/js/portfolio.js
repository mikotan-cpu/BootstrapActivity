/* portfolio titles */
$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        navigation: true,
        onLeave: (origin, destination, direction) => {
            const section = destination.item;
            const title = section.querySelector("h1");
            const tl = new TimelineMax({ delay: 0.5 });
            tl.fromTo(title, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

        },
    });

});

/*portfolio modal*/
const modal = document.querySelector('.portfolio-modal');
const imagesFluid = document.querySelectorAll('.img-fluid');
const carouselGroup = document.querySelector('.carousel-inner');
const dict = {
    'array1': ['msl_site_concept_v1a'],
    'array2': ['shrimp-fest'],
    'array3': ['msl_logo_concept_v1'],
    'array4': ['hook-up-the-video-training-wheels'],
    'array5': ['always-cover-your-assets'],
    'array6': ['redbeam_swag_misc', 'redbeam_swag_misc2', 'redbeam_swag_misc3', 'redbeam_swag_misc4'],
}

imagesFluid.forEach((imgFluid) => {
    imgFluid.addEventListener('click', () => {
        modal.classList.add('open');
        const imgArray = imgFluid.getAttribute('data-original');
        for (i = 0; i < dict[imgArray].length; i++) {
            const newDiv = document.createElement('div');
            const newImg = document.createElement('img');
            if (i === 0) {
                newDiv.classList.add('carousel-item');
                newDiv.classList.add('active');
            } else {
                newDiv.classList.add('carousel-item');
            }
            newDiv.setAttribute('data-interval', '2000');
            newImg.classList.add('mx-auto');
            newImg.classList.add('d-block');
            newImg.classList.add('w-50');
            newImg.setAttribute('src', `/assets/images/${dict[imgArray][i]}.jpg`)
            newDiv.appendChild(newImg);
            carouselGroup.appendChild(newDiv);
        }
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-modal')) {
        modal.classList.remove('open');
        carouselGroup.innerHTML = "";
    }
})