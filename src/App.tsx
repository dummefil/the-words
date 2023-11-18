import './reset.css';
import {useSelector} from "react-redux";
import {MainInitialState} from './store/slice.main.ts';
import {Container} from "./components";
import {SignIn} from "./components/SignIn.tsx";
import {Nav} from "./components/Nav.tsx";
import Servers from "./components/Servers.tsx";

function App() {
    const auth = useSelector((state: MainInitialState) => state.auth);
  return (
    <Container>
        <Nav/>
        {!auth && <SignIn/>}
        {auth && <Servers/>}
    </Container>
  )
}

export default App
