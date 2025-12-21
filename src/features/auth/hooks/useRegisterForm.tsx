import { useForm } from "react-hook-form";
import { RegisterFormSchema, registerFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient, getErrorMessage } from "@/lib/auth-client";
import { toast } from "sonner";
import { LOCAL_STORAGE_BETTER_TOKEN_KEY } from "../constants/localStorage";

export const useRegisterForm = () => {
  const form = useForm<RegisterFormSchema>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerFormSchema),
  });

  const onsubmit = async (data: RegisterFormSchema) => {
    try {
      const { error, data: authResponseData } = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
      });

      if (error?.code) {
        toast.error(getErrorMessage(error.code));
        return;
      }

      if (authResponseData?.token) {
        localStorage.setItem(
          LOCAL_STORAGE_BETTER_TOKEN_KEY,
          authResponseData.token
        );
        toast.success("Registration successful");
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return { form, onsubmit };
};
