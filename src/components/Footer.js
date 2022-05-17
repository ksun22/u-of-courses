import {
    Box,
    Container,
    IconButton,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';

  import {FaGithub} from 'react-icons/fa'
  
  export default function Footer() {
    return (
      <Container as="footer" 
      role="contentinfo" 
      py={{ base: '12', md: '16' }}>
      <Box
        bg={useColorModeValue('pink.50', 'pink.900')}
        color={useColorModeValue('pink.700', 'pink.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={20}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>
            <IconButton
            as="a"
            href="#"
            aria-label="Github"
            icon={<FaGithub fontSize="1.25rem" />}>Github</IconButton>
          </Stack>
          <Text>© 2022 UofCourses. All rights reserved</Text>
        </Container>
      </Box>
      </Container>
    );
  }