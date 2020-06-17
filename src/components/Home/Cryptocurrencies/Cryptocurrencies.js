import React from "react"
import styled from "@emotion/styled"
import { H2 } from "../../Typography"
import { importAll } from "../../../utils"
import wallet from "./wallet.svg"

const HeroContainer = styled("div")`
  padding: 120px 0;
  background: white;
  display: flex;
  justify-content: center;
`

const Wrapper = styled("div")`
  max-width: 800px;

  p {
    font-size: 28px;
    font-weight: 100;
    text-align: center;
  }
`

const WalletAnimation = styled("div")``
const Coins = styled("div")``

const coins = importAll(require.context("./coins", false, /\.(png|jpe?g|svg)$/))

export default function Cryptocurrencies(props) {
  return (
    <HeroContainer>
      <Wrapper>
        <H2>One Name For All of Your Cryptocurrencies</H2>
        <p>
          No more copying and pasting long addresses. Whether it’s ETH, BTC, or
          others, use your ENS name to receive payments and store all of your
          addresses.
        </p>
        <WalletAnimation>
          <img src={wallet} />
          <Coins>
            {coins.map(coin => {
              return <img src={coin.src} />
            })}
          </Coins>
        </WalletAnimation>
      </Wrapper>
    </HeroContainer>
  )
}
