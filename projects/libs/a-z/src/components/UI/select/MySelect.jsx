const MySelect = ({ options, name, onChange, defaultValue }) => {
  return (
    <select
      style={{ marginTop: 12 }}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      defaultValue="default"
    >
      <option value="default" disabled>
        {defaultValue}
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
