import { AspectRatio, Box, Divider, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import CountryItemDetails from '../components/CountryItemDetails'

const CountryDetails = () => {
  const { countrys } = useSelector(selector => selector.state)
  const params = useParams()
  const country = countrys.find(item => item.name.common == params.slug)
  return (
    <CountryItemDetails item = { country }/>
  )
}

export default CountryDetails