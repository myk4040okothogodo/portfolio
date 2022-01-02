import Link from 'next/link';
import Image from 'next/image';
import {Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';


const LogoBox = styled.span`
    font-weight: bold;
    font-size: 19px;
    display: inline-flex;
    align-items: center;
    height: 3px;
    line-height: 20px;
    padding: 10px;


     img {
        transition: 250ms ease;
     }

    &:hover img {
        transform: rotate(35deg)

    }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  
  return (
    <Link href="/">
      <a>
       <LogoBox>
         <Image src={footPrintImg} width={20} height={20} alt="logo"  />
         <Text
           color ={useColorModeValue('gray.800', 'whiteAlpha.900')}
           fontFamily = 'M PLUS Rounded 1c", sans-serif'
           fontWeight ="bold"
           m1 = {3}
          
          >
          Mike Okoth
         </Text>
       </LogoBox>
      </a>
    </Link>
  )      
}

export default Logo
