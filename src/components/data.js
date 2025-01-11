import { toast, Slide } from "react-toastify";

const generateUniqueId = () => Math.floor(Math.random() * 100000) + 1;
export const UniqueIdFn = (task) => {
  let newId;
  do {
    newId = generateUniqueId();
  } while (task.some(({ id }) => id === newId));
  return newId;
}

export const toastEvent = (type, data) => {
  toast[type](data, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  })
}