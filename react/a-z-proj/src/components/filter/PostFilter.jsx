import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.search}
        style={{ marginTop: 15 }}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        placeholder="Search..."
      />
      <hr style={{ marginTop: 15 }} />
      <MySelect
        defaultValue="Sorting"
        name="sorting"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: 'title', name: 'Sort by Name' },
          { value: 'body', name: 'Sort by Description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
