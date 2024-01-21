import OpenAI from 'openai';
import { OPEN_AI } from '../config/setup-config';

const openai = new OpenAI({
  apiKey: OPEN_AI.API_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;