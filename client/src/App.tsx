import './reset.css';
import {Container} from "./components";
import {SignIn} from "./components/SignIn.tsx";
import {Nav} from "./components/Nav.tsx";
import {ServersRouter} from "./components/Servers.tsx";
import {useAppSelector} from "./hooks.ts";

function App() {
    const auth = useAppSelector((state) => state.player.auth);
    console.log(auth);
    return (
    <Container>
        <Nav/>
        {!auth && <SignIn/>}
        {auth && <ServersRouter/>}
    </Container>
  )
}

export default App
