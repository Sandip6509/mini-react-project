import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPasswordForm = () => {
    const history = useNavigate();
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/api/forgot-password',{email});
            setMessage(response.data.message);
            setEmail('');
            history.push('/reset-confirmation');
        } catch (error) {
            setMessage('Error occurred while resetting password.');
        }
    }
    return (
        <div className='flex place-content-center'>
            <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center mt-2'>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className='p-4'>
                        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Email:</label>
                        <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    {message && <p className='text-red-500'>{message}</p>}
                    <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5 mb-2 '>Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordForm