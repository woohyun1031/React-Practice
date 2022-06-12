import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Text, Grid } from './index';

type InputProps = {
	width?: string;
	name?: string;
	type?: string;
	value?: string;
	label?: string;
	placeholder?: string;
	callback?(value: ChangeEvent<HTMLInputElement>): any;
};

const Input = (props: InputProps) => {
	const { label, placeholder, callback, value, type, name, width } = props;

	return (
		<>
			<Grid width={width} padding='10px 0px'>
				{label ? '' : <Text>{label}</Text>}
				<InputBox
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={callback}
				/>
			</Grid>
		</>
	);
};

export default Input;

const InputBox = styled.input`
	border: 1px solid #212121;
	width: 100%;
	padding: 12px 4px;
	box-sizing: border-box;
`;
