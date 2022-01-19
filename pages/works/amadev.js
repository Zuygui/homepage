import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Amadev">
    <Container>
      <Title>
        Amadev <Badge>2020-</Badge>
      </Title>
      <P>
        A association create for all applications. All ideas are available. 100% free to use.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://amadev.tk/">
            https://www.amadev.tk/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/amadev_01.png" alt="Amadev" />
      <WorkImage src="/images/works/amadev_02.png" alt="Amadev" />
    </Container>
  </Layout>
)

export default Work
