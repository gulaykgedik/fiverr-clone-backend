import type { Response, NextFunction } from "express";
import type { AuthRequest } from "../types/index.js";
declare const protect: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export default protect;
//# sourceMappingURL=protect.d.ts.map