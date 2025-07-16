import { SignIn, SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const signUpAppearance = {
    elements: {
        footerAction: {
            display: "none",
        },
    },
};

export default async function SignUpPage() {
    const user = await currentUser();
    if (user) {
        return redirect("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 py-8">
            <h1 className="text-5xl md:text-9xl font-andes">Atrito</h1>
            <div className="flex flex-col md:flex-row items-start justify-center gap-8">
                <SignUp signInUrl="" appearance={signUpAppearance} />
                <div className="text-3xl font-bold mt-20">Ou</div>
                <SignIn />
            </div>
        </div>
    );
}
