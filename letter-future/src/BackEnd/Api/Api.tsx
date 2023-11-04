

export async function Request(postData) {
    try {
      const response = await fetch("backendServerUrlAdress", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData), 
      });
  
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Data successfully sent to the server:', jsonResponse);
        return jsonResponse;
      } else {
        const errorResponse = await response.text();
        throw new Error('Failed to send data: ' + errorResponse);
      }
    } catch (error) {
      console.error('Error in data:', error);
      throw error; 
    }
  }
  