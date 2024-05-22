import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolTipComponentProps {
  children: React.ReactNode;
  props: {
    content: React.ReactNode;
  };
}

const ToolTipComponent = ({ children, props }: ToolTipComponentProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{props.content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTipComponent;
