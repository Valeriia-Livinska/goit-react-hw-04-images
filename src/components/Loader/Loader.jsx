import { ProgressBar } from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Loader = () => {
  return (
    <Wrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="lightgrey"
        barColor="#3f51b5"
      />
    </Wrapper>
  );
};
