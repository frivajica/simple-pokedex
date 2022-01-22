import styled from "styled-components";

export const Input = ({ id, className,type, name, value, onSubmit, placeholder, onChange }) => {
	return (
    <Container 
			type={type}
			onChange={onChange}
			onSubmit={onSubmit}
			id={id}
			classname={className}
			name={name}
			value={value}
			placeholder={placeholder}
		/>
  );
};

const Container = styled.input`
	padding: 0 1rem;
	font-size: 1rem;
	height: 2.5rem;
	border: #a5afbe solid 1px;
	border-radius: 5px;
`;