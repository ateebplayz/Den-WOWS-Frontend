import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function BankProgram() {
  return (
    <div className={'w-full flex flex-col justify-center items-center pb-8'}>
      <h1 className={'text-primary/60 text-3xl font-black text-center'}>bank of wolves</h1>
      <h1 className={'text-xl font-light text-center'}>welcome to the bank of wolves! here to tame your every need.</h1>
      <Card className={'p-0 mt-4'}>
        <CardContent className={'text-white p-4'}>
          <h1><strong>Balance</strong> : $230.03</h1>
        </CardContent>
      </Card>
      <Card className={'p-0 mt-4'}>
        <CardContent className={'text-white p-4'}>
          <h1><strong>Net Worth</strong> : $230.03</h1>
        </CardContent>
      </Card>
      <h1 className={'text-primary/60 text-2xl mt-4 font-black text-center mt-8'}>bank statement</h1>
      <p className={'mt-4 text-sm text-white/50'}>No Transaction History Found</p>
      <h1 className={'text-primary/60 text-2xl mt-4 font-black text-center mt-8'}>stock profile</h1>
      <p className={'mt-4 text-sm text-white/50'}>No Owned Stocks Found</p>
    </div>
  )
}