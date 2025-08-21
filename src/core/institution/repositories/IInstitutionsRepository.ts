import { ListInstitutionDTO } from "../dtos/ListInstitutionDTO";

export interface IInstitutionsRepository {
  findAll(): Promise<ListInstitutionDTO[]>;
}
