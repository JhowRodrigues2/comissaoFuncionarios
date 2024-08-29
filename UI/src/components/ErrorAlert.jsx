import Swal from "sweetalert2";

export const ErrorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Ops ... erro ao criar venda.",
    text: "",
  });
};
