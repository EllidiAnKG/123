new Swiper('.slider', {
	//  direction: 'vertical',
	//  freeMode: true,
	speed: 2400,
	parallax: true,
	spaceBetween: 18,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	}
})

function retSSS() {
	retssS = document.querySelector('.returnSSS')
	retssS.addEventListener('click', () => {
		new Swiper('.slider', {
			direction: 'vertical',
			freeMode: true,
			speed: 1500,
			parallax: true,
			spaceBetween: 18,
			mousewheel: {
				enabled: true,
				sensitivity: 1.0
			}
		})
	})
}
