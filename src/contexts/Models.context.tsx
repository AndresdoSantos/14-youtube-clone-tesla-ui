import { ReactNode, RefObject, createContext } from 'react'

export type CarModel = {
  modelName: string
  overlayNode: ReactNode
  sectionRef: RefObject<HTMLElement>
}

type ModelsContextProps = {
  wrapperRef: RefObject<HTMLElement>
  registeredModels: CarModel[]
  registerModel(model: CarModel): void
  unregisterModel(modelName: string): void
  getModelByName(modelName: string): CarModel | null
}

export const ModelsContext = createContext({} as ModelsContextProps)
