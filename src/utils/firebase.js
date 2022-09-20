import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCVRsLdVch_8shq5DyEZTCnh_iPAZL64bM',
	authDomain: 'vivero-herrera.firebaseapp.com',
	projectId: 'vivero-herrera',
	storageBucket: 'vivero-herrera.appspot.com',
	messagingSenderId: '1087466150066',
	appId: '1:1087466150066:web:ee80037ed80c7b9b1f91ab',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
