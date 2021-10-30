import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;

  transition: 0.2s text-shadow;
  margin: 10px 0;
  height: 150px;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 0.1px rgb(0 0 0 / 80%);
    p {
      color: #7d7d7d;
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const PostItemContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 25px;
  font-weight: 700;
  color: 333;
`;

const Summary = styled.p`
  position: absolute;
  top: 65px;
  height: 90px;
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  font-size: 105%;
  line-height: 1.4;
  opacity: 0.8;
  color: #7d7d7d;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  summary,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
