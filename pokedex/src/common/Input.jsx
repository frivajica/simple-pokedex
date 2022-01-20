import styled from "styled-components";
const Container = styled.input`
	padding: 0 1rem;
	font-size: 1rem;
  height: 2.5rem;
	border: #a5afbe solid 1px ;
	border-radius: 5px
`

export const Input = ({ id, className, name, value, placeholder}) => {

	return (
    <Container 
			id={id} 
			classname={className} 
			name={name}
			value={value}
			placeholder={placeholder}
		/>
  );
};