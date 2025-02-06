import { io } from "socket.io-client";

const ENV = import.meta.env;
const BASE_URL = ENV.VITE_BASE_URL;

export const socket = io(BASE_URL, { autoConnect: false });
