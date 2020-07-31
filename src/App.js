import React from 'react';
import { Switch, Route } from 'react-router-dom'

import styled from 'styled-components'

import Topics from './pages/topic/'

import './app.css'

export default props => {

  return (
    <Holder>
      <Logo>
        <h1>누B타조R</h1>
      </Logo>
      <ContentsHolder>
        <Switch>
          <Route exact path = '/' component={Topics} />
        </Switch>
      </ContentsHolder>
    </Holder>
  );
};

const Holder = styled.div`
  max-width: 98rem;
  width: 100%;
  margin: 0 auto;
`;

const ContentsHolder = styled.div`
  background: white;
  border-radius: 0.8rem;
`;

const Logo = styled.div`
  padding: 4rem;
  h1 {
    text-align: center;
  }

`;
