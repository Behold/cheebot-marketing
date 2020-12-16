const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

const basicScroll = require('basicscroll')
import * as basicScroll from 'basicscroll'

const instance = basicScroll.create({
	elem: document.querySelector('.element'),
	from: 'top-bottom',
	to: 'middle-middle',
	props: {
		'--opacity': {
			from: .01,
			to: .99
		}
	}
})

instance.start()