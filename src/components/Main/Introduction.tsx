import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { AiFillGithub } from 'react-icons/ai';

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 768px;
  height: 70px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <Link to={'/'}>
          <Title>이인송 블로그</Title>
        </Link>
        <a href={'https://www.github.com/ingong'}>
          <AiFillGithub size="30" />
        </a>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
