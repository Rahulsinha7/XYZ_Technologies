import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "../axios/axiosclient";

function Contact() {
  const {    
    register,  
    handleSubmit,  
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post("/user/contact", data);

      if (res.data.success) {
        setMessage("We have received your message. We'll get back to you soon!");
        reset();
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Server error. Please check your connection.";
      setMessage(` ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <p className="text-error text-sm mt-1">Full name is required.</p>
            )}
          </div>

       
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("emailId", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.emailId && (
              <p className="text-error text-sm mt-1">
                {errors.emailId.message}
              </p>
            )}
          </div>

       
          <div>
            <label className="label">
              <span className="label-text font-semibold">Phone No.</span>
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
              {...register("phonenumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phonenumber && (
              <p className="text-error text-sm mt-1">
                {errors.phonenumber.message}
              </p>
            )}
          </div>

       
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full cursor-pointer hover:text-blue-600 transition-all duration-250 ease-in-out"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>


        {message && (
          <p
            className={`text-center mt-4 ${
              message.startsWith("✅")
                ? "text-green-600"
                : "text-red-600 font-semibold"
            }`}
          >
            {message}
          </p>
        )}

    
        <div className="divider my-6 text-center">OR</div>

   
        <div className="text-center space-y-2">
          <p className="font-semibold text-lg"> Reach me directly</p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto: contact@xyztech.com"
              className="link link-primary"
            >
               contact@xyztech.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+919xxxxxxxx" className="link link-primary">
              +91 9xxxxxxxxx
            </a>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Contact;