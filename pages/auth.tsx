import { useCallback, useState } from 'react';
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => {
      const label = (currentVariant === 'login') ? 'register' : 'login';
      return label;
    })
  }, [])
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {(variant) === 'login' ? 'Login' : 'Sign up'}
            </h2>
            <div className="flex flex-col gap-4">
              <Input id="name" label="Username" type="username" onChange={(ev: React.BaseSyntheticEvent) => setName(ev.target.value)} value={name} />
              <Input id="email" label="Email" type="email" onChange={(ev: React.BaseSyntheticEvent) => setEmail(ev.target.value)} value={email} />
              <Input id="password" label="Password" type="password" onChange={(ev: React.BaseSyntheticEvent) => setPassword(ev.target.value)} value={password} />
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
              <p className="text-neutral-500 mt-12">
                First time visiting my Netflix clone?<br />
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">Create an account</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Auth;
