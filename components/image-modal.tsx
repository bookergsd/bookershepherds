"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog" // Import DialogTitle

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
        {/* Add a visually hidden DialogTitle for accessibility */}
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative w-full h-[80vh]">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
