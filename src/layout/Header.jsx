import { Box, Button, Flex, Heading, HStack, useColorModeValue, Icon, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FcHome } from "react-icons/fc";
import { BiMoon, BiSun } from 'react-icons/bi'
import { FaList, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/sidebar/sidebar.slice';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const dispatch = useDispatch()
  return (
    <Flex w={'full'}  zIndex={'150'} bg={useColorModeValue('cyan.200', 'red.900')} px={{
      base: 2,
      md: 4,
    }} py={3} my={3} roundedBottom={'md'} border={'1px'} borderColor={useColorModeValue('cyan.400', 'cyan.800')} justifyContent={'space-between'} alignItems={'center'} pos={'sticky'} top={0}>
      <Link to={'/'}>
        <Heading fontSize={{
        base: '24px',
        md: '32px',
      }} color={useColorModeValue('cyan.800', 'cyan.500')}>COUNTRY</Heading>
      </Link>
      <HStack>
        <Button onClick={toggleColorMode} variant={'outline'} colorScheme='teal'><Icon as={colorMode === 'light' ? BiMoon : BiSun}/></Button>
        <Button display={{
          base: 'block',
          lg: 'none',
          }} variant={'outline'} colorScheme='teal' onClick={() => dispatch(toggleSidebar())}>
            <Icon as={FaList}/>
        </Button>
      </HStack>
    </Flex>
  )
}

export default Header