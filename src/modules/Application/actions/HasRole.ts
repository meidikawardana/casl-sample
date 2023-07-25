export const hasRole = (roles: Array<object>, arg: string): boolean => {
  return !!roles.find((element: any) => element.name === arg)
}
