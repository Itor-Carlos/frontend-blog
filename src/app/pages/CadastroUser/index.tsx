import { FormUserContainer } from "./styles";
import { Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";

interface UserFormValues {
    nome: string;
    email: string;
    senha: string;
  }

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
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <FormUserContainer>
                    <h1>Cadastrar usuário</h1>
                    <Form>
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <Field type="text" name="nome" />
                            <ErrorMessage className="errorForm" name="nome" component={"div"} />
                        </div>
                        <div>
                            <label htmlFor="password">Senha:</label>
                            <Field type="password" name="senha" />
                            <ErrorMessage className="errorForm" name="senha" component={"div"} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage className="errorForm" name="email" component="div" />
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </Form>
            </FormUserContainer>
        </Formik>
    )
}