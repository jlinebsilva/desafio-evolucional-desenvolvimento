interface currencyProps {
    value: number | string
    currency: 'BRL' | string
}


export function formatCurrencyForBRL({ value, currency }: currencyProps) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency })
}