import { PrismaClient, TransactionType, Currency, TransactionStatus } from '@prisma/client';

export async function seedTransaction(prisma: PrismaClient) {
  const asset = await prisma.asset.findFirst({ where: { name: 'CDB Exemplo' } });
  if (!asset) throw new Error('Asset not found');

  const transactions = [
    {
      uuid_asset: asset.uuid,
      type: TransactionType.DEPOSIT,
      amount: 100000, // R$1000,00 em centavos
      currency: Currency.BRL,
      status: TransactionStatus.CONFIRMED,
      note: 'Aporte inicial',
    },
    {
      uuid_asset: asset.uuid,
      type: TransactionType.INTEREST,
      amount: 500, // R$5,00 de juros
      currency: Currency.BRL,
      status: TransactionStatus.CONFIRMED,
      note: 'Juros do mês',
    },
  ];

  await prisma.transaction.createMany({
    data: transactions,
    skipDuplicates: true,
  });
}
