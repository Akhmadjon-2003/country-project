import { Box, Card, Grid, GridItem, Image, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import SkeletonCard from '../components/SkeletonCard'
import { fetchedContinentsCountry, fetchingCountry } from '../store/state/state.slice'

const RegionCategory = () => {
  const { continentsCountry, isLoading } = useSelector(selector => selector.state)
  const location = useLocation()
  const dispatch = useDispatch()
  const cardBg = useColorModeValue('gray.200', 'gray.900')
  const cardBorderBg = useColorModeValue('cyan.400', 'cyan.800')
  useEffect(() => {
    dispatch(fetchingCountry())
    axios.get(`https://restcountries.com/v3.1/region/${location.pathname}`)
    .then((res) => {
      dispatch(fetchedContinentsCountry(res.data))
    })
  } , [location.pathname])
  return (
    <Box>
      <Box w={'full'} h={'15vh'} bg={useColorModeValue('cyan.300', 'gray.700')} rounded={'md'} shadow={'md'} mb={5} fontSize={'40px'} textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}>{continentsCountry[0]?.region}</Box>
      <Grid gridTemplateColumns={{
        base: '1fr',
        sm: '1fr 1fr',
        lg: '1fr 1fr 1fr',
      }} gap={6} my={2}  zIndex={'11'}>
        {
          isLoading ? Array.from(Array(10).keys())?.map(item => <SkeletonCard key={item}/>) : null
        }
        {
          continentsCountry.map((item) => (
            <GridItem key={item.area}>
              <Link to={`/${item.name.common}`}>
                <Card border={'1px'} borderColor={cardBorderBg} rounded={'md'} shadow={'md'} bg={cardBg}>
                  <Image rounded={'md'} h={'180px'} src={item.flags.png}/>
                  <Text textAlign={'center'} m={4} variant={'outline'} colorScheme='teal' fontSize={'16px'}>{item.name.common}</Text>
                </Card>
              </Link>
            </GridItem>
          ))
        }
      </Grid>
    </Box>
  )
}

export default RegionCategory