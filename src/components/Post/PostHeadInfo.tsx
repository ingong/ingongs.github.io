import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #000;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PostData = styled.div`
  position: absolute;
  right: 0;
  bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #7d7d7d;
  font-style: italic;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
}) {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>{date}</PostData>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
