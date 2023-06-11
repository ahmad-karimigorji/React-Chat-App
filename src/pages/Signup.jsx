import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyFormikInput from "../component/FormikInput/MyFormikInput";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  profile: ""
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .trim()
    .min(2, "should be 2 chars minimum"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div className="px-5 max-w-sm mx-auto mt-20">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={onSubmit}
        >
          {({ isValid }) => (
            <Form className="w-full">
              <MyFormikInput name="name" type="text" placeholder="name" />
              <MyFormikInput type="text" name="email" placeholder="Email" />

              <MyFormikInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <MyFormikInput
                type="password"
                name="passwordConfirm"
                placeholder="password confirm"
              />

              <div>
                <input type="file" name="profile" id="file" className="hidden" />
                <label htmlFor="file" className="flex items-center gap-x-2 ml-2 cursor-pointer mb-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 73.5 63.87"
                      id="camera" className="w-10"
                    >
                      <g data-name="Layer 2">
                        <path
                          fill="#b76a8a"
                          d="M68.5 17.87h-57v41a5 5 0 0 0 5 5h52a5 5 0 0 0 5-5v-36a5 5 0 0 0-5-5z"
                          opacity=".15"
                        ></path>
                        <rect
                          width="62"
                          height="46"
                          x="2.5"
                          y="8.87"
                          fill="none"
                          stroke="#6a80b9"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle
                          cx="33.5"
                          cy="35.87"
                          r="12.96"
                          fill="none"
                          stroke="#6a80b9"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="33.5"
                          cy="35.87"
                          r="4.96"
                          fill="#6a80b9"
                        ></circle>
                        <path
                          fill="none"
                          stroke="#6a80b9"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          d="M46.23 8.87H20.77l2-7.37h21.46l2 7.37z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#6a80b9"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                          d="M2.5 17.73h62"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-sm text-gray-400">Choose a Profile</span>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full rounded-md p-2 mt-2 mb-1 ${
                  isValid ? "bg-primary text-primary-content" : "bg-neutral text-neutral-content"
                }`}
                disabled={!isValid}
              >
                Sign up
              </button>
              <p className="text-base-content text-sm text-center">
                Have an account?{" "}
                <Link to="/" className="text-primary p-1">
                  Login
                </Link>{" "}
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
