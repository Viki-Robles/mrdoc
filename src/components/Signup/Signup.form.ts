import * as Yup from "yup";
import { passwordValidation } from "../../utils/passwordValidation/passwordValidation";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: passwordValidation,
  repeatPassword: Yup.string().when("password", {
    is: (val: string) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref("password")], "Both passwords need to be the same")
      .required("Required"),
  }),
});
