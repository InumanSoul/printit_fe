'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  const handleClose = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    e.target === dialogRef.current && router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      className="bg-white w-full max-w-lg dark:bg-neutral-900 rounded-xl p-5 z-50 shadow-sm"
      onClick={handleClose}
    >
      <h2 className="dark:text-neutral-50 font-bold mb-5 text-2xl">
        {title}
      </h2>
      <XMarkIcon 
        className="size-6 absolute top-4 right-4 cursor-pointer text-neutral-700 hover:text-neutral-800 dark:text-neutral-200 dark:hover:text-neutral-100 duration-200 ease-in-out"
        onClick={() => router.back()}
      />
      {children}
    </dialog>
  )
}

export default Modal;