import { z } from 'zod';

export default z.object({
  name: z.string().min(1, 'O campo nome é obrigatório'),
  model: z.string().min(1, 'O modelo é obrigatório'),
  year: z.string().min(1, 'O Ano do carro é obrigatório'),
  km: z.string().min(1, 'O KM do carro é obrigatório'),
  price: z.string().min(1, 'O preço é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  phone: z
    .string()
    .min(1, 'O Telefone é obrigatório')
    .refine((value) => /^(\d{11,12})$/.test(value), {
      message: 'Numero de telefone invalido.',
    }),
  description: z.string().min(1, 'A descrição é obrigatória'),
});
