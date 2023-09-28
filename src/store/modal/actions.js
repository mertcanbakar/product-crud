import { _setModal } from "."; 
import store from "..";

export const setModal = modal => store.dispatch(_setModal(modal))

