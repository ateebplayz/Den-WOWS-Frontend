"use client"
import Image from "next/image";
import {LiaAsteriskSolid, LiaAtSolid, LiaGreaterThanSolid} from "react-icons/lia";
import {InputWithIcon} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    const resp = await axios.post(`${serverUrl}/auth/login`, { username, password })

    if(resp.data.access_token) {
      localStorage.setItem('token', resp.data.access_token);
      router.push('/')
    } else {
      setError(true)
      new Promise(resolve => setTimeout(resolve, 1000)).then(() => setError(false))
    }
    setLoading(false)
  }
  return (
    <div className={`flex justify-between items-center flex-col min-h-screen transition duration-500 ${error ? 'bg-black/80' : 'bg-black/50'}`}>
      <div className={'w-full flex justify-end items-end flex-col p-16'}>
        <h1 className={'text-xl font-black'}><span className={"transition duration-500 " + (error ? 'text-red-700/75' : 'text-primary/60')}>markhors</span> den</h1>
        <h1 className={'text-5xl font-black'}>wolves of <span className={"transition duration-500 " + (error ? 'text-red-700/75' : 'text-primary/60')}>wall street</span>.</h1>
      </div>
      <div className={'flex flex-row justify-start items-stretch w-full p-16'}>
        <Image src={'/Logo-Alt.png'} width={150} height={100} alt={'logo'} className={`transition duration-500 rounded-full border ${error ? 'border-red-700/75' : 'border-primary'} p-2`}/>
        <div className={'flex flex-grow justify-center ml-4 items-start flex-col'}>
          <div className={'flex justify-end items-end'}>
            <h1 className={`transition duration-500 font-black text-3xl ${error ? 'text-red-700/75' : 'text-white/80'}`}>hello there</h1>
            <h1 className={`transition duration-500 font-black ml-1 ${error ? 'text-red-700/75' : 'text-primary/40'}`}>need help?</h1>
          </div>
          <div className={`transition duration-500 flex flex-row mt-2 gap-2 justify-start items-start ${loading && 'pointer-events-none opacity-50'}`}>
            <InputWithIcon onChange={(e) => setUsername(e.target.value)} icon={<LiaAtSolid/>} placeholder={'username'}/>
            <InputWithIcon onChange={(e) => setPassword(e.target.value)} type={"password"} icon={<LiaAsteriskSolid/>} placeholder={'password'}/>
            <Button onClick={login}><LiaGreaterThanSolid/></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
