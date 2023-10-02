import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  // this time, we create the error inside the exported function,
  // because every collection we interact with may want to have its own error
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = 'could not send the message';
    }
  };

  return { error, addDoc };
};

export default useCollection;