import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Tyra">
    <Container>
      <Title>
        Tyra <Badge>2021-</Badge>
      </Title>
      <P>
        A discord bot aims to replace them all. Tickets, Reactions roles and
        more !
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, MongoDB, Discord.js</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tyra.ml">
            https://www.tyra.ml <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://discord.com/oauth2/authorize?client_id=884471321885556787&permissions=8&scope=bot%20applications.commands">
            <Badge mr={2}>Discord</Badge>
            Tyra is a discord bot
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://youtube.com/">
            <Badge mr={2}>YouTube</Badge>
            Tyra can play YouTube music in discord.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/tyra_eyecatch.png" alt="tyra" />
      <WorkImage src="/images/works/tyra_01.png" alt="tyra" />
      <WorkImage src="/images/works/tyra_02.png" alt="tyra" />
    </Container>
  </Layout>
)

export default Work
