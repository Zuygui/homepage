import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="RoxasYTB">
    <Container>
      <Title>
        RoxasYTB <Badge>2021</Badge>
      </Title>
      <P>Youtuber create videos like to Beluga</P>
      <P>
        Hey! He is RoxasYTB, an entertaining YouTuber He makes videos around
        video games and scripted scenarios.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord, Youtube</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Html, Css, JavaScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/roxas_eyecatch.png" alt="roxas" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/roxas_01.png" alt="roxas" />
        <WorkImage src="/images/works/roxas_02.png" alt="roxas" />
      </SimpleGrid>
      <WorkImage src="/images/works/roxas_03.png" alt="roxas" />
    </Container>
  </Layout>
)

export default Work
