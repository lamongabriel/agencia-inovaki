export interface ContactFormData {
	name: string
	organization: string
	email: string
	tel: string
	subject: string
	message: string
}
export interface TokenContactFormData extends ContactFormData {
  // token: string
}
