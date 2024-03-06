import { Box, Card, Grid, GridItem, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gamesCard } from '../utils/constants'

const Games = () => {
  const cardBg = useColorModeValue('gray.200', 'gray.900')
  const cardBorderBg = useColorModeValue('cyan.400', 'cyan.800')
  return (
    <>
      <Box w={'full'} h={'15vh'} bg={useColorModeValue('cyan.300', 'gray.700')} rounded={'md'} shadow={'md'} mb={5} fontSize={'40px'} textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}>GAMES</Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={5}>
        <Grid gridTemplateColumns={{
          base: '1fr',
          md: '1fr 1fr',
          xl: '1fr 1fr 1fr',
        }} gap={6} mb={4}>
        {
          gamesCard.map((item) => (
            <GridItem key={item.id}>
              <Link to={item.path}>
                <Card w={270} h={'30vh'} p={6} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={4} border={'1px'} borderColor={cardBorderBg} rounded={'md'} shadow={'md'} bg={cardBg} _hover={{bg: useColorModeValue('cyan.400', 'gray.700')}}>
                <Icon fontSize={'80px'} alignItems={'center'} as={item.icon}/>
                <Text textAlign={'center'} fontSize={'24px'}>{item.title}</Text>
                </Card>
              </Link>
            </GridItem>
          ))
        }
        </Grid>
      </Box>
    </>
  )
}

export default Games