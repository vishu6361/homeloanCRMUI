import Input from "./form-items/Input";
import PrimaryButton from "./form-items/PrimaryButton";

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };

    const classes = {
        pageBody: 'h-screen flex bg-gray-bg1',
        formContainer:
            'w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16',
        formHeading: 'text-2xl  font-medium text-primary mt-4 mb-12 text-center',
        btnContainer: 'flex justify-center items-center mt-6',
    };
    return (
        <div className={classes.pageBody}>
            <div className={classes.formContainer}>
                <h1 className={classes.formHeading}>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <Input id='userName' label='User Name' type='text' placeholder='Your User Name' />
                    <Input id='password' label='Password' type='password' placeholder='Your Password' />

                    <div className={classes.btnContainer}>
                        {/* <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button> */}
                        <PrimaryButton type='submit'>Continue with Username</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;