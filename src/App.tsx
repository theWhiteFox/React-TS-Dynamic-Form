import FormRenderer from './components/FormRenderer'
import { createGlobalStyle } from 'styled-components'
import { FormProvider } from './providers/useFormProvider'
import { uiSchema, validationZodSchema } from './lib/schema'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.2;
    font-weight: 400;
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <FormProvider schema={uiSchema} zodSchema={validationZodSchema}>
        <FormRenderer />
      </FormProvider>
    </>
  )

}

export default App
