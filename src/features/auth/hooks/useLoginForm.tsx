import { useForm } from "react-hook-form";
import { LoginFormSchema, loginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginForm = () => {
  const form = useForm<LoginFormSchema>({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(loginFormSchema),
    });
  
    const onsubmit = (data: LoginFormSchema) => {
      console.log(data);
      alert('login sukses')
    }
    return { form, onsubmit };
}