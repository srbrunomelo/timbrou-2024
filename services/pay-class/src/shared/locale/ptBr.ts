export const ptBr: Record<string, unknown> = {
  validation: {
    required: "Campo obrigatório",
    min: "O campo deve ter no mínimo {min} caracteres",
    max: "O campo deve ter no máximo {max} caracteres",
    email: "O campo deve ser um email válido",
    phone: "O campo deve ser um telefone válido",
    date: "O campo deve ser uma data válida",
    boolean: "O campo deve ser um booleano válido",
    uuid: "O campo deve ser um UUID válido",
    enum: "O campo deve ser um dos seguintes valores: {keys}",
  },
  error: {
    "invalid-data": "Dados inválidos",
    "not-found": "Não encontrado",
    unauthorized: "Não autorizado",
    forbidden: "Proibido",
    "internal-server-error": "Erro interno do servidor",
    "service-unavailable": "Serviço não disponível",
    "gateway-timeout": "Tempo limite do gateway",
  },
} as const;
