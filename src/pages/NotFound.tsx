import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 animate-fade-in">
        <h1 className="mb-4 text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <p className="mb-8 text-2xl text-muted-foreground">Oops! Lost in space...</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <a href="/">
            <Home className="mr-2" size={20} />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
