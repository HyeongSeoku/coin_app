import {
  Atom,
  Avax,
  Bitcoin,
  BNB,
  Btcb,
  Busd,
  Cardano,
  ChainLink,
  Cro,
  Dai,
  DefaultCoin,
  Dogecoin,
  Dot,
  Ethereum,
  Hbtc,
  Hex,
  Ltc,
  Matic,
  Near,
  Paxg,
  Shib,
  Solana,
  Thr,
  Trx,
  Uni,
  Usdc,
  Usdt,
  Wbtc,
  Xrp,
} from 'assets/svgs'

interface ICoinProps {
  BTC: JSX.Element
  ETH: JSX.Element
  USDT: JSX.Element
  BNB: JSX.Element
  USDC: JSX.Element
  XRP: JSX.Element
  HEX: JSX.Element
  ADA: JSX.Element
  BUSD: JSX.Element
  SOL: JSX.Element
  DOGE: JSX.Element
  SHIB: JSX.Element
  WBTC: JSX.Element
  AVAX: JSX.Element
  DOT: JSX.Element
  MATIC: JSX.Element
  CRO: JSX.Element
  DAI: JSX.Element
  LTC: JSX.Element
  ATOM: JSX.Element
  LINK: JSX.Element
  NEAR: JSX.Element
  UNI: JSX.Element
  TRX: JSX.Element
  BTCB: JSX.Element
  THR: JSX.Element
  PAXG: JSX.Element
  HBTC: JSX.Element

  [key: string]: any
}

export const COIN_ICON: ICoinProps = {
  BTC: <Bitcoin />,
  ETH: <Ethereum />,
  USDT: <Usdt />,
  BNB: <BNB />,
  USDC: <Usdc />,
  XRP: <Xrp />,
  HEX: <Hex />,
  ADA: <Cardano />,
  BUSD: <Busd />,
  SOL: <Solana />,
  DOGE: <Dogecoin />,
  SHIB: <Shib />,
  WBTC: <Wbtc />,
  AVAX: <Avax />,
  DOT: <Dot />,
  MATIC: <Matic />,
  CRO: <Cro />,
  DAI: <Dai />,
  LTC: <Ltc />,
  ATOM: <Atom />,
  LINK: <ChainLink />,
  NEAR: <Near />,
  UNI: <Uni />,
  TRX: <Trx />,
  BTCB: <Btcb />,
  THR: <Thr />,
  PAXG: <Paxg />,
  HBTC: <Hbtc />,
}

export const DEFAULT_COIN_ICON = <DefaultCoin />
