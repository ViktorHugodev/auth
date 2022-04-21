import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore/lite';
// import api from '../services/youtube';

interface UserProps {
	uid: string;

	displayName: string;
	email: string;
	photoURL: string;
	fullname: string;
}
interface VideoProps {
	addAt: string;
	description: string;
	displayName: string;
	fullName: string;
	publishedAt: string;
	title: string;
	userId: string;
	userPhoto: string;
	videoId: string;
	liked: string[];
	unliked: string[];
}
interface User {
	user: UserProps;
}
const clientCredentials = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const app = initializeApp(clientCredentials);
export const db = getFirestore(app);


export default app;
