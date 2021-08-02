import styled from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Roboto', sans-serif;

  & aside {
    background: ghostwhite;
    padding: 10px;
    width: 100%;
    max-width: 30vw;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & main {
    background: lightsteelblue;
    width: 100%;
  }
`;

export default Content;