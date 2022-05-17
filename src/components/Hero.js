import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Text
  } from '@chakra-ui/react';
  import SearchBar from './SearchBar';
  import ListData from './ListData.json'

export default function Hero(){
return (
    <>
    <Flex>
    <Container>
      <Stack  align='center'>
      <Heading padding="30px"
            fontWeight={700}
            fontSize='30px'
            lineHeight={'110%'}
            color={'pink.600'}
            >
            UChicago Course Evals <br />
            <Text
            paddingTop='20px'
            fontSize='70px' 
            color={'pink.700'}>
            Made Easy
            </Text>
            <SearchBar data={ListData}/>
          </Heading>
    </Stack>  
    </Container>
    </Flex> 
</>
)
}