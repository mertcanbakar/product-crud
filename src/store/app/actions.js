import { _setTheme } from "."; 
import store from "..";

export const setTheme = theme => store.dispatch(_setTheme(theme))

