import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Button from '../button';
import Container from '../container';
import P from '../p';
import Flex from '../flex';

import StyledHeader from './styles';

const Header = ({ navigation, navigationLink }) => (
  <StyledHeader.Container>
    <Container>
      <Flex.Container>
        <Flex.Item>
          <Flex.Container align="center">
            <Flex.Item>
              <Link href="/" prefetch>
                <a href="/">
                  <img src="/static/icons/logo.svg" alt="Ayo Studio" />
                </a>
              </Link>
            </Flex.Item>
            <Flex.Item left={60} tabletLeft={0}>
              <P maxWidth="220px">A product studio for startups. Based in New York & London.</P>
            </Flex.Item>
          </Flex.Container>
        </Flex.Item>
        <Flex.Item justify="flex-end">
          {navigation === true && (
            <StyledHeader.Navigation>
              <li>
                <a href="https://twitter.com/studioayo" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="https://medium.com/@studioayo" target="_blank">Medium</a>
              </li>
              <li>
                <a href="mailto:start@ayo.studio">start@ayo.studio</a>
              </li>
            </StyledHeader.Navigation>
          )}

          {navigation
            && navigation !== true && (
              <StyledHeader.Navigation>
                <li>
                  <Button href={navigationLink}>{navigation}</Button>
                </li>
              </StyledHeader.Navigation>
          )}
        </Flex.Item>
      </Flex.Container>
    </Container>
  </StyledHeader.Container>
);

Header.defaultProps = {
  navigation: true,
  navigationLink: false,
};

Header.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  navigationLink: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Header;
