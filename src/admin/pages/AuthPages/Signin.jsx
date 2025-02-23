import AuthLayout from "./AuthPagesLayout";
import SigninForm from "../../components/Auth/SigninForm";

export default function SignIn() {
  return (
    <>
      <AuthLayout>
        <SigninForm />
      </AuthLayout>
    </>
  );
}
