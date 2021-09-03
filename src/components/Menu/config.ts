import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://swap.javaexchange.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://swap.javaexchange.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://swap.javaexchange.finance/pools'
  },
  {
    label: 'Launchpad',
    icon: 'NftIcon',
    href: 'http://swap.javaexchange.finance/jilo',
  },
  {
    label: 'Game',
    icon: 'TicketIcon',
    href: 'http://swap.javaexchange.finance/ComingSoon',
  },
  {
    label: 'NFT Marketplace',
    icon: 'InfoIcon',
    href: 'http://swap.javaexchange.finance/ComingSoon',
  },
  // {
  //   label: 'Presale',
  //   icon: 'NftIcon',
  //   href: 'http://perseus.finance/presale'
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'http://perseus.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x65dc57A9e458211774c82cfFeB70f83939742A59',
  //     },
  //   ]
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: "Whitepaper",
  //       href: "http://perseus.finance/uploads/Whitepaper.pdf",
  //     },
  //     {
  //       label: "Github",
  //       href: "https://github.com/",
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/',
  //     },
  //   ],
  // },
]

export default config
