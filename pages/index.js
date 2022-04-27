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
import { BioSection, BioYear} from '../components/bio';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
//import thumbYouTube from '../public/images/youtube2.png';
import { GridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/Paragraph';

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
      Hello,I&apos;m a Full-Stack Engineer based in Nairobi,Kenya!.
    </Box>
    <Box display={{ md: 'flex'}}>
      <Box flexGrow={1}>
        <Heading as ="h2" variant="page-title">
          Mike Okoth Ogodo
        </Heading>
        <p>(Electrical&Telecomunications Engineer | Software Engineer)</p>
    </Box>
    <Box 

     flexShrink = {0}
     mt = {{ base: 6, md: 0}}
     ml = {{ md: 6}}
     textAlign = "center"
     >
      <Image
       borderColor = "whiteAlpha.900"
       borderWidth = {2}
       borderStyle="solid"
       maxWidth ="150px"
       maxHeight="450px"
       display = "inline-block"
       borderRadius = "full"
       src = "/images/profile.jpg"
       alt = "Profile image"
       />
    </Box>
   </Box>
  <Section delay ={0.2}>
    <Heading as="h3" variant="section-title">
      Work
    </Heading>
    <Paragraph>
      I am a Full-Stack Engineer holding an Electrical&Electronics Engineering degree and a Telecommunications and Information Engineering degree,
      I am also a Software Engineer using the Python|Golang|PHP to construct backend apps and Javascript to build front end apps,I have has a deep interest in all things technology and enjoys solving
      societal problems using technology as a tool, starting from design all the way to implementation, when not building,you can find me
      outdoors playing football,bike-riding and philosophising about the great questions of life.
    </Paragraph>
{/*
     <NextLink href="/works/vuuna">
       <Link>Vuuna</Link>
     </NextLink>
  */}
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
       from Jomo kenyatta university of Agriculture and Technology.
    </BioSection>
    <BioSection>
        <BioYear>2020</BioYear>
        Completed the second degree in Electrical and Electronics Engineering                                                                                  
        from Jomo kenyatta university of Agriculture and Technology. 
     </BioSection>
    <BioSection>
      <BioYear>2018-2019</BioYear>
       Worked at Jamii Telecommunications ltd.
    </BioSection>
    <BioSection>
      <BioYear>2020 - todate</BioYear>
       Freelance Software Engineer.
    </BioSection>
   </Section>

  <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
            Drawing
         ,  Finance(Behavioral Finance),{' '}
            Rocket Science and Space exploration
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

