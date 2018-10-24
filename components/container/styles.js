import styled from 'styled-components';
import variables from '../../common/variables';

const Container = styled.div`
  width: 100%;
  max-width: ${variables.maxWidth + variables.sitePadding * 2};
  padding: 0px ${variables.sitePadding};
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: ${variables.breakpoints.tablet}px) {
    padding: 0px 30px;
  }
`;

export default Container;
