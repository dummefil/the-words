type RoomsType = {
    list: null | RoomType[];
    current: null | RoomType;
};
export declare const updateRooms: import("@reduxjs/toolkit").ActionCreatorWithPayload<RoomType[], "room/updateRooms">, updateCurrentRoom: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "room/updateCurrentRoom">;
declare const _default: import("redux").Reducer<RoomsType>;
export default _default;
