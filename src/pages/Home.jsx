import { Box, Button, Card, Grid, GridItem, Image, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SkeletonCard from '../components/SkeletonCard'
import { fetchedCountry, fetchingCountry } from '../store/state/state.slice'

const Home = () => {
  const { countrys, isLoading } = useSelector(selector => selector.state)
  const cardBg = useColorModeValue('gray.200', 'gray.900')
  const cardBorderBg = useColorModeValue('cyan.400', 'cyan.800')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchingCountry())
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => {
      dispatch(fetchedCountry(res.data))
    })
  }, [])
  return (
    <>
      <Grid gridTemplateColumns={{
        base: '1fr',
        sm: '1fr 1fr',
        lg: '1fr 1fr 1fr',
      }} gap={6} my={2}  zIndex={'11'}>
        {
          isLoading ? Array.from(Array(10).keys())?.map(item => <SkeletonCard key={item}/>) : null
        }
        {
          countrys.map((item) => (
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
    </>
  )
}

export default Home