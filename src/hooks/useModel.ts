import { useCallback, useContext, useEffect } from 'react'

import { ModelsContext } from '../contexts/Models.context'

export function useModel(modelName: string) {
  const { getModelByName, registerModel, unregisterModel } =
    useContext(ModelsContext)

  useEffect(() => {
    return () => unregisterModel(modelName)
  }, [modelName, unregisterModel])

  const getModel = useCallback(() => {
    getModelByName(modelName)
  }, [getModelByName, modelName])

  return {
    getModel,
    registerModel,
  } as const
}
