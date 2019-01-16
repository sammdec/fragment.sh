import styled from "styled-components"
import ReactAutoTextarea from "react-textarea-autosize"

export const Textarea = styled.textarea`
  display: block;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.gray[3]};
  font-size: ${p => p.theme.fontSizes[3]}px;
  width: 100%;
  resize: vertical;
  box-sizing: border-box;
  padding: ${p => p.theme.space[2]}px;
  &:disabled {
    color: ${p => p.theme.colors.gray[3]};
    cursor: not-allowed;
  }
`

export const AutoTextarea = styled(ReactAutoTextarea)`
  display: block;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.gray[3]};
  font-size: ${p => p.theme.fontSizes[3]}px;
  width: 100%;
  resize: vertical;
  box-sizing: border-box;
  padding: ${p => p.theme.space[2]}px;
  &:disabled {
    color: ${p => p.theme.colors.gray[3]};
    cursor: not-allowed;
  }
`

export const Input = styled.input`
  display: block;
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.gray[3]};
  font-size: ${p => p.theme.fontSizes[3]}px;
  padding: ${p => p.theme.space[2]}px;
  &:disabled {
    color: ${p => p.theme.colors.gray[3]};
    cursor: not-allowed;
  }
`
