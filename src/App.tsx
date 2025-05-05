import FormRenderer from './components/FormRenderer'
import { schema, myFormSchema } from './lib/schema'
import { createGlobalStyle } from 'styled-components'

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
      <FormRenderer schema={schema} zodSchema={myFormSchema} />
    </>
  )

}

export default App
