import Joi from 'joi';

export const schema = Joi.object({
  nome: Joi.string().trim().required().messages({
    'string.empty': 'Nome é obrigatório'
  }),
  email: Joi.string().trim().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'Email é obrigatório',
    'string.email': 'Email inválido'
  }),
  senha: Joi.string().required().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$')).messages({
    'string.empty': 'Senha é obrigatória',
    'string.min': 'A senha deve ter no mínimo 8 caracteres',
    'string.pattern.base': 'A senha deve conter pelo menos um caractere minúsculo, um caractere maiúsculo e um numeral'
  }),
  confirmacaoSenha: Joi.any().valid(Joi.ref('senha')).required().messages({
    'any.only': 'A confirmação de senha deve ser idêntica à senha',
    'any.required': 'Confirmação de senha é obrigatória'
  })
});