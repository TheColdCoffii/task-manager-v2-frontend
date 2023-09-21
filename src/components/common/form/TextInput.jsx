export function TextInput({ type = 'text', label, id, name, value, onChange, onBlur }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        onBlur={() => onBlur}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={() => onChange()}
      />
    </div>
  );
}
