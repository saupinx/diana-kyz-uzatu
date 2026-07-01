import { FloralDecor } from "./FloralDecor";
import { Sparkles } from "./Sparkles";

export function FloralDivider() {
  return (
    <div className="premium-divider relative flex justify-center py-7" aria-hidden="true">
      <Sparkles variant="divider" />
      <FloralDecor variant="divider" className="floral-divider-image" />
    </div>
  );
}