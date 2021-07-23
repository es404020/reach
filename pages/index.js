import Head from 'next/head'
import { useEffect, useState } from "react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/react"
import Rive from 'rive-react';
import Dance from '../public/Dance.js'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import {
  Flex, Spacer, Heading, Box, Button, Text, Link, position, filter, Container,

  keyframes,Image
} from "@chakra-ui/react"
import React, { Suspense } from "react";

const spin = keyframes`
  from { filter: hue-rotate(0);
   }
  to { filter: hue-rotate(360deg);
   }
`;



const animation = `${spin}  10s infinite alternate`

const HomePage = {

  content: '""',
  width: '100%',
  height: '100%',
  background: 'inherit',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '-1',
  filter: 'blur(2rem)',
  transform: 'scale(1.15)'



}




const HomeStyle = {

  height: "100vh",
  background: "url('wallpaper.jpg')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  zIndex: "-1",
  position: "relative",
  overflow: "hidden",
  color: "white"



}



const slideshowContainer={

  maxwidth: "100%",
  height: "calc(var(--975px, 1vh) * 100)",
  position: "relative",
 
  //background:"#251C41",
  overflow: "hidden"

}

const mySlides={
  //display: "none",
  height: "calc(var(--975px, 1vh) * 100)",
  //background:"#251C41",
}

var slideIndex = 1;
export default function Home() {
 

  useEffect(() => {

  
   showSlides(slideIndex)

    return () => {

    }
}, [])

const plusSlides=(n) => {
  showSlides(slideIndex += n);
}


const showSlides=(n) => {
  var i;
  var slides = document.getElementsByClassName("mySlides");


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = "none";
    //console.log( slides[i]['style']);
  }
 
  slides[slideIndex-1]['style'].display = "block";
 
}

  const requets = () =>{
    alert('still in development');
  }

  return (
    <Box  style={slideshowContainer} >

<Box position="absolute" left="50%" bottom="5vh"  zIndex="1">



<IconButton borderRadius="50%" onClick={()=>plusSlides(1)} icon={<ChevronDownIcon w={8} h={8}  />} />

</Box>

<Flex direction="column" style={mySlides} className="mySlides" backgroundColor='#251C41' p="5">

  <Flex direction="row" justify="space-between" align="center" mb="20">

    <Box><Image src="vercel.svg" height="36px" width="213px" /></Box>

   

    <Flex justify="space-evenly" >
    <Box backgroundColor="#56CCF2" verticalAlign="middle" px={["sm","5px","15px","35px","35px"]} py={["sm","5px","10px","10px","10px"]} cursor="pointer" borderRadius="50px" display="inline-block" color="#ffff" lineHeight="1.42857"  fontSize=" 0.83636rem" mr="15">Sign In</Box>


<Box backgroundColor="#40BE88" verticalAlign="middle" px="35px" py="10px" cursor="pointer" borderRadius="50px" display="inline-block" color="#ffff" lineHeight="1.42857"  fontSize=" 0.83636rem" mr="15">Join Waitlist</Box>

    </Flex>

   

  </Flex>

  <Flex justify="space-evenly" h="90vh" align="center" grow="2">
<Box alignSelf="start">
<Image src="b.png"  height="726px"  />
</Box>

<Box alignSelf="center" textAlign="center" fontWeight="extrabold" lineHeight="1.18182" letterSpacing="-0.02em" color="#ffff" fontSize=" 2.55rem" mb="20">
  <Text>
  It's Important
  </Text>
  <Text>
  the World understand
  </Text>
  <Text>
  how we collect data offline
  </Text>


  <Box  backgroundColor="#40BE88" verticalAlign="middle" mt="5" mb="5" px="35px" py="10px" cursor="pointer" borderRadius="50px" display="inline-block" color="#ffff" lineHeight="1.42857"  fontSize=" 0.83636rem" mr="15">Join Waitlist</Box>

  

</Box>
<Box alignSelf="start">
<Image src="a.png"  height="726px"   />
</Box>
  </Flex>



</Flex>

<Flex direction="column" style={mySlides} className="mySlides" backgroundColor='#FFC93F' p="5">

  <Flex direction="row" justify="space-between" align="center" mb="20">

    <Box><Image src="vercel.svg" height="36px" width="213px" /></Box>

    <Flex justify="space-evenly" >
    <Box backgroundColor="#56CCF2" verticalAlign="middle" px={["sm","5px","15px","35px","35px"]} py={["sm","5px","10px","10px","10px"]} cursor="pointer" borderRadius="50px" display="inline-block" color="#ffff" lineHeight="1.42857"  fontSize=" 0.83636rem" mr="15">Sign In</Box>


<Box backgroundColor="#40BE88" verticalAlign="middle" px="35px" py="10px" cursor="pointer" borderRadius="50px" display="inline-block" color="#ffff" lineHeight="1.42857"  fontSize=" 0.83636rem" mr="15">Join Waitlist</Box>

    </Flex>

   

  </Flex>
  

  <Flex justify="center" h="80vh" align="center"  grow="2">


<Box alignSelf="center" textAlign="center" fontWeight="extrabold" lineHeight="1.18182" letterSpacing="-0.02em" color="#ffff" fontSize=" 2.55rem" mb="20">

  <Container width="container.md"  textAlign="justify">
  <Text>
Yet Existing
  </Text>
  <Text>
 network fails to empower
  </Text>
  <Text>
 us to represent who we truly are 
  </Text>
  <Text>
Let reach for the star
  </Text>


  
  

  </Container>
  

</Box>
<Box alignSelf="center" transform="scale(2.5)" >
{/* <Image src="a.png"  height="726px"   /> */}
<Rive src="aa.riv" animations="Example"    />
</Box>
  </Flex>



</Flex>


    </Box>
  )
}


