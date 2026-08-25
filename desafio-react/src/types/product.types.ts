export interface ProductsProps {
    id: number
    nome: string
    categoria: string
    preco: number
    estoque: number
    ativo: boolean
}


export interface ProductFilters {
    page: number
    limit: number
    nome?: string
    categoria?: string
}