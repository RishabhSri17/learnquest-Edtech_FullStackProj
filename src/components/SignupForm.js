import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
    });

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmpassword) {
            toast.error("Passwords do not match!")
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        console.log(accountData);
        navigate("/dashboard");
    }

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full h-full max-w-max">
                <button
                    onclick={() => setAccountType("student")}
                    className={`${accountType === "student"
                            ? "bg-richblack-900 text-richblack-5"
                            : "bg-transparent text-richblack-200 "
                        } py-2 px-5 rounded-full transition-all`} >Student</button>
                <button
                    onclick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor"
                            ? "bg-richblack-900 text-richblack-5"
                            : "bg-transparent text-richblack-200 "
                        } py-2 px-5 rounded-full transition-all`}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4 my-3">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={formData.firstname}
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            name="firstname"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />
                    </label>
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={formData.lastname}
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            name="lastname"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />
                    </label>
                </div>
                <label className="my-3 w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter Your Mail Id"
                        name="email"
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />
                </label>
                <div className="flex gap-x-4 my-3">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword1 ? "text" : "Password"}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            name="password"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />

                        <span onClick={() => setShowPassword1((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer z-10 ">
                            {showPassword1 ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword2 ? "text" : "Password"}
                            value={formData.confirmpassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            name="confirmpassword"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />

                        <span onClick={() => setShowPassword2((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer z-10">
                            {showPassword2 ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>

                <button className="w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900" type="submit" type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default SignupForm;
