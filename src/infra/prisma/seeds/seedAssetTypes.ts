import { PrismaClient } from '@prisma/client';

export async function seedAssetType(prisma: PrismaClient) {
  const assetTypes = [
    { name: 'Account', description: 'Bank account' },
    { name: 'Invoice', description: 'Invoice / Bill' },
    { name: 'CDB', description: 'Certificate of Bank Deposit' },
    { name: 'Fund', description: 'Investment Fund' },
    { name: 'Stock', description: 'Equity / Stock' },
  ];

  await prisma.assetType.createMany({
    data: assetTypes,
    skipDuplicates: true,
  });

  console.log('AssetTypes seeded!');
}
