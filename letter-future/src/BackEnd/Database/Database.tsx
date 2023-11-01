import { doc, setDoc } from "firebase/firestore/lite";
import { db } from './firebaseconfig.tsx';

const addLetterToFirestore = async (content: string, deliveryDate: string, recipientEmail: string) => {
    try {
        const newLetter = {
            content,
            deliveryDate,
            recipientEmail,
            timestamp: new Date().toISOString()
        };

        const docRef = doc(db, "letters");
        await setDoc(docRef, newLetter);

        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

export  {addLetterToFirestore};
