import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Discord.jar">
    <Container>
      <Title>
        Discord.jar <Badge>2022-</Badge>
      </Title>
      <P>
        Discord.jar is a fatest discord library coded on java lang. On
        development. Comming soon !
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, MacOS, Linux</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://discord.com">
            <Badge mr={2}>Discord</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.azul.com/downloads/">
            <Badge mr={2}>Java</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/discord_01.png" alt="Discord" />
        <WorkImage src="/images/works/discord_02.png" alt="Discord" />
      </SimpleGrid>
      <WorkImage src="/images/works/discord_03.png" alt="Discord.jar" />
      <WorkImage src="/images/works/discord_04.png" alt="Discord.jar" />
      <WorkImage src="/images/works/java_01.png" alt="Java" />
    </Container>
  </Layout>
)

export default Work
