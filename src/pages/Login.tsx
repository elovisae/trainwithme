import { useForm } from "react-hook-form";
import EmailInput from "../components/shared/EmailInput";
import Header from "../components/shared/Header";
import PasswordInput from "../components/shared/PasswordInput";
import SubmitButton from "../components/shared/SubmitButton";

const Login = () => {
  const { watch, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = () => {
    console.log("first");
  };
  return (
    <>
      <Header></Header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/6 m-auto grid grid-cols-12 text-xl gap-y-6"
      >
        <EmailInput />
        <PasswordInput />
        <SubmitButton label="Log in" onClick={() => {}} />
      </form>
    </>
  );
};

export default Login;
