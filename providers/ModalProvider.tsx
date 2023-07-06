"use client";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <Modal title="test" description="description" isOpen onChange={() => {}}>
        test children
      </Modal>
    </>
  );
};

export default ModalProvider;
