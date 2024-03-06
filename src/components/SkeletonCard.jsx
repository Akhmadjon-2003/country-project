import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'

const SkeletonCard = () => {
  return (
    <Box pos={'relative'} h={'240px'}>
      <Skeleton rounded={'lg'} w={'full'} h={'full'} pos={'absolute'}/>
      <Skeleton pos={'absolute'} rounded={'lg'} h={'60px'} bottom={0} right={0} left={0}/>
    </Box>
  )
}

export default SkeletonCard