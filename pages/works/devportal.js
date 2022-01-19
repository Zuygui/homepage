import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="<Dev'Portal/>">
    <Container>
      <Title>
        Dev' Portal<Badge>2022</Badge>
      </Title>
      <P>
        👋 Hey, we are Dev' Portal・💻 ! 👨‍💻 We code for you 100% free 📊 Free
        service ! 🚪 Open source or Closed source ! 🧑‍🔧 Client service open
        24h/24, 7d/7 et 365d/365 🧑‍⚖️ Staff fair, speed and cool !
      </P>
      <P>So, you can buy a custom app for none. Our developers are speed.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, CSS, JavaScript and PHP</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/DevPortal-foundation">
            github.com/DevPortal-foundation{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/dp_eyecatch.png" alt="dev portal" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/dp_01.png" alt="dev portal" />
        <WorkImage src="/images/works/dp_02.png" alt="dev portal" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
