interface currencyProps {
    value: number | string
    currency?: 'BRL' | string
}


export function formatCurrencyForBRL({ value }: currencyProps) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}