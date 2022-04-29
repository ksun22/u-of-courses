import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';

export default function Hero(){
return (
    <>
    <Flex>
    <Container>
      <Stack  align='center'>
      <Heading padding="50px"
            fontWeight={700}
            fontSize='35px'
            lineHeight={'110%'}
            color={'pink.600'}
            >
            UChicago Course Evals <br />
            <Text
            paddingTop='20px'
            fontSize='75px' 
            color={'pink.700'}>
            Made Easy
            </Text>
          </Heading>
    </Stack>
      <Box p={4}>
     <InputGroup>
      <InputLeftElement
      children={<SearchIcon color='pink.500'
      pointerEvents='none'
            />}
      />
        <Input type='tel'
      color='pink.500' 
      placeholder='Search courses or instructors...'
      size='lg' />
        </InputGroup>
      </Box>
    </Container>
    </Flex> 
</>
)
}