/*
	this - context in file "interview"
	react-window
	useThrottle
	useObserver
*/
function throttle(fn, delay) {
	let isThrottled = false;
	let savedArgs;
	let savedThis;

	function wrapper() {
		if (isThrottled) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		fn.apply(this, arguments);

		isThrottled = true;

		setTimeout(() => {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedArgs = null;
			}
		}, delay);
	}

	return wrapper;
}

// throttle();

function debounce(fn, delay) {
	return function () {
		console.log(this);
		const fnCall = () => {
			return console.log(this, 'this');
			// fn.apply(this, )
		};
	};
}
debounce()();
