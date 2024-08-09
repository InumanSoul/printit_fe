export let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export let PYGuaranies = new Intl.NumberFormat('es-PY', {
  style: 'currency',
  currency: 'PYG',
});

export const formatCurrency = ({ amount, currency }: {amount: number, currency: 'USD' | 'PYG'}) => {
  const availableCurrencies = {
    'USD': USDollar,
    'PYG': PYGuaranies,
  }

  return availableCurrencies[currency].format(amount)
}