"use client";

import { cn } from "@/lib/classes";
import { cva } from "class-variance-authority";
import React, { useContext } from "react";
import { Button } from "../button/button";

type TTabContext = {
  active: string;
  onTabChange: (tab: string) => void;
};

const TabsContext = React.createContext<TTabContext>({} as TTabContext);

type TTabsRootProps = React.ComponentPropsWithoutRef<"div"> & {
  active: string;
  onTabChange: (tab: string) => void;
};

const TabsRoot = React.forwardRef<HTMLDivElement, TTabsRootProps>(
  ({ children, active, onTabChange, className }, ref) => {
    return (
      <TabsContext.Provider value={{ active, onTabChange }}>
        <div className={className} ref={ref}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);

const TabsHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children }, ref) => {
  const { active, onTabChange } = useContext(TabsContext);
  return (
    <div ref={ref}>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px space-x-4">
            {children}
          </nav>
        </div>
      </div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Selecione uma aba
        </label>
        <select
          id="tabs"
          name="tabs"
          value={active}
          onChange={(e) => {
            const tab = e.target.value;
            onTabChange(tab);
          }}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return null;
            return (
              <option
                key={(child.props as TTabTriggerProps).identifier}
                value={(child.props as TTabTriggerProps).identifier}
              >
                {(child.props as TTabTriggerProps).children}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
});

const triggerClasses = cn([
  "whitespace-nowrap",
  "border-b-2",
  "px-1",
  "py-4",
  "text-sm",
  "font-medium",
]);
const triggerVariants = cva(triggerClasses, {
  variants: {
    isActive: {
      true: "border-primary text-primary",
      false:
        "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
    },
  },
});

type TTabTriggerProps = React.ComponentPropsWithoutRef<"button"> & {
  identifier: string;
};

export const TabTrigger = React.forwardRef<HTMLButtonElement, TTabTriggerProps>(
  ({ children, identifier }, ref) => {
    const { active, onTabChange } = useContext(TabsContext);
    const isActive = active === identifier;
    return (
      <button
        ref={ref}
        type="button"
        key={identifier}
        onClick={() => onTabChange(identifier)}
        aria-current={isActive ? "page" : undefined}
        className={triggerVariants({ isActive })}
      >
        {children}
      </button>
    );
  },
);

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

type TTabBodyProps = React.ComponentPropsWithoutRef<"button"> & {
  identifier: string;
};

export const TabBody = React.forwardRef<HTMLDivElement, TTabBodyProps>(
  ({ children, identifier }, ref) => {
    const { active } = useContext(TabsContext);
    const isActive = active === identifier;
    if (!isActive) return null;
    return (
      <div className="mt-4" ref={ref}>
        {children}
      </div>
    );
  },
);

export const Tabs = Object.assign(TabsRoot, {
  Header: TabsHeader,
  Trigger: TabTrigger,
  Content: TabsContent,
  Body: TabBody,
});
