import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPythonAbout from '../public/images/contents/youtube-python_01.png'
import thumbHostWithGithub from '../public/images/contents/youtube-host-with-github.jpg'
import thumbPythonGetStarted from '../public/images/contents/youtube-python_02.jpg'
import thumbBogol from '../public/images/contents/bogol.jpg'
// import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
// import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Learn python #0 - What is Python ? [FR]"
            thumbnail={thumbPythonAbout}
            href="https://www.youtube.com/watch?v=PdQU0DQeAYU"
          />
          <GridItem
            title="Host your website with Github [FR]"
            thumbnail={thumbHostWithGithub}
            href="https://www.youtube.com/watch?v=vR0R5IlahyE"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Learn Python #1 - Get started [FR]"
            thumbnail={thumbPythonGetStarted}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="I created my own cli ! [EN]"
            thumbnail={thumbBogol}
            href="https://github.com/Zuygui/Bogol"
          />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
