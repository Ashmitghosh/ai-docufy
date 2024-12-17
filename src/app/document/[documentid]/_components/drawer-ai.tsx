import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {generateWithGemini} from "@/utils/geminiApi"

const DrawerAI: React.FC<{ description: string | null }> = ({ description }) => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState<string>("");
  const [generatedContent, setGeneratedContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleAskWizard = async () => {
    try {
      setLoading(true);
      const response = await generateWithGemini(prompt || description || "");
      setGeneratedContent(response);
      toast({ title: "Content generated successfully." });
    } catch (error) {
      toast({ title: "Failed to generate content.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      {/* Button to trigger the dialog */}
      <DialogTrigger asChild>
        <Button variant="secondary">Ask Wizard</Button>
      </DialogTrigger>

      {/* Dialog Content with scrolling */}
      <DialogContent className="max-h-[80vh] w-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Enter your prompt</h2>
        
        {/* Input field */}
        <Input
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Write your prompt here..."
          className="mb-4"
        />
        
        {/* Button */}
        <Button onClick={handleAskWizard} disabled={loading}>
          {loading ? "Generating..." : "Generate Content"}
        </Button>

        {/* Scrolling Content */}
        {generatedContent && (
          <div className="mt-4 space-y-2 p-2 border rounded-md bg-gray-50 text-sm max-h-[50vh] overflow-y-auto">
            <p>{generatedContent}</p>
          </div>
        )}

        {/* Close Button */}
        <DialogClose asChild>
          <Button variant="outline" className="mt-4">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DrawerAI;
