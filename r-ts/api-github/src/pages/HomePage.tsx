import { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../API/github.api";
import { useDebounce } from "../hooks/debounce";


export const HomePage = () => {
	const [search, setSearch] = useState('');
	const [dropdown, setDropdown] = useState(false);
	const debounced = useDebounce(search);
	const { data, isLoading, isError } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3
	});

	useEffect(() => {
		setDropdown(debounced.length > 3 && data?.length! > 0);
		console.log(debounced);
	}, [debounced, data]);

	return (
		<div className="flex justify-center pt-10 mx-auto h-screen w-screen">
			{isError && <h3 className="text-center text-lg font-medium text-red-600">Somthing went wrong...</h3>}
			<div className="relative w-[560px]">
				<input
					type="search" placeholder="Search for Github username..."
					className="border outline-1 outline-cyan-500 py-2 px-4 w-full h-[42px] mb-2"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				{dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white p-1">
					{isLoading && <h3 className="text-center font-medium">Loading...</h3>}
					{data?.map(user => (
						<li key={user.id} className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>{user.login}</li>
					))}
				</ul>}
			</div>
		</div>
	);
};
