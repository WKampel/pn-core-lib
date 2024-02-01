export type FormFieldType = 'DATE' | 'DROPDOWN' | 'LONG_TEXT' | 'RADIO' | 'SIGNATURE' | 'TEXT_AREA' | 'TEXT_INPUT' | 'TIME' | 'TITLE' | 'YES_NO'

export type FormFieldValueTypeMap = {
  DATE: Date
  DROPDOWN: string
  LONG_TEXT: string
  RADIO: string[]
  SIGNATURE: string
  TEXT_AREA: string
  TEXT_INPUT: string
  TIME: Date
  TITLE: never
  YES_NO: boolean
}

export const formFieldTypesWithRequired: FormFieldType[] = ['DATE', 'DROPDOWN', 'RADIO', 'TEXT_AREA', 'TEXT_INPUT', 'TIME', 'YES_NO']
export const formFieldTypesWithOptions: FormFieldType[] = ['DROPDOWN', 'RADIO']
