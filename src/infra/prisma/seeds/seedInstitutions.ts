import { PrismaClient } from '@prisma/client';

export async function seedInstitution(prisma: PrismaClient) {
  const institutions = [
    { name: 'Nubank', code: 'NU' },
    { name: 'Banco do Brasil', code: '001' },
    { name: 'Itaú', code: '341' },
  ];

  await prisma.institution.createMany({
    data: institutions,
    skipDuplicates: true
  });
}
