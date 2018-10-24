import styled from 'styled-components';
import variables from '../../common/variables';

const Container = styled.div`
  padding: 80px 0px 0px 0px;
  margin-bottom: 40px;
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  li {
    margin-right: 60px;
    &:last-child {
      margin-right: 0px;
    }

    a {
      color: ${variables.colors.darkest};
      text-decoration: none;
      font-size: 18px;
      color: #1c1c1c;
      letter-spacing: 0;
    }
  }

  @media (max-width: ${variables.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: flex-start;

    li {
      margin-top: 20px;
      margin-right: 0px;
    }
  }
`;

export default {
  Container,
  Navigation,
};
