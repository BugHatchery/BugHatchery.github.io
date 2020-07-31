import React from 'react';

import styled from 'styled-components'
import Data from 'datas/topics/';

import ChatItem from './chatItem';


const datas = Data.test;
const users = datas.users;

export default props => {
  return (
    <Holder>
      {datas.talk.map( (data, index) => {
        return <ChatItem
          user = {users[data.user]}
          msg = {data.msg}
          key = {index}
        />
      })}
    </Holder>
  );
};

const Holder = styled.div`
  overflow: hidden;
  max-width: 100vw;
`;
