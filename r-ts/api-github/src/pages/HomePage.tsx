import { useEffect, useState } from "react";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../API/github.api";
import { RepoCard } from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";

export const HomePage = () => {
	const [search, setSearch] = useState('');
	const [dropdown, setDropdown] = useState(false);

	const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery();
	const debounced = useDebounce(search);
	const { data, isLoading, isError } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true
	});

	useEffect(() => {
		setDropdown(debounced.length > 3 && data?.length! > 0);
	}, [debounced, data]);

	const onClickHandler = (name: string) => {
		fetchRepos(name);
		setDropdown(false);
	};

	return (
		<div className="container flex justify-center pt-10 px-10 mx-auto h-full w-full">
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
						<li
							tabIndex={0}
							onClick={() => onClickHandler(user.login)}
							key={user.id}
							className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>{user.login}
						</li>
					))}
				</ul>}
				<div className="container">
					{areReposLoading && <p className="text-center">Repos are loading...</p>}
					{repos?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
				</div>
			</div>
		</div>
	);
};
//1.05