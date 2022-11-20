import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const GallerySkeleton = props => (
  <Wrapper>
    <ContentLoader
      width={800}
      height={575}
      viewBox="0 0 800 575"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      
      <rect x="67" y="58" rx="15" ry="15" width="211" height="211" />
      <rect x="295" y="57" rx="15" ry="15" width="211" height="211" />
      <rect x="522" y="56" rx="15" ry="15" width="211" height="211" />
      <rect x="67" y="283" rx="15" ry="15" width="211" height="211" />
      <rect x="295" y="281" rx="15" ry="15" width="211" height="211" />
      <rect x="523" y="279" rx="15" ry="15" width="211" height="211" />
      
    </ContentLoader>
  </Wrapper>
);

