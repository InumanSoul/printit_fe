export const parseDatabaseBoolean = (value: string | number | boolean) => {
  if (value === '1' || value === 1) {
    return true
  } else if (value === '0' || value === 0) {
    return false
  }
}

export const DatePickerTheme = {
  background: "bg-white dark:bg-neutral-800",
  todayBtn: "bg-rose-500 dark:bg-rose-700 hover:bg-rose-600 dark:hover:bg-rose-800",
  clearBtn: "bg-white dark:bg-neutral-800",
  icons: "bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700",
  text: "",
  disabledText: "bg-neutral-200 dark:bg-neutral-600 text-neutral-400 dark:text-neutral-500",
  input: "bg-white dark:bg-neutral-800 border-neutral-400 dark:border-neutral-700",
  inputIcon: "text-neutral-400 dark:text-neutral-50",
  selected: "bg-green-500 hover:bg-green-400 hover:bg-green-600 dark:hover:bg-green-800",
}

export const SelectTheme = (theme: any) => ({
  ...theme,
  borderRadius: 8,
  spacing:{
    baseUnit: 4,
    controlHeight: 40,
    menuGutter: 8,
  },
  colors: {
    ...theme.colors,
    primary: '#f43f5e',
    primary25: '#fff1f2',
  },
})

export const formatDateTime = (date: string) => {
  return new Date(date).toLocaleDateString('es-PY')
}