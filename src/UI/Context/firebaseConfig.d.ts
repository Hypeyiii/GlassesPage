// src/types/firebaseConfig.d.ts

declare module 'firebaseConfig' {
    export interface FirebaseConfig {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
      measurementId?: string;
    }
  
    const firebaseConfig: FirebaseConfig;
    export default firebaseConfig;
  }
  