const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyDDNOc28_wpKB7gQ5LFpkc61CTBBs2eR14"; // Replace with your valid API key

export async function generateWithGemini(description: string) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  try {
    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: description }]
        }
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(`API Error: ${errorData.error.message}`);
    }

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw error;
  }
}
