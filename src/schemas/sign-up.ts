import { Control, useForm, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export const signUpScheme = z.object({
  company: z.string().min(1, 'Firma inválido!'),
  nif: z.string().min(10, 'NIF inválido!'),
  entity: z.enum(['pharmacy', 'deposit'], { message: '' }),
  city: z.string().min(3, 'Preenha este campo!'),

  street: z.string({ message: 'Preencha este campo!' }),
  streetNumber: z.number({ message: 'Preencha este campo!' }),
  logradouro: z.string({ message: 'Preencha este campo!' }),
  latitude: z.number({ message: 'Coordenada inválida!' }),
  longitude: z.number({ message: 'Coordenada inválida!' }),

  phone: z.number({ message: 'Telefone inválido!' }).min(9),
  email: z.string().email('E-mail inválido!'),
  password: z
    .string()
    .min(6, 'Introduza uma palavra-passe de no mínimo 6 dígitos!'),
});

export type SignUpData = z.infer<typeof signUpScheme>;

export interface FormStepProps {
  register: UseFormRegister<SignUpData>;
  errors: ReturnType<typeof useForm>['formState']['errors'];
  control?: Control<SignUpData>;
}
