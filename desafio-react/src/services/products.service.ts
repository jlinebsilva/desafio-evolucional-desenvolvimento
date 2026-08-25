import type { ProductsProps } from '../types/product.types'


const URL_API = 'http://localhost:3001'


export async function getAllProducts(): Promise<ProductsProps[]> {
    try {
        const response = await fetch(`${URL_API}/produtos`)

        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.status}`)
        }

        const products = await response.json() as ProductsProps[]

        return products

    } catch (error) {
        console.error('Não foi possível buscar os produtos.', error)
        throw error
    }
}