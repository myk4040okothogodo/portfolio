import Head  from 'next/head';
import {Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar'
import Footer from '../footer'
import dynamic from 'next/dynamic'


const Main = ({children, router}) => {
  return (
    <Box as ="main" pb={8}>
      <Head>
       <meta name="viewport" content="width=devive-width, initial-scale" />
       <meta name="description" content="Okoth Ogodo's homepage" />
       <meta name="author" content="Mike Okoth Ogodo" />
       <meta name="author" content="CodeTao" />
       <link rel="apple-touch-icon" href="apple-touch-icon.png" />
       <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:site" content="@myk" />
       <meta name="twitter:creator" content="@myk" />
       <meta name="twitter:image" content="/card.png" />
       <meta property="og:site_name" content="Okoth  Ogodo's Homepage" />
       <meta property="og:type" content="website" />
       <meta property="og:image" content="/card.png" />
       <title> Mike Okoth Ogodo - Homepage</title>  
    </Head>
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={14}>
    {children}
    <Footer  />
    </Container>
    </Box>
  )
}

export default Main
