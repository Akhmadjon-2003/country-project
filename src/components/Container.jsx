import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children }) => {
  return (
    <Box w={{
      base: '95%',
      lg: '90%',
    }} mx={'auto'}>{children}</Box>
  )
}

export default Container