import styled from 'styled-components'

const FormContainer = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  max-width: 560px;
`

const StyledForm = styled.form`
  background: lavender;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    margin-top: .4rem;
    color: #333;
  }
`

const FormRow = styled.div`
   display: flex;
   justify-content: space-between;
    padding: .5em;
`

interface UserIconWrapperProps {
  size?: string
  color?: string
}

const UserIconWrapper = styled.div<UserIconWrapperProps>`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
  height: ${props => props.size || '1.2em'};
  color: ${props => props.color || 'inherit'}; 
`

const FieldWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > * {
    margin: 0.1rem;
  }
`

const Label = styled.label`
  grid-column: 1;  
  font-weight: 500;
  color: #555;
  margin-right: 0.5rem; 
  text-align: left;

  &::after {
    content: ":";
  }
`

const CustomInput = styled.input`
  grid-column: 2;
  justify-self: end;   
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: .8rem;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`

const Input = styled.input`
 grid-column: 2;
 justify-self: end; 
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: .8rem;
  justify-self: end;
`

const SmallInput = styled.input`
  width: 6rem;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  gap: 1.5rem;
  font-size: .8rem;
`

const Select = styled.select`
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: .8rem;
  background-color: white;
  color: #333;
`

const Option = styled.option`
    background-color: white;
    color: #333;
    font-size: .8rem;
`

const Textarea = styled.textarea`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    min-height: 100px;
    background-color: #f9f9f9;

    &:focus {
        outline: none;
        border-color: #007bff;
        background-color: #fff;
    }

    &::placeholder {
        color: #888;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`

const ErrorText = styled.div`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.2rem;
   span {
    font-weight: bold;
  }
`

const SubmitRow = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 2rem;
`

const Button = styled.button<{ $variant: 'submit' | 'reset' }>`
  padding: 0.4rem .8rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: .8rem;
  transition: background-color 0.2s ease-in-out;

    background-color: ${({ $variant }) =>
    $variant === 'reset' ? '#ffa500' : '#28a745'};
    color: ${({ $variant }) =>
    $variant === 'reset' ? '#333' : '#fff'};

    &:hover {
        background-color: ${({ $variant }) =>
    $variant === 'reset' ? '#e69500' : '#218838'};
    }
`

const JsonOutput = styled.pre`
    background-color: #f4f4f9;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    font-family: "Courier New", Courier, monospace;
    font-size: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-width: 100%;
    overflow-x: auto;
    margin-top: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const Styles = {
  FormContainer,
  StyledForm,
  FormRow,
  UserIconWrapper,
  FieldWrapper,
  Label,
  Input,
  SmallInput,
  Select,
  Option,
  Textarea,
  ErrorText,
  SubmitRow,
  Button,
  CustomInput,
  JsonOutput
}