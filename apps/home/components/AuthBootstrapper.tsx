"use client";

import { useEffect } from "react";
import { bootstrapAuth } from "@repo/shared-state";

export default function AuthBootstrapper() {
  useEffect(() => {
    bootstrapAuth();
  }, []);

  return null;
}
