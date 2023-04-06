import { useCallback, useState } from 'react';
import axios from 'axios';
import Input from "@/components/Input";
import { signIn } from 'next-auth/react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggleVariant = useCallback(() => {
    setIsLogin((currentVariant) => {
      return !currentVariant;
    })
  }, [])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', { email, name, password });
    } catch (error) {
    }
  }, [email, name, password]);

  const login = useCallback(async () => {

    try {
      const response = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/' });
    } catch (error) {
    }
  }, [email, password])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {(isLogin) ? 'Login' : 'Sign up'}
            </h2>
            <div className="flex flex-col gap-4">
              <Input id="email" label={(isLogin) ? "Username or Email" : "Email"} type="email" onChange={(ev: React.BaseSyntheticEvent) => setEmail(ev.target.value)} value={email} />
              {(!isLogin) && (
                <Input id="name" label="username" type="text" onChange={(ev: React.BaseSyntheticEvent) => setName(ev.target.value)} value={name} />
              )}
              <Input id="password" label="Password" type="password" onChange={(ev: React.BaseSyntheticEvent) => setPassword(ev.target.value)} value={password} />
              <button onClick={(isLogin) ? (login) : (register)} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{(isLogin) ? 'Login' : 'Sign up'}</button>
              <p className="text-neutral-500 mt-12">
                {
                  (isLogin) ? (
                    <>
                      First time visiting my Netflix clone?<br />
                      <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">Create an account</span>
                    </>
                  ) : (
                    <>
                      Already have an account?<br />
                      Sign in <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">HERE</span>
                    </>
                  )
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Auth;
