import './reset.css';
import {Container} from "./components";
import {SignIn} from "./components/SignIn.tsx";
import {Nav} from "./components/Nav.tsx";
import {ServersRouter} from "./components/Rooms.tsx";
import {useAppSelector} from "./hooks.ts";
import Toast from "./components/Toast.tsx";

function App() {
    const {auth, error} = useAppSelector((state) => state.system);
    return (
    <Container>
        <Nav/>
        {!auth && <SignIn/>}
        {auth && <ServersRouter/>}
        {error && <Toast position={"bottom right"} data={error} type={'error'}></Toast>}
    </Container>
  )
}

export default App
