// import { Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { FormComponent } from "../../components/Form";
import { useNotificationBanner } from '../../hooks/useNotificationBanner';
import { NotificationBanner } from '../../components/NotificationBanner';
import { redirect } from 'react-router-dom';

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
    const { visible, message, type, showNotification } = useNotificationBanner({ duration: 3000 });
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
        axios.post("http://localhost:3000/register", values)
        .then((response) => {
            if(response.status === 200) showNotification("New user registered successfully!", 'success')
        })
        .catch((response) => {
            if(response.response.status === 400) showNotification(response.response.data.error, 'error')
        })
    }

    return (
        <>
            <FormComponent 
                title="Cadastrar Usuario" 
                fields={fields}
                handleSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            />
            <NotificationBanner type={type} message={message} visible={visible}/>
        </>
    )
}