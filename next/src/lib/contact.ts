import api from './api';
import { TokenContactFormData } from '../@types/form';

const sendContactForm = async (data: TokenContactFormData) => api.post('/contact', data, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default sendContactForm;
