import { ReactNode, useCallback, useRef, useState } from 'react'

import { CarModel, ModelsContext } from '../contexts/Models.context'

import { ModelOverlay } from './ModelOverlay'

type Props = {
  children: ReactNode
}

export function ModelsWrapper({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName),
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((model) => model.modelName === modelName) || null
      )
    },
    [registeredModels],
  )

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        getModelByName,
        unregisterModel,
        registerModel,
      }}
    >
      <main
        ref={wrapperRef}
        className="h-screen snap-y snap-mandatory overflow-y-scroll"
      >
        <div className="sticky inset-0">
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </div>

        {children}
      </main>
    </ModelsContext.Provider>
  )
}
