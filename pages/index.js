import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear} from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/Paragraph'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb = {6}
        p = {3}
        textAlign = "center"
        bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        
      >
      Hello, I&apos;m a Full-Stack Engineer based in Nairobi, kenya!.
    </Box>
    <Box display={{ md: 'flex'}}>
      <Box flexGrow={1}>
        <Heading as ="h2" variant="page-title">
          Mike Okoth Ogodo
        </Heading>
        <p>(Electrical & Electronics Engineer | Telecommunications Engineer | Software Engineer)</p>
    </Box>
    <Box 

     flexShrink = {0}
     mt = {{ base: 4, md: 0}}
     ml = {{ md: 6}}
     textAlign = "center"
     >
      <Image
       borderColor = "whiteAlpha.800"
       borderWidth = {2}
       borderStyle="solid"
       maxWidth ="100px"
       display = "inline-block"
       borderRadius = "full"
       src = "/images/profile.jpg"
       alt = "Profile image"
       />
    </Box>
   </Box>
  <Section delay ={0.1}>
    <Heading as="h3" variant="section-title">
      Work
    </Heading>
    <Paragraph>
      Okoth Ogodo is a graduate Engineer who holds two degrees (Electrical&Electronics Engineering) and another in(Telecommunications and Information Engineering),
      He is also a Software Engineer concetrating on the Python/Javascript stack.He has a deep interest in all things technology and enjoys solving
      societal problems using technology as a tool, starting from designing  all the way to implementation.When not building,you can find him
      outdoors playing football,bike-riding and philosophising about the great questions of life.
   
     <NextLink href="/works/vuuna">
       <Link>Vuuna</Link>
     </NextLink>
   .
    </Paragraph>
  <Box align="center" my={4}>
    <NextLink href="/works">
      <Button rightIcon = {<ChevronRightIcon />} colorScheme="teal">
        My Portfolio
      </Button>
    </NextLink>
   </Box>
   </Section>
  <Section delay={0.2}>
    <Heading as="h3" variant="section-title">
      Bio
    </Heading>
    <BioSection>
      <BioYear>1993</BioYear>
      Born in Ogembo, Kenya
    </BioSection>
    <BioSection>
      <BioYear>2018</BioYear>
       Completed the first degree in Telecommunications and Information Engineering 
       from Jommo kenyatta university of Agriculture and Technology.
    </BioSection>
    <BioSection>
        <BioYear>2020</BioYear>
        Completed the second degree in Electrical and Electronics Engineering                                                                                  
        from Jommo kenyatta university of Agriculture and Technology. 
     </BioSection>
    <BioSection>
      <BioYear>2018-2019</BioYear>
       worked at jamii telecommunications lte
    </BioSection>
   </Section>

  <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
         ,  Finance(Behavioral Finance),{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Rocket Science and Space exploration
          </Link>
          , Machine Learning
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/myk4040okothogodo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @myk4040okothogodo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/vuuna" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @vuuna_app 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/myk_okoth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @myk_okoth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @mykokoth
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="TaofCode"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home

