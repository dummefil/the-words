import './reset.css';
import {useSelector} from "react-redux";
import {MainInitialState} from './store/slice.main.ts';
import {Container} from "./components";
import {SignIn} from "./components/SignIn.tsx";
import {Nav} from "./components/Nav.tsx";
import {ServersRouter} from "./components/Servers.tsx";

function App() {
    const auth = useSelector((state: MainInitialState) => state.auth);
    return (
    <Container>
        <Nav/>
        {!auth && <SignIn/>}
        {auth && <ServersRouter/>}
    </Container>
  )
}

export default App
