import { PrismaClient } from "@prisma/client";
import { IInstitutionsRepository } from "../../core/institution/repositories/IInstitutionsRepository";
import { ListInstitutionDTO } from "../../core/institution/dtos/ListInstitutionDTO";

export class PrismaInstitutionRepository implements IInstitutionsRepository {

  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<ListInstitutionDTO[]> {
    
    const data:ListInstitutionDTO[] = await this.prisma.institution.findMany({
      select: {
        uuid: true,
        name: true,
        code: true,
        logoUrl: true,
        balance: true,
        createdAt: true
      },
      where: {
        deletedAt: null
      }
    });

    return data;
  }
}
