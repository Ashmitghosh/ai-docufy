import { auth } from "@clerk/nextjs/server";
import React, { Suspense } from "react";
import IntroPage from "./IntroPage";
import { NewDocument } from "./NewDocument";
import RecentDocument from "./Recentdocument"
import { Loader } from "lucide-react";

// Change from named export to default export
export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return <IntroPage />;
  }

  return (
    <div>
      {/* New Document */}
      <Suspense
        fallback={
          <Loader className="flex justify-center animate-spin"></Loader>
        }
      >
        <NewDocument />
      </Suspense>

      {/* Recent Document */}
      <Suspense
        fallback={
          <Loader className="flex justify-center animate-spin"></Loader>
        }
      >
        <RecentDocument />
      </Suspense>
    </div>
  );
}