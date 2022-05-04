import { useContext } from "react";
import { createContext } from "react";
import UserStore from "./userStore";

interface UStore{
    userStore: UserStore
}

export const ustore: UStore = {
    userStore: new UserStore()
}

export const UStoreContext = createContext(ustore);

export function useUStore() {
    return useContext(UStoreContext);
}