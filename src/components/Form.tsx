import { ErrorMessage, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string().required("โปรดกรอกชื่อจริง"),
  surname: Yup.string().required("โปรดกรอกนามสกุล"),
  username: Yup.string().required("โปรดกรอกชื่อผู้ใช้"),
  email: Yup.string().email("อีเมลไม่ถูกต้อง").required("โปรดกรอกอีเมล"),
  password: Yup.string().required("โปรดกรอกรหัสผ่าน"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "รหัสผ่านต้องตรงกัน"
  ),
});

export const SgcuForm = () => {
  const [status, setStatus] = React.useState("");

  return (
    <div className="flex flex-col px-10 pt-10 pb-2 mb-4 space-y-5 bg-white border border-pink-500 rounded-lg md:px-14">
      <h3 className="text-5xl font-semibold">ลงทะเบียน</h3>
      <p className="pb-3 text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</p>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={FormSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          const res = await fetch("http://isd-test.cucheck.in/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          switch (res.status) {
            case 201:
              {
                setStatus("สมัครสำเร็จ");
                resetForm();
              break;
              }
            case 400:
              setStatus("ข้อมูลไม่ครบถ้วน");
              break;
            case 409:
              setStatus("ชื่อผู้ใช้หรืออีเมลนี้มีผู้ใช้อยู่แล้ว");
              break;
            default:
              setStatus("ข้อมูลไม่ถูกต้อง");
              break;
          }

          console.log(res.status);
          const data = await res.json();
          console.log(data);
 
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          values,
          isSubmitting,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full pb-2 md:w-80">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-500 border rounded shadow appearance-none focus:border-pink-500"
                type="text"
                placeholder="ชื่อ"
                name="name"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="my-2 text-red-400">{errors.name}</p>
              ) : (
                <div className="h-10" aria-hidden></div>
              )}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-500 border rounded shadow appearance-none focus:border-pink-500 "
                type="text"
                placeholder="นามสกุล"
                name="surname"
                onChange={handleChange}
                value={values.surname}
                onBlur={handleBlur}
              />
              {errors.surname && touched.surname ? (
                <p className="my-2 text-red-400">{errors.surname}</p>
              ) : (
                <div className="h-10" aria-hidden></div>
              )}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-500 border rounded shadow appearance-none focus:border-pink-500 "
                type="text"
                placeholder="ชื่อผู้ใช้"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="my-2 text-red-400">{errors.username}</p>
              ) : (
                <div className="h-10" aria-hidden></div>
              )}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-500 border rounded shadow appearance-none focus:border-pink-500 "
                type="email"
                placeholder="อีเมล"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="my-2 text-red-400">{errors.email}</p>
              ) : (
                <div className="h-10" aria-hidden></div>
              )}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-500 border rounded shadow appearance-none focus:border-pink-500 "
                type="password"
                placeholder="รหัสผ่าน"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="my-2 text-red-400">{errors.password}</p>
              ) : (
                <div className="h-10" aria-hidden></div>
              )}
              <input
                className="w-full px-3 py-2 leading-tight text-gray-500 border rounded shadow appearance-none focus:border-pink-500"
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="my-2 text-red-400">{errors.confirmPassword}</p>
              ) : (
                <div className="h-10" aria-hidden></div>
              )}
              
              <button
                className="w-full px-4 py-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-700 focus:outline-none"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              {status ? (<p className="my-2 text-red-400">{status}</p>) : (<div className="h-8" aria-hidden></div>)}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
