import {ChakraProvider} from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import {AnimatePresence} from 'framer-motion';
import theme from '../lib/theme'

function Website({Component, pageProps, router}){
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>
         <Component {...pageProps} key={router.router} />
      </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )

}
export default Website
