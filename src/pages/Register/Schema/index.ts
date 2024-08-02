import { z } from 'zod';

export default z.object({
  name: z.string().min(1, 'O nome é obrigatório').trim().toLowerCase(),
  email: z
    .string()
    .min(1, 'O email é obrigatório')
    .email('Insira um email válido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});
