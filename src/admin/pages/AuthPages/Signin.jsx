import PageMeta from "../../components/PageMeta/PageMeta";
import AuthLayout from "./AuthPagesLayout";
import SigninForm from "../../components/Auth/SigninForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="React.js SignIn Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SigninForm />
      </AuthLayout>
    </>
  );
}
