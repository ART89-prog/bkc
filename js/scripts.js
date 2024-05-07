$(() => {


    // Ширина окна для ресайза
    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    BODY = document.getElementsByTagName('body')[0]
    OVERLAY = document.querySelector('.overlay')


         
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


    // Скрол к пунктам меню
    $(".scroll").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(id).offset().top - 0
        }, {
            duration: 400,
            easing: "swing"
        });
    });




    window.addEventListener('resize', function () {
        WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

        let windowW = window.outerWidth

        if (typeof WW !== 'undefined' && WW != windowW) {


            // Перезапись ширины окна
            WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


            // Моб. версия
            if (!fakeResize) {
                fakeResize = true
                fakeResize2 = false

                document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
            }

            if (!fakeResize2) {
                fakeResize2 = true

                if (windowW < 390) document.getElementsByTagName('meta')['viewport'].content = 'width=390, user-scalable=no'
            } else {
                fakeResize = false
                fakeResize2 = true
            }
        }
    })



})