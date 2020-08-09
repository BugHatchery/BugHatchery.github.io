import React from 'react';

import styled from 'styled-components'
import Data from 'datas/topics/';
import Color from 'common/color';

import ChatItem from './chatItem';


const datas = Data.test;
const users = datas.users;

export default props => {
  return (
    <>
      <TitleHolder>
        {datas.title}
      </TitleHolder>
      <Holder>
        {datas.talk.map( (data, index) => {
          return <ChatItem
            user = {users[data.user]}
            msg = {data.msg}
            key = {index}
          />
        })}
      </Holder>
    </>
  );
};

const Holder = styled.div`
  padding: 2rem 4rem;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;

const TitleHolder = styled.div`
  border-bottom: 1px solid ${Color.gray3};
  padding: 2rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  background: ${Color.white};
  z-index: 1;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;
