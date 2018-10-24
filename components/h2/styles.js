import styled from 'styled-components';
import variables from '../../common/variables';

const Heading = styled.h2`
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 0;
  line-height: 38px;
  color: ${variables.colors.darkest};
  max-width: ${props => props.maxWidth};
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
`;

export default Heading;
