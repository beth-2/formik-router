import styled from 'styled-components';

export const Container = styled.div`
  background-color: #808080;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

export const Location = styled.div`
  background-color: #212121 ;
  position: absolute;
  left: 0;
  bottom: 0;
  min-width: 12%;
  min-height: 85%;
  z-index: 0;
`

export const Image = styled.img`
  position: absolute;
  left: 3%;
  top: 20%;
  max-width: 6%;
  max-height: 12%;
  z-index: 2;
  border-radius: 50%;
`

export const AppBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 15%;
  background-color: #90caf9;
`

export const Name = styled.p`
  font-family: 'Mouse Memoirs', sans-serif;
  position: absolute;
  left: 3%;
  top: 150px;
  font-size: 35px;
`