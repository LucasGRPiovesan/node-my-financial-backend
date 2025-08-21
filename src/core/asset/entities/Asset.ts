import { v4 as uuidv4 } from "uuid"

export class Asset {
  public readonly uuid: string
  public name: string
  public code?: string
  public value?: number
  public readonly createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: {
    name: string
    code?: string
    value?: number
    uuid?: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
  }) {
    this.uuid = props.uuid ?? uuidv4()
    this.name = props.name
    this.code = props.code
    this.value = props.value
    this.createdAt = props.createdAt ?? new Date()
    this.updatedAt = props.updatedAt ?? new Date()
    this.deletedAt = props.deletedAt
  }

  // === Regras de negócio possíveis ===

  rename(newName: string) {
    if (!newName) throw new Error("O nome do asset não pode ser vazio")
    this.name = newName
    this.touch()
  }

  setCode(newCode: string) {
    this.code = newCode
    this.touch()
  }

  setValue(newValue: number) {
    if (newValue < 0) throw new Error("O valor do asset não pode ser negativo")
    this.value = newValue
    this.touch()
  }

  softDelete() {
    this.deletedAt = new Date()
    this.touch()
  }

  private touch() {
    this.updatedAt = new Date()
  }
}
