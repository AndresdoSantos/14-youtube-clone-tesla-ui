import { DefaultOverlayContent } from './DefaultOverlayContent'
import { ModelSection } from './ModelSection'
import { ModelsWrapper } from './ModelsWrapper'
import { UniqueOverlay } from './UniqueOverlay'

export function Page() {
  return (
    <div>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((item) => (
            <ModelSection
              key={item}
              modelName={item}
              className="colored"
              overlayNode={
                <DefaultOverlayContent
                  label={item}
                  description="Order online for delivery."
                />
              }
            />
          ))}
        </div>

        <div className="h-[15vh] bg-[#77e68c]" />

        <UniqueOverlay />
      </ModelsWrapper>
    </div>
  )
}
