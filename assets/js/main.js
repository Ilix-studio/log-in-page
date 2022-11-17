/*=============== SHOW HIDDEN - PASSWORD ===============*/

const showHiddenPass = (inputPass, inputIcon) => {
  const input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};
showHiddenPass("input-pass", "input-icon");

//if input type is password change to text else change to password
