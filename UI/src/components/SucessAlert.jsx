import Swal from "sweetalert2";

export const showSuccessAlert = (message) => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
