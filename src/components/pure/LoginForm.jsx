import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Navigate } from 'react-router-dom';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Fomato de Email invalido').required('Email obligatorio'),
        password: Yup.string().required('Password requerido')
    }
)



const LoginForm = ({loged, fetching, onLogin}) => {

    const initialCredentials = {
            email: '',
            password: ''
        }

    return(
        <div>
            <h4>LogIn Formik</h4>
            <Formik
                initialValues={ initialCredentials}
                // Esquema de validacion de yup
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    //
                    onLogin(values.email, values.password);
                  }}
            >
                {props => {
                    const {values, touched, errors, isSubmitting, handleBlur, handleChange, handleSubmit} = props;

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="ejemplo@email.com" />
                            
                            <ErrorMessage name="email" />
                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="password" />
                           
                            <ErrorMessage name="password" />
                            <button type="submit">LogIn</button>
                            {fetching ? <p>Logueando tu usuario...Espera</p>: null}
                            {isSubmitting ? <p>Logueando tu usuario...</p>: null}

                            <div>
                                <h3>***Usuario para prueba de login</h3>
                                <p>"email": "eve.holt@reqres.in"</p>
                                <p>"password": "cityslicka"</p>
                            </div>
                        </Form>
                    )
                }}
                

            </Formik>
        </div>
    )
}

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
}

export default LoginForm;