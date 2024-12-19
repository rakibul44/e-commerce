import  { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { otpApi } from "../redux/apis/otpApi";
import useAuth from "../hooks/useAuth";
import { usersApi } from "../redux/apis/usersApi";

const Register = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const  navigate = useNavigate();
  const [sendOtp] =  otpApi.useSendOtpMutation();
  const [verifyOtp] =  otpApi.useVerifyOtpMutation();
  const { createUser } = useAuth();
  const [ createUsers ] =  usersApi.useCreateUsersMutation();



  // Send OTP to email
  const handleSendOtp = async (email) => {
    try {
      const response = await sendOtp({ email });
      console.log("send otp respone: ", response)
      if(!response.data.success ){
        return Swal.fire(
          {
            text: `${response?.data?.message}`,
            icon: "error",
          })
    }
      if (response.data.success) {
        Swal.fire("OTP Sent",  `${response?.data?.message}`, "success");
        setOtpSent(true);
        setStep(2); // Move to Step 2 after sending OTP
      } else {
        Swal.fire("Error", response.data.message, "error");
      }
    } catch (error) {
      console.log(error)
      Swal.fire("Error", "Could not send OTP", "error");
    }
  };

  // Verify OTP and register
  const handleRegister = async (data) => {
    if (!otpSent) {
      Swal.fire("Error", "Please send OTP first", "error");
      return;
    }
    try {
      const verifyOtpResponse = await verifyOtp({
        email: data.email,
        otp: data.otp,
      });
      if (!verifyOtpResponse.data.success) {
        Swal.fire("Error", "Invalid OTP", "error");
        return;
      }
      console.log("email and pass: ", data.email, data.password)

      const result = await createUser(data.email, data.password);

      const userInfo = {
        name: data?.fullName,
        email: data?.email,
        password: data?.password,
      };
      if (result?.user) {
        const res =  await createUsers(userInfo);
        if(res.success)
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset()
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0 py-12">
      <p className="text-center mb-2 text-sm text-blue-500">
        <Link to="/">Go To Home</Link>
      </p>
      <div className="max-w-md w-full mx-auto bg-white rounded-lg px-5 py-6 shadow-md">
        <form
          onSubmit={handleSubmit(
            step === 1 ? (data) => handleSendOtp(data.email) : handleRegister
          )}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          {step === 1 && (
            <>
              {/* Full Name */}
              <div className=" pb-4">
              <label className="  text-gray-600 bg-white px-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="block w-full bg-transparent border border-gray-300 rounded-md py-3 px-4 leading-normal focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your full name "
                  {...register("fullName", { required: "Full name is required" })}
                />
           
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className=" pb-4">
              <label className=" text-gray-600 bg-white px-2">
                  Email
                </label>

                <input
                  type="email"
                  className="block w-full bg-transparent border border-gray-300 rounded-md py-3 px-4 leading-normal focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email "
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
          
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                onClick={handleSubmit((data) => handleSendOtp(data.email))}
              >
                Next Step
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {/* OTP */}
              <div className=" pb-4">
              <label className=" text-gray-600 bg-white px-2">
                  OTP
                </label>
                <input
                  type="text"
                  className="block w-full bg-transparent border border-gray-300 rounded-md py-3 px-4 leading-normal focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter 6 digit otp "
                  {...register("otp", { required: "OTP is required" })}
                />
           
                {errors.otp && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.otp.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className=" pb-4">
              <label className=" text-gray-600 bg-white px-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full bg-transparent border border-gray-300 rounded-md py-3 px-4 leading-normal focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password "
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <span
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className=" pb-4">
              <label className=" text-gray-600 bg-white px-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block w-full bg-transparent border border-gray-300 rounded-md py-3 px-4 leading-normal focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Confirm your password "
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
         
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Register
              </button>
            </>
          )}
        </form>


        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
