import create from "zustand";
import { devtools, redux } from "zustand/middleware";
const initialState = {
  user: { token: "" },
  messages: [],
  topLikedMessages: [],
  message: [],
  count: 5,
  toggleNewMessage: true,
  about: "",

  videoTitle: "",
  videoId: "",
  quizID: "",
};

export const STORE_LOGIN = "STORE_LOGIN";
export const STORE_LOGOUT = "STORE_LOGOUT";
export const STORE_CREATE_USER = "STORE_CREATE_USER";
export const STORE_UPDATE_USER = "STORE_UPDATE_USER";
export const STORE_GET_USERS_NAMES = "STORE_GET_USERS_NAMES";
export const STORE_GET_USER = "STORE_GET_USER";
export const STORE_GET_PICTURE = "STORE_GET_PICTURE";
export const STORE_SET_PICTURE = "STORE_SET_PICTURE";
export const STORE_GET_ALL_MESSAGES = "STORE_GET_ALL_MESSAGES";
export const STORE_GET_USER_MESSAGES = "STORE_GET_USER_MESSAGES";
export const STORE_GET_TOP_LIKED_MESSAGES = "STORE_GET_TOP_LIKED_MESSAGES";
export const STORE_CREATE_MESSAGE = "STORE_CREATE_MESSAGE";
export const STORE_DELETE_MESSAGE = "STORE_DELETE_MESSAGE";
export const STORE_ADD_LIKE = "STORE_ADD_LIKE";
export const STORE_REMOVE_LIKE = "STORE_REMOVE_LIKE";
//////////////////////////
export const STORE_GET_MESSAGES = "GET_MESSAGES_STORE";
export const STORE_COUNT = "ADD_COUNT";
export const STORE_HIDE_NEW_MESSAGE = "STORE_HIDE_NEW_MESSAGE";
export const STORE_TOGGLE_NEW_MESSAGE = "STORE_TOGGLE_NEW_MESSAGE";

export const STORE_VIDEO_ID = "STORE_VIDEO_ID";
export const STORE_VIDEO_TITLE = "STORE_VIDEO_TITLE";
export const STORE_QUIZ_ID = "STORE_QUIZ_ID";

const reducer = (state, action) => {
  switch (action.type) {
    case STORE_LOGIN:
      return { user: action.payload };
    case STORE_LOGOUT:
      return { user: {} };
    case STORE_CREATE_USER:
      return { newUser: action.payload };
    case STORE_UPDATE_USER:
      return { user: action.payload };
    case STORE_GET_USERS_NAMES:
      return console.log("TO DO");
    case STORE_GET_USER:
      return console.log("TO DO");
    case STORE_GET_PICTURE:
      return { gotPicture: action.payload }; //is this correct ??? i don't believe so
    case STORE_SET_PICTURE:
      return console.log("TO DO");
    case STORE_GET_ALL_MESSAGES:
      return { messages: action.payload };
    case STORE_GET_USER_MESSAGES:
      return { messages: action.payload };
    case STORE_GET_TOP_LIKED_MESSAGES:
      return { topLikedMessages: action.payload };
    case STORE_CREATE_MESSAGE:
      return { messages: action.payload };
    case STORE_DELETE_MESSAGE:
      return console.log("TO DO");
    case STORE_ADD_LIKE:
      return { like: action.payload };
    case STORE_REMOVE_LIKE:
      return { like: action.payload };
    //////////////////////////
    case STORE_COUNT:
      return { count: action.payload };
    case STORE_GET_MESSAGES:
      return { messages: action.payload };

    case STORE_TOGGLE_NEW_MESSAGE:
      return { toggleNewMessage: action.payload };

    case STORE_VIDEO_ID:
      return { videoId: action.payload };
    case STORE_VIDEO_TITLE:
      return { videoTitle: action.payload };
    case STORE_QUIZ_ID:
      return { quizID: action.payload };

    default:
      return state;
  }
};
export const useStore = create(devtools(redux(reducer, initialState)));
