import styled from "styled-components";

export const GlobalStyles = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

	font-family: 'Lato', sans-serif;
	color: #4a5561;

	& h1 {
		display: flex;
		align-items: center;
		justify-content: center;
  }

	& p {
		margin: 0;
		text-decoration: none;
	 p:hover, p:focus, p:active {
     text-decoration: none;
     color: inherit;
 	}
	}
`;