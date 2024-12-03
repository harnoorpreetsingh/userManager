import { useNavigate } from 'react-router-dom';

const NotExists = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center border border-black m-12 p-8'>
      <h1 className='text-2xl font-bold' >404 - Page Not Found</h1>
      <p className='mt-6' >Sorry, the page you are looking for does not exist.</p>
      <button onClick={goToHome} className='bg-slate-500 text-white p-4 rounded-lg mt-6'>
        Go back to Home
      </button>
    </div>
  );
};

export default NotExists;
