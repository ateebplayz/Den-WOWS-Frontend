import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog, DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Stock {
  name: string;
  prices: (number | null)[];
  price: number;
  oldPrice: number;
}

// Generate prices with 7 random values and 3 nulls
const generatePrices = (): (number | null)[] => {
  const randomPrices = Array.from({ length: 7 }, () =>
    parseFloat((Math.random() * 500 + 50).toFixed(2))
  );
  return [...randomPrices, null, null, null];
};

const stocks: Stock[] = [
  "ateeb sohail ltd",
  "isl ltd",
  "hyperbyte solutions",
  "lumina tech corp",
  "pixelstream media",
  "nova energy plc",
  "aurum digital",
  "echobank holdings"
].map(name => {
  const prices = generatePrices();
  return {
    name,
    prices,
    price: prices[6] || 0, // latest available
    oldPrice: prices[5] || 0
  };
});

const getPercentage = (price: number, old: number): string => {
  if (price > old) {
    return `+${(((price / old) * 100) - 100).toFixed(2)}%`;
  } else if (price < old) {
    return `-${(100 - ((price / old) * 100)).toFixed(2)}%`;
  } else return '0%';
};

export default function StockProgram() {
  return (
    <div className={'w-full flex flex-col justify-center items-center pb-8'}>
      <h1 className={'text-primary/60 text-3xl font-black text-center'}>wolves stock exchange</h1>
      <h1 className={'text-xl font-light'}>buy or sell. your ultimate demise</h1>
      <p className={'text-light text-center w-full mt-4 text-sm'}>
        welcome to the market! choose the stock you wanna interact with and it shall be yours to trade with!
      </p>
      <div className={'flex flex-row flex-wrap justify-center items-center w-full gap-2 mt-8'}>
        {stocks.map((stock, index) => {
          const chartData = stock.prices.map((price, i) => ({
            name: i + 1, // just a number (1 to 10)
            value: price,
          }));

          return (
            <Dialog key={index}>
              <form>
                <DialogTrigger asChild>
                  <Card className={'p-0 gap-0 text-white transition duration-500 hover:opacity-75 cursor-pointer'}>
                    <CardContent className={'p-3'}>
                      <h1 className={'text-sm font-light'}>{stock.name}</h1>
                      <h1 className={`text-xs font-light ${
                        stock.price > stock.oldPrice ? 'text-green-500' :
                          stock.price < stock.oldPrice ? 'text-red-500' : 'text-white'
                      }`}>
                        ${stock.oldPrice.toFixed(2)} -&gt; ${stock.price.toFixed(2)}
                      </h1>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] z-50">
                  <DialogHeader>
                    <DialogTitle className={'text-primary/60 font-black flex text-xl flex-col'}>
                      <span>buy {stock.name}</span>
                      <span className={`font-light text-white text-sm`}>
                        ${stock.price} <span className={`${
                        stock.price > stock.oldPrice ? 'text-green-500' :
                          stock.price < stock.oldPrice ? 'text-red-500' : 'text-white'
                      }`}>
                          ({getPercentage(stock.price, stock.oldPrice)})
                        </span>
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid focus:outline-none focus:ring-0 [&_*]:focus:outline-none [&_*]:focus:ring-0">
                    <ResponsiveContainer width="100%" height={300} className={'focus:outline-none focus:ring-0'}>
                      <LineChart data={chartData} className={'focus:outline-none focus:ring-0'}>
                        <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          stroke="#fff"
                          tickLine={false}
                          axisLine={true}
                          tick={{ fill: "#fff", fontSize: 12 }}
                        />
                        <YAxis stroke="#fff" />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-black text-white rounded-md p-2 text-sm shadow-md">
                                  <p className="font-semibold">headline {label}</p>
                                  <p>${payload[0].value}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                          cursor={{ stroke: 'transparent' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#ffdb5855" // Tailwind blue-500 (primary)
                          strokeWidth={2}
                          dot={{ r: 3, stroke: '#ffdb58', fill: '#ffdb58' }}
                          connectNulls={false}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <h1 className={'text-white/50 w-full text-center'}>headline #</h1>
                    <div className="grid gap-3 mt-4">
                      <Input placeholder={'# of shares to purchase'} type={"number"} />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className={'text-sm'} variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button className={'text-sm'} variant={'destructive'} type="submit">Sell</Button>
                    <Button className={'text-sm'} variant="secondary">Purchase</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}