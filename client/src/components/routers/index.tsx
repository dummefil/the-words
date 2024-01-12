import {Navigate, Route, Routes} from "react-router-dom";
import {RoomCreate} from "../CreateRoom.tsx";
import {Rooms} from "../Rooms.tsx";
import {Room} from "../Room.tsx";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Rooms />} />
            <Route path="/create" element={<RoomCreate />} />
            <Route path="/game" element={<Room />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
