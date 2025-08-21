import { Asset } from "../../asset/entities/Asset"
import { v4 as uuidv4 } from "uuid"

export class Institution {
  public readonly uuid: string
  public name: string
  public code?: string
  public readonly createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date
  public assets: Asset[]

  constructor(props: {
    name: string
    code?: string
    uuid?: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
    assets?: Asset[]
  }) {
    this.uuid = props.uuid ?? uuidv4()
    this.name = props.name
    this.code = props.code
    this.createdAt = props.createdAt ?? new Date()
    this.updatedAt = props.updatedAt ?? new Date()
    this.deletedAt = props.deletedAt
    this.assets = props.assets ?? []
  }

  rename(newName: string) {
    if (!newName) throw new Error("O nome da instituição não pode ser vazio")
    this.name = newName
    this.touch()
  }

  setCode(newCode: string) {
    this.code = newCode
    this.touch()
  }

  softDelete() {
    this.deletedAt = new Date()
    this.touch()
  }

  addAsset(asset: Asset) {
    this.assets.push(asset)
    this.touch()
  }

  removeAsset(assetUuid: string) {
    this.assets = this.assets.filter(a => a.uuid !== assetUuid)
    this.touch()
  }

  private touch() {
    this.updatedAt = new Date()
  }
}
