import { db } from '@/utils/db';
import React from 'react';
import EditorBlock from './_components/EditorBlock';
import { generateWithGemini } from '@/utils/geminiApi'; // Import the Gemini API function

interface SingleDocumentProps {
  documentid: string;
}

const SingleDocumentPage = async ({ params }: { params: SingleDocumentProps }) => {
  // Fetch the document content from the database
  const documentData = await db.document.findUnique({
    where: {
      id: params.documentid,
    },
  });

  // If no document is found, handle the error gracefully
  if (!documentData) {
    return <div>Document not found</div>;
  }

  let aiGeneratedContent = '';
  try {
    // Call Gemini API to generate additional content based on the existing document
    aiGeneratedContent = await generateWithGemini(
      `Enhance the following content:\n\n${documentData.content}`
    );
  } catch (error) {
    console.error('Error generating content with Gemini:', error);
    aiGeneratedContent = 'Failed to generate content.';
  }

  return (
    <div>
      {/* Pass the original document and AI-generated content */}
      <EditorBlock document={{ ...documentData, aiContent: aiGeneratedContent }} />
    </div>
  );
};

export default SingleDocumentPage;
