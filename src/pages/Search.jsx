import { Box, Card, Divider, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CountryItemDetails from '../components/CountryItemDetails'
import { fetchedOneCountryData } from '../store/state/state.slice'

const Search = () => {
  const[countryName, setCountryName] = useState('')
  const cardBg = useColorModeValue('gray.200', 'gray.900')
  const cardBorderBg = useColorModeValue('cyan.400', 'cyan.800')
  const dispatch = useDispatch()
  const { oneCountryData } = useSelector(selector => selector.state)
  const onSubmit = (e) => {
    e.preventDefault()
    setCountryName(e.target[0].value)
  }
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => {
      dispatch(fetchedOneCountryData(res.data))
    })
  }, [countryName])
  return (
    <Box>
        <Box bgImage={useColorModeValue('https://images.photowall.com/products/64487/voguish-world-map-light-gray.jpg?h=699&q=85','https://w0.peakpx.com/wallpaper/478/634/HD-wallpaper-world-map-black-background-continents-lines-style-world-map-concepts.jpg')} h={{
        base: '20vh',
        md: '30vh',
      }} w={'full'} bgPos={'center'} bgSize={'cover'} rounded={'lg'} shadow={'md'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box as={'form'} w={{
          base: '80%',
          md: '600px'
        }} onSubmit={onSubmit}>
          <Input w={'full'} mx={2} p={6} bg={useColorModeValue('cyan.200', 'red.900')} fontSize={{
            base: '16px',
            md: '22px',
          }} type='text' placeholder='Enter your country name...'/>
        </Box>
      </Box>
      <Divider bg={useColorModeValue('cyan.400', 'cyan.800')} mt={5}/>
        { !oneCountryData[0] ? (
          <Box textAlign={'center'} mt={'80px'} fontSize={{
            base: '18px',
            lg: '32px',
          }} color={useColorModeValue('cyan.400', 'cyan.800')}>The country comes out here...</Box>
        ) : (
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={10}>
        <Link to={`/${oneCountryData[0].name.common}`}>
          <Card border={'1px'} borderColor={cardBorderBg} rounded={'md'} shadow={'md'} bg={cardBg}>
            <Image rounded={'md'} h={'250px'} src={oneCountryData[0].flags.png}/>
            <Text textAlign={'center'} m={4} variant={'outline'} colorScheme='teal' fontSize={'16px'}>{oneCountryData[0]?.name?.common}</Text>
          </Card>
        </Link>
      </Box>
        )}

    </Box>
  )
}

export default Search