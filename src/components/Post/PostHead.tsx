import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo';
import Introduction from 'components/Main/Introduction';

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
};

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const getDateString = (date: string) => {
  const DateObj = new Date(date);
  const MonthString = DateObj.toLocaleString('en-US', { month: 'long' });
  return `${MonthString} ${DateObj.getDate()},${DateObj.getFullYear()}`;
};
const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
}) {
  const DateString = getDateString(date);
  return (
    <PostHeadWrapper>
      <Introduction />
      <PostHeadInfo title={title} date={DateString} categories={categories} />
    </PostHeadWrapper>
  );
};

export default PostHead;
