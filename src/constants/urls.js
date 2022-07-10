import { COINS, MARKETS } from "./entities";

const COIN_GECKO_BASE_URL = 'https://api.coingecko.com/api/v3';
const URL_API_MAPPING     = `${ COIN_GECKO_BASE_URL }/${ COINS }/${ MARKETS }`;

export default URL_API_MAPPING;