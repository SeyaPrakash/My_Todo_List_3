import { styled } from 'styled-components';

const Box = styled.div`
  text-align: center;
  min-width: 800px;
  max-width: 1200px;
  margin: 10px auto;
`
const HeaderStyles = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
`

function Header() {
  return (
    <HeaderStyles>
        <p>My ToDo List</p>
        <p>React</p>
    </HeaderStyles> 
  );
}

function Layout({children}) {
  return(
    <Box>
      <Header />
      <div>
        {children}
      </div>
    </Box>
  );
}

export default Layout;