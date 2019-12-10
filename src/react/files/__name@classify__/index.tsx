import React from 'react';
import { <%= classify(name) %> as Styled<%= classify(name) %> } from './styles';

interface I<%= classify(name) %> {
  key: string;
}

const <%= classify(name) %>: React.FC<I<%= classify(name) %>> = (props) => {
  return (
    <>
      <h1><%= classify(name) %> Component Created</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}

export { <%= classify(name) %>, Styled<%= classify(name) %>, I<%= classify(name) %> };
