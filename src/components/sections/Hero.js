import React from 'react';
import {
    Box,
    Input,
    InputGroup,
    InputLeftElement
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';

export default function Hero(){
return (
    <>
<Box p={4}>
<InputGroup>
<InputLeftElement
children={<SearchIcon color='pink.500'
pointerEvents='none'
/>}
/>
<Input type='tel'
color='pink.500' 
placeholder='Search courses or instructors...' />
</InputGroup>
</Box>
</>
)
}