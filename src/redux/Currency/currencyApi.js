import { currencyApi } from "../../config/currencyApi";

export const fetchUsdEuroValues = async () => {
  const { data } = await currencyApi.get("bank/currency");
  const dollar = data.find(
    (currency) =>
      currency.currencyCodeA === 840 && currency.currencyCodeB === 980
  );
  const euro = data.find(
    (currency) =>
      currency.currencyCodeA === 978 && currency.currencyCodeB === 980
  );
  return { dollar, euro };
};
