import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components'
import nl2br from 'react-nl2br'

export default props => {

  const [visible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const current = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <Holder
      className={`${visible ? 'visible' : ''}`}
      ref={domRef}
    >
      <Avatar>
        <img src={props.user.avatar}/>
      </Avatar>
      <div>
        <NickName>{props.user.name}</NickName>
        <TextHolder>
          {nl2br(props.msg)}
        </TextHolder>
      </div>
    </Holder>
  );

};

const Holder = styled.div`
  padding: 1.6rem 2rem;
  opacity: 0;
  transform: translateX(25vw);
  transition: opacity 1200ms ease-out, transform 600ms ease-out,
    visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1.2rem;
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  border-radius: 3rem;
  border: 1px solid black;
  img {
    width: 100%;
    height: 100%;
  }
`;

const NickName = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const TextHolder = styled.div`
  font-size: 1.3rem;
  line-height: 1.8rem;
  padding: 1rem;
  background: #FF9;
  border-radius: 0.8rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    display:block;
    width: 1rem;
    height: 1rem;
    background: #FF9;
    left: -0.5rem;
    top: 0.6rem;
    z-index: -1;
    transform: rotate(45deg);
  }
`;
