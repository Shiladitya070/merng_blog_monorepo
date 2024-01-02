'use client';

import { loginType, loginZod } from "@blog_mern/common";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";

export default () => {
    const url = `${process.env.NEXT_PUBLIC_SERVER}/user/login`
    const { register,
        handleSubmit,
        formState: { errors, isSubmitted },
        reset } = useForm<loginType>({ resolver: zodResolver(loginZod) });
    console.log(errors)
    const onSubmit = async (data: loginType) => {
        console.log('📃', data);
        const res = await axios.post(url, data)
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
        }
        reset();
        redirect('/');
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        {...register('email')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"

                    />
                    {errors.email && (
                        <p className="text-red-500">{`${errors.email.message}`}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        {...register('password')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"

                    />
                    {errors.password && (
                        <p className="text-red-500">{`${errors.password.message}`}</p>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        disabled={isSubmitted}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};


