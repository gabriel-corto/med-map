import { api } from "@/services/axios"

interface GetMedidicals {
  sucess: boolean
  response: {
    id_medicamento: string
    categoria: string
    nome_generico: string
    nome_comercial: string
    origem: string
    validade: Date
    quantidade_disponivel: number
    deposito: {
      firma_deposito: string
      logradouro: string
      rua: string
      numero_rua: number
      cidade: string
    }
    preco: number
    imagem: string
  }[]
  pagination: {
    totalItems: number
  }
}

export async function getMedicinals() {
  const response = await api.get<GetMedidicals>("/entity/deposit/medicines")
  const data = response.data

  return data
}
