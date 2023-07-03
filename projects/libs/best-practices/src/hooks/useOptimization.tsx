/*
  first way - useDeferredValue (пониженная приоритетность действий)
  https://react.dev/reference/react/useDeferredValue
*/
export default function FirstApp() {
	const [text, setText] = React.useState('');
	const deferredText = React.useDeferredValue(text);
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			{/* 1000+ elements */}
			<SlowList
				text={deferredText}
        // animation
				classNames={text !== deferredText && 'opacity-50'}
			/>
		</>
	);
}

// memo + useCallback
const App = () => {
	const someAction = React.useCallback(() => {
		// logic
	}, []);

	return (
		<>
			<MiniApp fn={someAction} />
		</>
	);
};
const MiniApp = React.memo(({ fn }) => {
	return <button onClick={fn}>...</button>;
});
/* memo props control
  }, {
  (prevProps, nextProps) => {
    ...
  } 
  })
*/

// useMemo
const isFive = ({ value }) => {
	console.log('render check', value);
	// high calc
	const getResult = React.useMemo(() => {
		let i = 0;
		while (i < 60000000) i++;
		return value === 5 ? 'Five' : 'Not five';
	}, [value]);
};

// useCallback - https://www.youtube.com/watch?v=F8EvdTsl6hU
