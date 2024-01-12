import { RootState } from "./";
import { Middleware } from "@reduxjs/toolkit";
export declare const socketMiddleware: Middleware<NonNullable<unknown>, // Most middleware do not modify the dispatch return value
RootState>;
