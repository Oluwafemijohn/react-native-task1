import {atom } from "recoil"
import {TODO_ATOM_KEY}  from "./constants"
import IUserInput from "../types/IUserInput"
export const useGlobalState = atom<IUserInput>({
    key: TODO_ATOM_KEY,
    default: {name:"", phoneNumber:"", age:""}
})