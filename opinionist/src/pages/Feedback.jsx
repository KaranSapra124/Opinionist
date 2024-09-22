import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const Feedback = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Enter Your Full Name!"),
    email: Yup.string()
      .email("Invalid Email Address!")
      .required("Enter Your Email!"),
    feedbackFile: Yup.mixed().required("File Is Required!"),
  });

  const handleSubmitFeedback = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("feedbackFile", values.feedbackFile);

    setSubmitting(true);
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/add-feedback`,
      formData, // Use FormData to handle file upload
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setSubmitting(false);
    toast.success(data?.message);
  };

  return (
    <div className="min-h-screen max-[700px]:p-4 flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          We Value Your Feedback!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your thoughts are important to us. Please take a moment to share your
          feedback.
        </p>

        <Formik
          initialValues={{ fullName: "", email: "", feedbackFile: null }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmitFeedback(values)}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name:
                </label>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address:
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="feedbackFile"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Feedback File:
                </label>
                <input
                  type="file"
                  name="feedbackFile"
                  onChange={(event) => {
                    setFieldValue("feedbackFile", event.currentTarget.files[0]);
                  }}
                  className="w-full text-gray-700 py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="feedbackFile"
                  component="div"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-gray-500 text-center mt-6">
          We appreciate you taking the time to help us improve our service!
        </p>
      </div>
    </div>
  );
};

export default Feedback;
