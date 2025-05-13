import { Styles as S } from '../components/FormStyles'

export interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'submit' | 'reset'
}

/** Primary UI component for user interaction */
export const Button = ({
  label,
  onClick,
  variant = 'submit'
}: ButtonProps) => {
  return (
    <S.Button
      type="button"
      onClick={onClick}
      $variant={variant}
    >
      {label}
    </S.Button>
  )
}
