import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const user = ref(projectAuth.currentUser);

/* the callback function gets called every time there is a authentication change
   _user represents the current user if there is one */
projectAuth.onAuthStateChanged(_user => {
  console.log('User state change. Current user is:', _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;