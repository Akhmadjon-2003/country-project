import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Container from '../components/Container'
import { toggleSidebar } from '../store/sidebar/sidebar.slice'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  const { open } = useSelector(select => select.sidebar)
  const dispatch = useDispatch()
  const location = useLocation()
  const params = useParams()

  useEffect(() => {
    if(open) {
      dispatch(toggleSidebar())
    }
  }, [location.pathname])
  return (
    <Flex>
      <Sidebar/>
      <Box w={'full'} px={{
        base: '1',
        md: '4',
      }}>
        <Header/>
        <Outlet/>
      </Box>
    </Flex>
  )
}

export default Layout