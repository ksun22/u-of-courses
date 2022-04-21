import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['About', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    px={5}
    py={5}
    rounded={'md'}
    _hover={{
      textDecoration: 'underline',
      bg: useColorModeValue('pink.500'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('pink.100')} px={10}>
        <Flex alignItems={'center'} 
        justifyContent={'space-between'}>
          <Flex>
            <NavLink>
            <Image 
              boxSize='50px'
              src='https://cdn.shopify.com/s/files/1/0254/7518/6748/collections/Chicago_960x.png?v=1565993626' 
              alt='logo' />
            </NavLink>
          
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <Heading
                 fontSize='40px'
                  color={'pink.800'}>
                    UofCourses
                    </Heading>
            </Box>
            <HStack
              as={'nav'}
              align='center'
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          </Flex>
          <HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}