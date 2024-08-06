import Swal from "sweetalert2";

export default class AlertService {
  static success(msg: string, title?: string) {
    Swal.fire({
      title: title ? title : "Success",
      text: msg,
      icon: "success",
    });
  }
  static error(msg: string, title?: string) {
    Swal.fire({
      title: title ? title : "Error",
      text: msg,
      icon: "error",
    });
  }
  static warning(msg: string, title?: string) {
    Swal.fire({
      title: title ? title : "Warning",
      text: msg,
      icon: "warning",
    });
  }
  static info(msg: string, title?: string) {
    Swal.fire({
      title: title ? title : "Information",
      text: msg,
      icon: "info",
    });
  }
}
