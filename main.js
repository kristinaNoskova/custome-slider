window.addEventListener('DOMContentLoaded', () => {
    // Слайдер
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slider-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsWrap = document.querySelector('.slider-dots');
    const dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
        // провекра для работы слайера-карусели. устанвливаем индекс в нужное положение
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    // переключим слайд вперед, меняя индекс в глобальной переменной
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    // определим текущий слайд
    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    // перемещаясь назад отнимаем единицу
    prev.addEventListener('click', () => plusSlides(-1));

    // прибавляем единицу
    next.addEventListener('click', () => plusSlides(1));

    // пагинация, делегирование
    dotsWrap.addEventListener('click', (evt) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (evt.target.classList.contains('dot') && evt.target == dots[i - 1]) {
                currentSlide(i)
            }
        }
    })

});

