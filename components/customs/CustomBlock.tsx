import React, { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/layout';

const CustomBlock = (props: PropsWithChildren) => {
	return (
		<Box p={5} shadow='md' borderWidth='1px'>
			{ props.children }
		</Box>
	);
};

export default CustomBlock;
