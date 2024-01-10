'use client'
import axios from "axios";
import { BACKEND } from '@/config'
import { useRecoilState } from "recoil";
import { userState } from "@/store/atoms/user";
import { useEffect } from "react";
export default () => {
    const [user, setUser] = useRecoilState(userState);
    console.log("✅ getUser.tsx")
    const setUserStore = async () => {
        if (user.user) {
            console.log('✅ getUser.tsx', user)
            return;
        }
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log("🔴 getUser.tsx token", token);
                return
            };
            const getUser = await axios.get(`${BACKEND}/user/me`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log('✅ getUser.tsx', getUser.data);
            if (getUser.data) {
                setUser({
                    isLoading: false,
                    user: getUser.data
                });
            };
        } catch (error) {
            console.log("🔴 getUser.tsx", error);
        }
    }
    useEffect(() => {

        setUserStore()

    }, [])


    return null;
}