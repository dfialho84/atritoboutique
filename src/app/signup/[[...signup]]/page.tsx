import { SignIn, SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
    const user = await currentUser();
    if (user) {
        redirect("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 py-8">
            <h1 className="text-5xl md:text-9xl font-andes">Atrito</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <SignUp />
                <SignIn />
            </div>
        </div>
    );
}
