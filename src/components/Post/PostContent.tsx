import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  font-family: 'Noto Sans KR', sans-serif;
  font: 100%/1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
    'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 26px;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  // Adjust Heading Element Style

  h2 {
    font-weight: 800;
    margin-bottom: 20px;
    margin-top: 35px;
  }

  h3 {
    margin-top: 35px;
    margin-bottom: 15px;
    font-size: 20px;
  }

  img {
    margin-top: 15px;
  }
  // Adjust Quotation Element Style
  blockquote {
    margin: 15px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // Adjust List Element Style
  ol,
  ul {
    /* margin-left: 40px; */
    /* padding: 30px 0; */
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // Adjust Link Element Style
  a {
    text-decoration: none;
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 0 auto;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
    margin: 0 auto;
  }

  li {
    line-height: 26px;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 2px;
    // Markdown Style
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
