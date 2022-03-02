import React from 'react';
import styled from 'styled-components';

const PostCardContent = ({content, image }) => {
  return (
    //<ContentBox grid={grid}>
    <ContentBox>
      <ContentText>{content}</ContentText>
      <ContentImg src={image} alt='image' />
    </ContentBox>
  );
};
//ContentBox
//${props => props.grid};
//ContentText
// ${props => (props.grid === 'column' ? 'width: 100%;' : 'width: 50%;')};
//ContentImg
//${props =>
//  props.grid === 'column' ? 'margin: 0 auto; width: 100%;' : 'width: 50%;'};
const ContentBox = styled.div`
  margin: 0.7em;
  display: flex;
  flex-direction: column
  hieght: 100%;
`;

const ContentText = styled.div`
  display: block;
  width: 100%;
`;

const ContentImg = styled.img`
  display: block;
  margin: 0 auto; width: 100%;
`;

export default PostCardContent;
