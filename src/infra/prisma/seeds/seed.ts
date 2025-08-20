import prisma from '../index';
import { seedAsset } from './seedAssets';
import { seedAssetType } from './seedAssetTypes';
import { seedInstitution } from './seedInstitutions';
import { seedModulePermissions } from './seedModulePermissions';
import { seedModulePermissionsProfile } from './seedModulePermissionsProfile';
import { seedModules } from './seedModules';
import { seedPermissions } from './seedPermissions';

import { seedProfiles } from './seedProfiles';
import { seedTransaction } from './seedTransactions';
import { seedUsers } from './seedUsers';

async function main() {
  await seedProfiles(prisma);
  await seedUsers(prisma);
  await seedModules(prisma);
  await seedPermissions(prisma);
  await seedModulePermissions(prisma);
  await seedModulePermissionsProfile(prisma);
  await seedInstitution(prisma);
  await seedAssetType(prisma);
  await seedAsset(prisma);
  await seedTransaction(prisma);
}

main()
  .then(() => {
    console.log('✅ Database seeded!');
  })
  .catch((e) => {
    console.error('❌ Error on seed database:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
