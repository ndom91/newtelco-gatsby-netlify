import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const OverlayWrapper = styled.div`
  width: 100vw;
  height: 0%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  background-color: #67b246;

  &.active {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    height: 100%;
  }
  /* 
  &:active li {
    margin-left: 200px;
  } */

  & #shape-overlays {
    z-index: -1;
  }
`

export const HeaderImage = styled.img`
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`

export const ShapeOverlays = styled.svg`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  & path:nth-of-type(1) {
    fill: #c4dbea;
  }
  & path:nth-of-type(2) {
    fill: #4c688b;
  }
  & path:nth-of-type(3) {
    fill: #2e496a;
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 60%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  ul {
    list-style: none;
    padding: 0;
    margin: 10vh auto;
    display: inline-block;
    position: relative;
    height: 100%;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    transition-delay: 300ms;

    &.active {
      opacity: 1;
    }

    li {
      display: block;
      height: calc(100% / 7);
      position: relative;
      margin-left: 0px;
      text-align: center;
      opacity: 0;
      animation: fadeInRight 0.5s ease forwards;

      &:nth-of-type(1) {
        animation-delay: 150ms;
      }
      &:nth-of-type(2) {
        animation-delay: 200ms;
      }
      &:nth-of-type(3) {
        animation-delay: 250ms;
      }
      &:nth-of-type(4) {
        animation-delay: 300ms;
      }
      &:nth-of-type(5) {
        animation-delay: 350ms;
      }
      &:nth-of-type(6) {
        animation-delay: 400ms;
      }
      @keyframes fadeInRight {
        0% {
          opacity: 0;
          left: 200px;
        }
        100% {
          opacity: 1;
          left: 0;
        }
      }
    }
  }
`

export const NavigationLink = styled(LocalizedLink)`
  text-decoration: none;
  position: relative;
  color: #fff;
  z-index: 101;
  text-align: center;
  font-size: 2.5rem;
  font-family: var(--font-face-serif);

  &.active {
    font-weight: 600;
  }
`
