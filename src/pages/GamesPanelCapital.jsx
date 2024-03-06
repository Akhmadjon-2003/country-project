import { Box, Card, Divider, Grid, GridItem, Heading, HStack, Image, Text, useColorModeValue, Icon, Badge } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchedCountryItem } from '../store/state/state.slice'
import { gamesCard } from '../utils/constants'
import Swal from 'sweetalert2'
import { FaCheckDouble } from 'react-icons/fa'
import { ImInfo } from 'react-icons/im'

const GamesPanelCapital = () => {
  const cardHoverBg = useColorModeValue('cyan.400', 'gray.700')
  const cardBg = useColorModeValue('gray.200', 'gray.900')
  const cardBorderBg = useColorModeValue('cyan.400', 'cyan.800')
  const { countrys } = useSelector(selector => selector.state)
  console.log(countrys)
  const[checked, setchecked] = useState(false)
  const[score, setScore] = useState(0)
  const[error, setError] = useState(3)
  const countryItem = []
  const randomAnswerNumber = Math.floor(Math.random()*4)
  let count = 4

  const renderAnswerCountry = () => {
    while(count > 0) {
      const randomNumber = Math.floor(Math.random()*250)
      const idCountryItem = countryItem.findIndex(x => x.name.common === countrys[randomNumber].name.common)
      if(idCountryItem === -1) {
        countryItem.push(countrys[randomNumber])
        count = count - 1
      }
    }
  }

  if(error === 0) {
    Swal.fire({
      title: 'Info!',
      text: `Your score: ${score}`,
      icon: 'info',
      confirmButtonText: 'Try Again',
    })
    setScore(0)
    setError(3)
  }

  function checkedAnswer(item){
    if(countryItem[randomAnswerNumber].name.common === item.name.common) {
      setchecked(!checked)
      countryItem.length = 0
      setScore(score + 1)
      renderAnswerCountry()
    } else {
      setError(error - 1)
    }
  }

  useEffect(() => {
    renderAnswerCountry()
  }, [checked])

  renderAnswerCountry()

  return (
    <Box p={5}>
      <HStack justifyContent={'space-between'} gap={5} pb={3}>
        <HStack>
          <Icon fontSize={{
            base: '18px',
            lg: '26px',
          }} as={FaCheckDouble}/>
          <Badge px={2} rounded={'lg'} fontSize={{
            base: '18px',
            lg: '26px',
          }}>{score}</Badge>
        </HStack>
        <HStack>
          <Icon fontSize={{
            base: '18px',
            lg: '26px',
          }} as={ImInfo}/>
          <Badge px={2} rounded={'lg'} fontSize={{
            base: '18px',
            lg: '26px',
          }}>{error}</Badge>
        </HStack>
      </HStack>
      <Heading textAlign={'center'} fontSize={{
        base: '16px',
        lg: '26px',
      }} pb={2}>Where is the capital of the state?</Heading>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} px={3} pt={1}>
        <Heading textAlign={'center'} fontSize={{
          base: '18px',
          lg: '30px'
        }}>{countryItem[randomAnswerNumber].capital}</Heading>
      </Box>
      <Divider my={3}/>
      <Grid gridTemplateColumns={{
        base: '1fr',
        md: '1fr 1fr',
      }} gap={6} px={{
        base: '1',
        lg: '100px',
      }} py={3}>
        {
          countryItem.map((item) => (
            <GridItem key={item.area}>
              <Card onClick={() => checkedAnswer(item)} fontSize={'20px'} p={2} textAlign={'center'} border={'1px'} borderColor={cardBorderBg} bg={cardBg} cursor={'pointer'} _hover={{bg: cardHoverBg}}>{item?.name?.common}</Card>
            </GridItem>
          ))
        }
      </Grid>
    </Box>
  )
}

export default GamesPanelCapital