import { Loader2 } from "lucide-react";

const Spinner = () => (
  <div className="flex items-center justify-center h-screen">
    <Loader2 className="w-10 h-10 animate-spin text-white" />
  </div>
);

export default Spinner;
