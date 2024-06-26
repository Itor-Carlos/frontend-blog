/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormContainer } from "./styles";
import * as Yup from 'yup';

interface Field{
    label: string;
    type: string;
    name: string;
}

interface FormProps{
    title: string;
    fields: Array<Field>;
    handleSubmit: (object?: any) => void;
    initialValues: object;
    validationSchema: Yup.Schema;
}

export const FormComponent = ({title,fields, handleSubmit, initialValues, validationSchema}: FormProps) => {
    return (
       <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
       >
            <FormContainer>
                <Form>
                    <h1>{title}</h1>
                    {fields.map((item) => 
                        <div className="field">
                            <label>{item.label}</label>
                            <Field type={item.type} name={item.name}/>
                            <ErrorMessage className="errorForm" name={item.name} component={"div"} />
                        </div>)
                    }
                    <button type="submit">Enviar</button>
                </Form>
            </FormContainer>
       </Formik>
    )
}