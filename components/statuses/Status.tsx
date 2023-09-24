import React from 'react';
import { Button } from '@chakra-ui/react';

export interface StatusProps {
	name: string,
}

const Status = (props: StatusProps) => {
	return (
		<Button w={"100%"} p={4}>{ props.name }</Button>
	);
};

export default Status;
