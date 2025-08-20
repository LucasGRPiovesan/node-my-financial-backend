import { PrismaClient } from '@prisma/client';

export async function seedAsset(prisma: PrismaClient) {
  
  const nubank = await prisma.institution.findFirst({ where: { name: 'Nubank' } });
  const cdbType = await prisma.assetType.findFirst({ where: { name: 'CDB' } });

  if (!nubank || !cdbType) throw new Error('Institution or AssetType not found');

  const assets = [
    {
      name: 'CDB Exemplo',
      description: 'CDB de teste do Nubank',
      uuid_institution: nubank.uuid,
      uuid_asset_type: cdbType.uuid,
    },
  ];

  await prisma.asset.createMany({
    data: assets,
    skipDuplicates: true,
  });
}
