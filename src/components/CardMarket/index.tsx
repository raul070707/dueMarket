import { CardMarket } from "./style"
import market from "../../Assets/market.svg"

export const CardMarketComponent = () => {
    return <CardMarket>
        <figure>
            <img src={market} alt="Mercado" />
        </figure>
        <div>
            <h2>Mercado</h2>
            <h3>Cidade - Estado - Endereço</h3>
        </div>
    </CardMarket>
}