import styled from 'styled-components';

const Content = styled.div`
  /* background: papayawhip; */
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Roboto', sans-serif;

  & aside {
    background: ghostwhite;
    padding: 10px;
    width: 100%;
    max-width: 360px;
  }

  & main {
    background: lightsteelblue;
    width: 100%;
  }
`;

export default Content;