import { ChakraProvider } from '@chakra-ui/react';
import { Switch, Route } from 'wouter';


import Container from './components/Container'

import SignIn from './pages/SignIn'
import List from "./pages/List";

const routes = [
  { path: "/", name: "SignIn", component: SignIn },
  { path: "/list", name: "List", component: List },
];

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Container>
        <Switch>
          {routes.map(({ path, name, component }) => (
            <Route key={name} path={path} component={component}/>
          ))}
        </Switch>
      </Container>
    </ChakraProvider>
  );
}

export default App;
