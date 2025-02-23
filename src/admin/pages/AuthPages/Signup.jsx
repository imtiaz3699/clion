import AuthLayout from './AuthPagesLayout'
import SignUpForm from '../../components/Auth/SignUpForm'

export default function SignUp() {
  return (
    <>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
