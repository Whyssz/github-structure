const MySelect = ({ options, defaultValue, sorting, changeSort }) => {
  return (
    <select
      style={{ marginTop: 12 }}
      name={sorting}
      onChange={(e) => changeSort(e.target.value)}
      defaultValue='default'
    >
      <option value="default" disabled>
        Chose a salution
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
