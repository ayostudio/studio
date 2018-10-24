import styled from 'styled-components';
import variables from '../../common/variables';

const StyledStats = styled.ul`
  list-style: none;
  margin: 100px -25px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;

  li {
    min-width: 300px;
    flex: 1;
    margin: 0px 25px;
    padding-top: 24px;

    .title {
      font-size: 18px;
      color: ${variables.colors.dark};
      letter-spacing: 0;
      margin-bottom: 25px;
    }

    .value {
      font-size: 100px;
      color: ${variables.colors.darkest};
      letter-spacing: 0;
    }

    .name {
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      color: ${variables.colors.darkest};
      letter-spacing: 0;
    }

    .role {
      font-size: 18px;
      line-height: 28px;
      color: ${variables.colors.darkest};
      letter-spacing: 0;
    }

    .desc {
      font-size: 18px;
      line-height: 28px;
      color: rgba(28, 28, 28, 0.6);
      letter-spacing: 0;
    }
  }

  ${props =>
    props.hasBorder
    && `
    li {
      border-top: 1px solid ${variables.colors.darkest};
    }
  `};
`;

export default StyledStats;
