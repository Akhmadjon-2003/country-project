import { Box, Divider, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const CountryItemDetails = ({ item }) => {
  const independentChecked = item?.independent
  const bordersChecked = item?.borders
  const landlockedChecked = item?.landlocked
  return (
    <Box key={item?.area} w={'full'} mt={6}>
      <Heading textAlign={'center'} fontSize={{
        base: '28px',
        md: '40px',
      }} color={useColorModeValue('cyan.800', 'cyan.500')}>{item?.name?.common}</Heading>
      <Divider mt={2}/>
      <Flex flexDir={{
        base: 'column',
        md: 'row',
      }} alignItems={'center'} justifyContent={'center'} gap={10} mt={5}>
        <Image w={'400px'} src={item?.flags?.svg}/>
        <Image h={'40vh'} src={item?.coatOfArms?.svg} alt='coatOfArms image'/>
      </Flex>
      <Divider mt={2}/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>CAPITAL:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.capital}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>INDEPENDENT:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{independentChecked ? 'true' : 'false'}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>CONTINENT:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.continents}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>AREA:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.area}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>POPULATION:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.population} person</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>LANDLOCKED:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{landlockedChecked ? 'true' : 'false'}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} p={6} gap={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>BORDER:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{bordersChecked ? Object.values(item?.borders).toString().split(',').join('  ') : '-/-'}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>LANGUAGE:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{Object.values(item?.languages).toString().split(",").join(", ")}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} p={6} gap={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>CURRENCE:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.currencies[Object.keys(item?.currencies)[0]].name}-{Object.keys(item?.currencies)[0]}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} p={6} gap={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>TIMEZONES:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{Object.values(item?.timezones).toString().split(',').join('  ')}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>REGION:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.region}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>SUBREGION:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.subregion}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>IDD:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.idd?.root}{item?.idd?.suffixes}</Text>
      </Flex>
      <Divider/>
      <Flex flexDir={{
        base: 'column',
        md: 'row'
      }} alignItems={'center'} justifyContent={'space-between'} gap={6} p={6}>
        <Text fontSize={'23px'} fontWeight={'bold'} color={useColorModeValue('cyan.900', 'cyan.300')}>TLD:</Text>
        <Text fontSize={'20px'} color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>{item?.tld}</Text>
      </Flex>
      <Divider/>

    </Box>
  )
}

export default CountryItemDetails