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
  width: 637px;
  margin: 0 auto;
  /* padding: 100px 0; */
  word-break: break-all;

  // Markdown Style
  line-height: 26px;
  font-size: 16px;
  font-weight: 400;

  h2 {
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 26px;
  }

  h3 {
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 8px;
    font-size: 23px;
  }

  h4 {
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 8px;
    font-size: 20px;
  }

  img {
    margin-top: 15px;
  }
  // Adjust Quotation Element Style
  blockquote {
    margin: 15px 0;
    padding: 5px 5px;
    border-left: 2px solid #000000;
    font-weight: 800;
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // Adjust List Element Style
  ol,
  ul {
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }

  // markDown Style
  li {
    line-height: 26px;
    margin: 0;
    padding: 2px;
    line-height: 26px;
    font-size: 16px;
    font-weight: 550;
  }

  p {
    font-weight: 550;
    font-size: 16px;
    line-height: 26px;
    padding: 5px 0;
    text-align: justify;
    text-indent: 8px;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    /* margin: 20px 0; */
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

  code[class*='language-'] {
    tab-size: 2;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin: 0 auto;
    /* padding-left: 5px; */
  }

  pre[class*='language-'] {
    tab-size: 2;
    line-height: 16px;
    font-size: 14px;
    font-weight: 400;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 8px;
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
      margin: 10px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
