import { defineStore } from "pinia";
import { IUser } from 'src/modules/Application/models/User/UserInterface'

const state = {
  user: {
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: null,
    roles: [],
  } as IUser,
  lastReadVersionId: null,
  appVersion: null,
  token: null,
  box_token: null,
  preferences: {
    location_id: [],
    client_id: null,
    sep_id: null,
    sel_header_id: null,
  },
};

const actions = {
  SET_USER_PREFERENCES(payload) {
    this.preferences = { ...payload };
  },
};

const getters = {
  isUserAuthenticated(state) {
    if (state.token !== null && !state.user.is_disabled) {
      return true
    }
    return false
  },
};

export const useAuthStore = defineStore("Auth", {
  state: () => {
    return state;
  },
  actions,
  getters,
  persist: true,
});
