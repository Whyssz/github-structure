/*
	useObserver
*/
// debounce - схлопывает вызовы
// throttle - вызывает функцию в определённый интервал

function throttle(fn, ms) {
	let isWaiting = false;
	let savedThis;
	let savedArgs;

	return function wrapper() {
		if (isWaiting) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		fn.apply(this, arguments);
		isWaiting = true;

		setTimeout(() => {
			isWaiting = false;
			
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedThis = savedArgs = null;
			}
		}, ms);
	};
}

const f = throttle(console.log, 500);
f(1);
f(2);
setTimeout(() => f(3), 1100);
setTimeout(() => f(4), 2000);

function debounce(fn, delay) {
	let timer;
	return function () {
		clearTimeout(timer);
		// timer = setTimeout(() => fn.apply(this, arguments), delay);
		timer = setTimeout(() => fn(...arguments), delay);
	};
}
