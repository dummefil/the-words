export const base64ToString = (string: string) => Buffer.from(string, 'base64').toString('ascii')
