import { Request, Response } from "express";
import { ListInstitution } from "../../../core/institution/use-cases/ListInstitution";
import { PrismaInstitutionRepository } from "../../repositories/PrismaInstitutionRepository";

import prisma from "../../prisma";
const repository: PrismaInstitutionRepository = new PrismaInstitutionRepository(prisma);

export class InstitutionController {

  public static async list(req: Request, res: Response): Promise<Response | any> {
    
    try {
      
      const useCase = new ListInstitution(repository);
      const institutions = await useCase.execute();
  
      return res.status(200).json(institutions);

    } catch (error:any) {
      
      return res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        name: error.name,
        message: error.message,
      });
    }
  }
}
