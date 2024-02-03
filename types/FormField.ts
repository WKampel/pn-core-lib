export type FormFieldType = 'DATE' | 'DROPDOWN' | 'LONG_TEXT' | 'RADIO' | 'SIGNATURE' | 'TEXT_AREA' | 'TEXT_INPUT' | 'TIME' | 'TITLE' | 'YES_NO'
export type PatientResponseFormFieldType = Exclude<FormFieldType, 'LONG_TEXT' | 'TITLE'>

export function isPatientResponseFormFieldType(type: FormFieldType): type is PatientResponseFormFieldType {
  return type !== 'LONG_TEXT' && type !== 'TITLE'
}

export type FormFieldValueTypeMap = {
  DATE: Date | null
  DROPDOWN: string
  RADIO: string[]
  SIGNATURE: string
  TEXT_AREA: string
  TEXT_INPUT: string
  TIME: Date | null
  YES_NO: boolean | null
}

export const formFieldTypesWithRequired: FormFieldType[] = ['DATE', 'DROPDOWN', 'RADIO', 'TEXT_AREA', 'TEXT_INPUT', 'TIME', 'YES_NO']
export const formFieldTypesWithOptions: FormFieldType[] = ['DROPDOWN', 'RADIO']
