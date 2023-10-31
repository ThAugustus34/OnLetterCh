import React from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from './firebaseconfig';


const CreateFirebaseDatabase = () => {

  const createSampleLetter = async () => {
    try {
      const lettersCollection = collection(db, "letters");
      await addDoc(lettersCollection, {
        content: "Sample Content",
        deliveryDate: new Date().toISOString(),
        recipientEmail: "sample@example.com",
      });
      alert("Sample letter added successfully!");
    } catch (error) {
      alert("Error adding sample letter: " + error);
    }
  }

  return (
    <div>
      <h2>Create Firestore Database</h2>
      <p>Click the button below to add a sample letter to Firestore. This will create the 'letters' collection if it doesn't exist.</p>
      <button onClick={createSampleLetter}>Add Sample Letter</button>
    </div>
  );
}

export default CreateFirebaseDatabase;
