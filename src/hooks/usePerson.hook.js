import { useContext } from "react"
import { PersonContext } from "../contexts/PersonContextProvider";

export const usePerson = () => {
    const ctx = useContext(PersonContext);

    return [
        ctx.person,
        ctx.setPerson
    ]
}