import React, { forwardRef } from "react";
import { TypeInputProps } from "./filed.types";

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, Icon, placeholder, type }, ref) => {
    return (
      <div className="w-full">
        <div className="flex w-full items-center gap-[8px] border-brCl border-solid border-[2px] rounded-lg px-2">
          {Icon && (
            <div>
              <Icon />
            </div>
          )}
          <input
            className="rounded-lg px-1 py-3 bg-brCl/0 outline-none placeholder:text-[#666463]"
            type={type}
            placeholder={placeholder}
            ref={ref}
          />
        </div>
        {error && <div className="mt-[5px] text-red">{error.message}</div>}
      </div>
    );
  }
);

export default Field;
