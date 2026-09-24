import { Currency } from '../types';

export function formatPrice(amountInUSD: number, currency: Currency): string {
  const converted = amountInUSD * currency.rate;
  if (currency.code === 'BDT') {
    return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
  }
  if (currency.code === 'JPY') {
    return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
  }
  if (amountInUSD < 1) {
    return `${currency.symbol}${converted.toFixed(3)}`;
  }
  if (amountInUSD >= 1000) {
    return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${currency.symbol}${converted.toFixed(2)}`;
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}
