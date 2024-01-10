export const BACKEND = process.env.NEXT_PUBLIC_SERVER || "";
if (!BACKEND) {
    console.log("🔴 BACKEND URL not found")
}
console.log("❤️ config", BACKEND)