import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	& > h1 {
		text-align: center;
		color: red;
	}
`;

const NavBar = styled.div`
	display: flex;
	align-items: center;
	height: 60px;
	box-shadow: 0px 2px 1px 0px #ddd;
`;

//Used to share styles using ${buttonStyles}
// const buttonStyles = css``;

const ButtonWrapper = styled.div`
	padding: 20px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 1rem;
	color: black;
	background: white;
	border-radius: 10px;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: red;
		color: white;
	}
`;

//Using props
const ButtonProps = styled.button`
	padding: 10px;
	font-size: 1rem;
	color: ${(props) => (props.isRed ? 'white' : 'black')};
	background: ${(props) => (props.isRed ? 'red' : 'white')};
	border-radius: 10px;
`;

class App extends Component {
	render() {
		return (
			<Wrapper>
				<NavBar>Logo</NavBar>
				<h1>hello</h1>
				<ButtonWrapper>
					<Button>Test</Button>
				</ButtonWrapper>
				<ButtonWrapper>
					<ButtonProps>Test</ButtonProps>
					<ButtonProps isRed>Red test</ButtonProps>
				</ButtonWrapper>
			</Wrapper>
		);
	}
}

export default App;
