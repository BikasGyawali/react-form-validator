import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Signup = () => {
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup
          .string()
          .required("Please enter your email")
          .email("Please enter a valid email"),
        password: yup
          .string()
          .required("Please enter password")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="pt-10 pb-8 text-center font-bold text-slate-500 text-black flex flex-col items-center">
          Sign Up
          <div className="bg-white px-8 pt-6 pb-8 mb-4 h-400 w-96 flex flex-col items-center shadow-lg rounded">
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded py-2 px-3  w-80 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              <p className="text-red-500 center font-normal">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded py-2 px-3 w-80 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <p className="text-red-500 center font-normal">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded py-2 px-3 w-80 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <p className="text-red-500 center font-normal">
                <ErrorMessage name="password" />
              </p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
