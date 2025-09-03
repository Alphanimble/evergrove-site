"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`space-y-4 ${className || ""}`}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`border border-gray-200 rounded-lg overflow-hidden ${className || ""}`}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={`w-full text-left transition-all ${className || ""}`}
    {...props}
  >
    {children}
  </button>
))
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  children: React.ReactNode
  isOpen: boolean
  className?: string
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, isOpen }, ref) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        ref={ref}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`overflow-hidden ${className || ""}`}
      >
        <div className="p-6 border-t border-gray-200">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
