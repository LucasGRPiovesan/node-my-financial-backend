import { ListInstitutionDTO } from "../dtos/ListInstitutionDTO";
import { IInstitutionsRepository } from "../repositories/IInstitutionsRepository";

export class ListInstitution {
  constructor(private institutionRepository: IInstitutionsRepository) {}

  async execute(): Promise<ListInstitutionDTO[]> {
    return await this.institutionRepository.findAll();
  }
}
