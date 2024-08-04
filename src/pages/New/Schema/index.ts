import { z } from 'zod';

export default z.object({
  name: z.string().min(1, 'O campo nome é obrigatório').trim().toUpperCase(),

  model: z.string().min(1, 'O modelo do carro é obrigatório'),
  year: z.string().min(1, 'O ano é obrigatório'),
  km: z.string().min(1, 'A quilometrem é obrigatório'),
  price: z.string().min(1, 'O preço é obrigatório'),
  city: z
    .string()
    .min(1, 'A cidade é obrigatória')
    .refine(
      (value) => /^[A-Za-z\s]{2,}$/.test(value),
      'A cidade deve conter apenas letras e espaços, sem acentos'
    ),
  phone: z
    .string()
    .min(1, 'O Numero de telefone é obrigatório')
    .refine(
      (value) => /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/.test(value),
      'O número de telefone deve estar no formato (99) 99999-9999.'
    ),
  description: z.string().min(1, 'A descrição é obrigatória'),
});
