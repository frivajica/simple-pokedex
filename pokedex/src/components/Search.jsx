import { Input } from "../common/Input"

export const Search = ({ type, onSubmit, placeholder, onChange, id, className, name, value }) => {
  return (
    <>
			<Input
        type={type}
        onChange={onChange}
        onSubmit={onSubmit}
        id={id}
        classname={className}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};