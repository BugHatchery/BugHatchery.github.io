import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Color from 'common/color';

import styled from 'styled-components'

import Topics from './pages/topic/'

import './app.css'

export default props => {

  return (
    <>
      <Header>
        <img id = 'logo' src='/logo/title.png' />
      </Header>
      <Holder>
        <ContentsHolder>
          <Switch>
            <Route exact path = '/' component={Topics} />
          </Switch>
        </ContentsHolder>
      </Holder>
      <Footer>
        <FooterDescription>
          © BugHatchery. All rights reserved. Powered by GitHub Pages.
          {/*github*/}
          <a href='https://github.com/BugHatchery'>
            <svg class="octicon octicon-mark-github v-align-middle" height="24" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
          <a href='mailto:qurugi0347@gmail.com'>
            <img src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'/>
          </a>
        </FooterDescription>
      </Footer>
    </>
  );
};

const Holder = styled.div`
  max-width: 78rem;
  width: 100%;
  margin: 0 auto;
`

const ContentsHolder = styled.div`
  background: white;
  border-radius: 0.8rem;
`;

const Header = styled.header`
  background: ${Color.gray8};
  padding: 1.4rem 3.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  #logo {
    height: 3.6rem;
    width: auto;
  }
`

const Footer = styled.footer`
  padding: 4rem 2rem;
  margin-top: 2rem;
  background: ${Color.gray8};
  color: ${Color.white};
  font-size: 2.4rem;
  text-align: center;
  position: relative;
`;

const FooterDescription = styled.div`
  max-width: 98rem;
  text-align: left;
  height: unset;
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 0 auto;

  a {
    float: right;
    background: ${Color.white};
    color: ${Color.gray8};
    text-decoration: none;
    margin: 0 0.4rem;
    img {
      display: block;
      width: 24px;
      height: 24px;
    }
    svg{
      display: block;
    }
    overflow: hidden;
    border-radius: 1.6rem;
  }
`;
