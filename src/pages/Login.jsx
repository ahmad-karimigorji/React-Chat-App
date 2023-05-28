import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyFormikInput from "../component/FormikInput/MyFormikInput";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is Required"),
  password: Yup.string("Password is Required")
    .required("Email is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const Login = () => {
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
              <MyFormikInput type="text" name="email" placeholder="Email" />

              <MyFormikInput
                type="password"
                name="password"
                placeholder="Password"
              />

              <button type="submit"
                className={`w-full bg-blue-400 text-white rounded-md p-2 mt-2 mb-1 ${isValid ? '' : 'bg-gray-300'}`}
                disabled={!isValid}
              >
                Login
              </button>
              <div className="flex items-center mx-auto text-sm max-w-fit">
                <span className="text-slate-800">Not a member?</span>
                <a href="#" className="text-blue-400 p-1">Singup</a>
              </div>
            </Form>
          )}
        </Formik>
        <div className="w-8 h-8 text-xs font-bold flex items-center justify-center border rounded-full mx-auto text-slate-800 my-7">OR</div>
        <button className=" w-full flex items-center bg-blue-400 text-white rounded-md p-0.5">
            <span className="bg-white rounded-l-md p-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" className="w-8 h-8" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
            </span>
        <span className="flex-auto">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
