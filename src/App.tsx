import { Box } from '@chakra-ui/react'
import { Content } from './components/Containers/Content';
import { Header } from './components/Header';

function App() {
   return (
      <Box 
         bg="red"
         width="100%" 
         height="100vh"
         display="flex"
         alignItems="flex-start"
         justifyContent="center"
         padding={{
            base: "0rem",
            md: "2rem 1rem 1rem",
            lg: "4rem 2rem 2rem"
         }}>
            <Content>
               <Header />
            </Content>
      </Box>
   );
}

export default App;
