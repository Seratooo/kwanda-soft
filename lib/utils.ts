import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { handleToggleParamsProps } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hanldeToggleParam({
  newParams,
  params,
  pathname,
  paramName
}: handleToggleParamsProps) {
  const urlMenu = newParams
    ? `${
        params
          ? `${
              params.includes(`&${paramName}`)
                ? `${pathname}?${params.replace(`&${paramName}`, "")}`
                : `${pathname}${params.replace(`${paramName}`, "")}`
            }`
          : `${pathname}`
      }`
    : `${
        params
          ? `${pathname}?${params}&${paramName}`
          : `${pathname}?${paramName}`
      }`;

  return urlMenu;
}
