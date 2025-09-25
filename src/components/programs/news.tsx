import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const oldArticles = [
  {
    title: "howlstreet bets backfire: 300 wolves cry in one day",
    headline: "headline #6",
    content:
      "i put everything into mooncoin and now i’m broke *and* bald,\" cried one furry investor. howlstreet traders blame the vibes. analysts recommend buying bark futures instead. but seriously, don't. this isn’t financial advice. or is it?",
  },
  {
    title: "grandma wolf wins arm wrestling contest, again",
    headline: "headline #5",
    content:
      "at 93 years young and powered by raw spite and ginger tea, grandma wolf remains undefeated. doctors say it’s \"medically improbable.\" ateeb stock rose 2% in solidarity. meanwhile, neighboring village reports mysterious bench thefts.",
  },
  {
    title: "wild howlers union threatens strike over poor moon visibility",
    headline: "headline #4",
    content:
      "\"we can't be expected to howl without clear lunar alignment,\" said union leader rufus. negotiations continue, but werewolves are preparing emergency howling zones. on unrelated note, arabia’s oil leaks have now reached the ocean. kaboom indeed.",
  },
  {
    title: "teen wolf opens lemonade stand, makes $3.5 million overnight",
    headline: "headline #3",
    content:
      "his secret? trading lemon futures on ateeb exchange ltd while offering free \"howl samples\" with every cup. SEC investigating, but the pup lawyered up with pack & pack LLP. economy's in shambles but we respect the grind.",
  },
  {
    title: "wolvesville bakery burns 347 loaves after power outage",
    headline: "headline #2",
    content:
      "the smell of toasty regret filled the streets today as howly’s bakery crisped every last loaf. residents are blaming the local utility company, who were last seen chasing squirrels. oil prices also up due to unrelated squirrel pipeline sabotage.",
  },
  {
    title: "mayor caught howling at moon during budget meeting",
    headline: "headline #1",
    content:
      "the mayor of wolvesville was caught howling mid-meeting last night when treasury numbers dipped below the lunar threshold. no one stopped him because frankly, it was majestic. meanwhile, crypto howls (aka howlcoin) is down 7% due to barkchain congestion.",
  },
];

export default function NewsProgram() {
  return (
    <div className={'w-full flex flex-col justify-center items-center'}>
      <h1 className={'text-primary/60 text-3xl font-black text-center'}>the wolves paper</h1>
      <h1 className={'text-xl font-light'}>the neighbourly wolv-ey gossip is here!</h1>
      <h1 className={'text-primary/60 mt-8 text-2xl font-black text-center'}>the latest news</h1>
      <Card className={'p-0 mt-4 w-full mt-4'}>
        <CardContent className={'text-white p-4'}>
          <h1 className={'font-black text-primary/60 text-xl'}>local wolf strikes - again!</h1>
          <h1 className={'font-light text-white'}>headline #7</h1>
          <h1 className={'font-light text-white text-sm'}>the local wolf has striked again imo you should invest in
            ateeb exchange ltd cause it looks like a really cool stock exchange. also arabia is suffering from oil leaks
            and hence oil prices go kabooooom. crazy news down here in wolves street. anyway that&lsquo;s it folks have
            a nice rest of your day</h1>
        </CardContent>
      </Card>
      <h1 className={'text-primary/60 mt-8 text-2xl font-black text-center'}>old news</h1>
      {oldArticles.map((article, index) => (
        <Card key={index} className={'p-0 mt-4 w-full'}>
          <CardContent className={'text-white p-4'}>
            <h1 className={'font-black text-primary/60 text-xl'}>{article.title}</h1>
            <h1 className={'font-light text-white'}>{article.headline}</h1>
            <h1 className={'font-light text-white text-sm'}>{article.content}</h1>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}