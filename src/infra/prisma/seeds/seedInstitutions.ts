import { PrismaClient } from '@prisma/client';

export async function seedInstitution(prisma: PrismaClient) {
  const institutions = [
    {
      name: 'Nubank',
      code: 'NU',
      logoUrl: 'https://logo.clearbit.com/nubank.com.br',
      balance: 820075,
    },
    {
      name: 'Banco do Brasil',
      code: '001',
      logoUrl: 'https://logo.clearbit.com/bb.com.br',
      balance: 1500050,
    },
    {
      name: 'Itaú',
      code: '341',
      logoUrl: 'https://logo.clearbit.com/itau.com.br',
      balance: 1540020,
    },
  ];

  await prisma.institution.createMany({
    data: institutions,
    skipDuplicates: true
  });
}
