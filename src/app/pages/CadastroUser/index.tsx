// import { Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { FormComponent } from "../../components/Form";

interface UserFormValues {
    nome: string;
    email: string;
    senha: string;
  }

const fields = [
    {
        label: "Nome",
        type: "text",
        name: "nome"
    },
    {
        label: "Email",
        type: "email",
        name: "email",
    },
    {
        label: "Senha",
        type: "password",
        name: "senha"
    }
]


export function CadastroUser(){

    const initialValues: UserFormValues = {
        nome: "",
        senha: "",
        email: "",
    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .min(2, 'O nome deve ter pelo menos dois caracteres')
            .required("Nome é um campo obrigatório"),
        email: Yup.string()
            .email('E-mail inválido')
            .required('E-mail é obrigatório'),
        senha: Yup.string()
            .min(6, 'Senha deve ter pelo menos 6 caracteres')
            .required('Senha é obrigatória')
    })

    const handleSubmit = (values: UserFormValues) => {
        console.log(values)
        axios.post("http://localhost:3000/register", values)
        .then((response) => {
            console.log(response)
        })
        .catch((response) => console.log(response))
    }

    return (
        <FormComponent 
            title="Cadastrar Usuario" 
            fields={fields}
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        />
    )
}