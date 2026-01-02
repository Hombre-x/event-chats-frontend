import { createRoot } from 'react-dom/client'  
import { setVeauryOptions } from 'veaury'  
  
export default defineNuxtPlugin(() => {  
  setVeauryOptions({  
    react: {  
      createRoot  
    }  
  })  
})