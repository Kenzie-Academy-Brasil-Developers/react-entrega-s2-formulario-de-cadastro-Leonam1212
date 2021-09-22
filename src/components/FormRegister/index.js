import { Button, TextField } from '@material-ui/core';
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { FormContainer } from "./style"
const FormRegister = ({setIsAuthenticated, setUser}) => {

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Nome é obrigatório").matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ  ]+$/, "Este campo deve conter apenas letras"),
        email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
        password: yup.string()
                     .min(8, "Mínimo de 8 dígitos")
                     .matches(
                        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
                        )
                     .required("Campo obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas devem corresponder"),

    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
            setUser(data)
            setIsAuthenticated(true)
            history.push("/profile")
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Faça seu cadastro</h1>
            
            <div>
                <TextField 
                    label = "Nome"
                    margin = "normal"
                    variant = "outlined"
                    size = "medium"
                    color = "secondary"
                    {...register("name")}
                    error = {!!errors.name} 
                    helperText = {errors.name?.message}
                />
            </div>
            <div>
                <TextField 
                    label = "E-mail"
                    margin = "normal"
                    variant = "outlined"
                    size = "medium"
                    color = "secondary"
                     {...register("email")}
                    error = {!!errors.email} 
                    helperText = {errors.email?.message}
                    />           
            </div>
            <div>
                <TextField 
                    label = "Senha"
                    margin = "normal"
                    variant = "outlined"
                    size = "medium"
                    color = "secondary"
                    type = "password"
                    {...register("password")}
                    error = {!!errors.senha} 
                    helperText = {errors.senha?.message}
                    
                    />
            </div>
            <div>
                <TextField 
                    label = "Confirmar senha"
                    margin = "normal"
                    variant = "outlined"
                    size = "medium"
                    color = "secondary"
                    type = "password"
                    {...register("confirmPassword")}
                    error = {!!errors.confirmPassword} 
                    helperText = {errors.confirmPassword?.message}
                    />
            </div>

            <Button type="submit"
                    variant = "contained"
                    size = "large">
                        Registrar
            </Button>
        </FormContainer>
    )
}

export default FormRegister