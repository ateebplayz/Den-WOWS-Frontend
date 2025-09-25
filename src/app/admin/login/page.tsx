"use client"
import Image from "next/image";
import {LiaAsteriskSolid, LiaAtSolid, LiaGreaterThanSolid} from "react-icons/lia";
import {InputWithIcon} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = async () => {
    localStorage.setItem('adminUsername', username)
    localStorage.setItem('adminPassword', password)
    router.push('/admin')
  }
  return (
    <div className="flex justify-between items-center flex-col min-h-screen bg-black/10 bg-black/50">
      <div className={'w-full flex justify-end items-end flex-col p-16'}>
        <h1 className={'text-xl font-black'}><span className={'text-primary/60'}>markhors</span> den admin panel</h1>
        <h1 className={'text-5xl font-black'}>wolves of <span className={'text-primary/60'}>wall street</span>.</h1>
      </div>
      <div className={'flex flex-row justify-start items-stretch w-full p-16'}>
        <Image src={'/Logo-Alt.png'} width={150} height={100} alt={'logo'} className={'rounded-full border border-primary p-2'}/>
        <div className={'flex flex-grow justify-center ml-4 items-start flex-col'}>
          <div className={'flex justify-end items-end'}>
            <h1 className={'font-black text-3xl text-white/80'}>hello there</h1>
            <h1 className={'font-black ml-1 text-primary/40'}>admins only</h1>
          </div>
          <div className={'flex flex-row mt-2 gap-2 justify-start items-start'}>
            <InputWithIcon icon={<LiaAtSolid/>} onChange={(e) => setUsername(e.target.value)} placeholder={'username'}/>
            <InputWithIcon type={"password"} icon={<LiaAsteriskSolid/>} onChange={(e) => setPassword(e.target.value)} placeholder={'password'}/>
            <Button onClick={() => {
              login()
            }}><LiaGreaterThanSolid/></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
