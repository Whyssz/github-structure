function component(value) {
	const clases = {
		idle: 'gray',
		loading: 'blue',
		success: 'green',
		error: 'red',
	};
	const text = {
		idle: 'Press',
		loading: 'Loading',
		success: 'Success',
		error: 'Error',
	};
	return `
		<button class=${clases[value]}>${text[value]}</button>
	`;
}
component('loading');

{
	{
		list: <ComponentList title={item.title} onAction={item.onAction} />;
		map: <ComponentMap
			key={item.key}
			className={item.cls}
			frozen={item.frozen}
			onClick={item.onClick}
		/>;
	}
	[type];
}

// https://www.youtube.com/watch?v=mQ3HSRUO0fU
a