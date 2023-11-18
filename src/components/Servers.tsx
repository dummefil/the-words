import Blank from "./Blank.tsx";
import styled from "styled-components";
import {Button} from "./index.tsx";

const ServerDescription = styled.div`
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;
  text-align: center;
  padding: 8px;
    &:hover {
      background: antiquewhite;
    }
`

const ServersScroll = styled.div`
  overflow-y: scroll;
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const ButtonsRow = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Servers = () => {
    const servers = [
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
    ]
    return <>
        <Blank
        header={'Servers'}
    >
        <ServersScroll>
            {servers.map((server, i) =>
                <ServerDescription key={server.name + i}>{server.name + ' ' + i}</ServerDescription>)
            }
        </ServersScroll>
    </Blank>
        <ButtonsRow >
            <Button scale={1} color={'green'}>
                Подключиться
            </Button>
            <Button scale={1} color={'green'}>
                Создать
            </Button>
        </ButtonsRow>
        </>
}

export default Servers;
