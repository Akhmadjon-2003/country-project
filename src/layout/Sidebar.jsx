import { Box, Button, Flex, Heading, Stack, useColorModeValue, Icon, Text, Divider } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { sidebarMenu } from '../utils/constants'

const Sidebar = () => {
  const location = useLocation()
  const { open } = useSelector(select => select.sidebar)
  return (
    <Box minW={{
      base: '100%',
      lg: '20rem',
    }} zIndex={'130'} bg={useColorModeValue('cyan.200', 'red.900')} px={2} py={4} h={'100vh'} borderRight={'1px'} borderRightColor={useColorModeValue('cyan.400', 'cyan.800')} overflowY={'auto'} pos={{
      base: 'fixed',
      lg: 'sticky',
    }} top={0} transition={'0.3s, ease'} left={{
      base: open ? '0' : '-100%',
      lg: '0',
    }}>
      <Heading fontSize={'25px'} textAlign={{
        base: 'start',
        lg: 'center',
      }} my={4} mx={2}>CATEGORY</Heading>
      <Divider/>
      <Stack py={6} px={2}>
        {
          sidebarMenu.map((item) => (
            <Link to={item.path} key={item.id}>
              <Button w={'full'} h={10} p={6} variant={location.pathname === item.path ? 'solid' : 'outline'} colorScheme='telegram'>
                <Flex w={'full'} alignItems={'center'} gap={3} justifyContent={'start'}>
                  <Icon fontSize={'30px'} as={item.icon}/>
                  <Text fontSize={'25px'}>{item.pages}</Text>
                </Flex>
              </Button>
            </Link>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Sidebar