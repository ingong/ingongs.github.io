import React, { createRef, FunctionComponent, useEffect } from 'react';
import styled from '@emotion/styled';

const src = 'https://utteranc.es/client.js';
const repo = 'ingong/insong-lee.github.io';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const attributes: UtterancesAttributesType = {
  src,
  repo,
  'issue-term': 'pathname',
  label: 'Comment',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: 'true',
};

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={element} />;
};

export default CommentWidget;
