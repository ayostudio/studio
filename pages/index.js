import React from 'react';

import Header from '../components/header';
import Container from '../components/container';
import H1 from '../components/h1';
import H2 from '../components/h2';
import P from '../components/p';
import Stats from '../components/stats';

const Index = () => (
  <div>
    <Header />
    <Container>
      <H1 top={350} bottom={140}>
        Hey there, we’re ayo.
      </H1>
      <H2 bottom={20}>We aren’t your typical product team.</H2>
      <P large maxWidth="832px">
        We don’t have a complex process that you have to read about. We just make ourselves at home
        with your team and do good work. We understand you have deadlines, need to keep up with
        investors and focus on important tasks outside of the product. We’ll be the perfect duo to
        get your ideas in front of people.
      </P>
      <Stats
        items={[
          {
            title: 'Avg. response time',
            value: '2hrs',
          },
          {
            title: 'Articles / Studies',
            value: '0',
          },
          {
            title: 'Work availability',
            value: 'Open',
          },
        ]}
      />
      <H2 bottom={20}>How do we choose who to work with?</H2>
      <P large maxWidth="832px">
        <span role="img" aria-label="money">
          💵
        </span>
        {' '}
        Recently funded startups
        <br />
        <span role="img" aria-label="hello">
          👋
        </span>
        {' '}
        Looking for a designer and/or developer
        <br />
        <span role="img" aria-label="contract">
          📝
        </span>
        {' '}
        A minimum 1 month relationship
        <br />
        <span role="img" aria-label="rocket">
          🚀
        </span>
        {' '}
        Ready to have fun & build something amazing
      </P>

      <H2 top={80} bottom={20}>
        So, how does this work?
      </H2>
      <P large maxWidth="832px">
        You’ll
        {' '}
        <a href="mailto:meetstudioayo@gmail.com">send us an email</a>
        {' briefly explaining what you '}
        need, we chat a little more, and 7 days later we've landed on the perfect price to 
        start building your product.
      </P>

      <H2 top={80} bottom={20}>
        Sounds like a good fit?
      </H2>
      <P large maxWidth="832px">
        We’re happy to hear! Let’s talk,
        {' '}
        <a href="mailto:start@ayo.studio">start@ayo.studio.</a>
      </P>
      <Stats
        hasBorder={false}
        items={[
          {
            key: 'bobby',
            name: 'Bobby Giangeruso',
            role: 'Co-founder, Head of Design',
            desc:
              'Focusing on product, design and copywriting. Previously building startups and designing for Drop, Microsoft, and Sunrise.',
          },
          {
            key: 'joe',
            name: 'Joseph Smith',
            role: 'Co-founder, Lead Developer',
            desc:
              'Full-stack developer, focused on the details. Interested in systems and building tools to help early-staged companies.',
          },
        ]}
      />
    </Container>
    <Header />
  </div>
);

export default Index;
