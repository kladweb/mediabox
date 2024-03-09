import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollDiv: any = styled.div`
  position: fixed;
  display: block;
  padding: 0.2rem;
  margin: 0;
  bottom: 4rem;
  right: 1rem;
  //font-family: "Material Icons", fantasy;
  //font-size: 3rem;
  color: rgba(234, 234, 234, 0.7);
  background-color: #939999;
  border-radius: 0.4rem;
  cursor: pointer;
  opacity: 0.5;
  z-index: 10;
  transition: transform 0.5s ease-in-out, opacity 0.2s ease-in-out;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 48rem) {
    font-size: 2rem;
    opacity: 0.5;
  }

  ${({$toShow}: any) => css`
    transform: translateX(${$toShow ? '0' : '300%'})`};
`;

const ScrollUp = () => {
  const coords = window.innerHeight;
  const [show, changeShow] = useState<boolean>(false);

  useEffect(
    () => {
      document.addEventListener('scroll', checkScroll);
      return () => {
        document.removeEventListener('scroll', checkScroll);
      };
    },
    [show]
  );

  function checkScroll() {
    let scrolled = window.scrollY;
    if (coords < scrolled && !show) {
      changeShow(true);
    }
    if (coords > scrolled && show) {
      changeShow(false);
    }
  }

  function scrollPage() {
    let scrolled = window.scrollY;
    window.scrollBy(0, -scrolled);
  }

  return (
    <ScrollDiv onClick={scrollPage} $toShow={show}>
      {/*<span className='material-icons-outlined'>expand_less</span>*/}
      <KeyboardArrowUpIcon fontSize='large'/>
    </ScrollDiv>
  );
}

export default React.memo(ScrollUp);