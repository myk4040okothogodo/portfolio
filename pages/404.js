import NextLink from 'next/link';
import { Box,Heading, Text, Container, Divider, Button} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">yikes</Heading>
      <Text>Yikes !, this page is not yet available, soon though ....!</Text>
    <Divider my={6} />
    <Box my ={6} align="center">
      <NextLink href="/">
        <Button colorScheme="teal">Return to home </Button>
      </NextLink>
    </Box>
    </Container>
  )

}


export default NotFound
