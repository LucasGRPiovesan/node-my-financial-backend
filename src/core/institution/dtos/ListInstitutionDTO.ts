export interface ListInstitutionDTO {
  uuid: string;
  name: string;
  code?: string | null;
  logoUrl?: string | null;
  balance: Number;
  createdAt?: Date;
}
