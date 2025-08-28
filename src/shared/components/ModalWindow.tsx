'use client';
import { Button } from '@/shared/ui/button';
import { X } from 'lucide-react';
import { ReactNode, useState } from 'react';

type ModalWindowProps = {
  buttonName: string;
  title: string;
  body: ReactNode;
};

export const ModalWindow = ({ buttonName, title, body }: ModalWindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{buttonName}</Button>
      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-colors ${isOpen ? 'bg-color-background visible' : 'invisible'}`}
        >
          <div className={'border-color-border flex w-96 flex-col rounded-lg border p-8'}>
            <div className={'flex items-center justify-between'}>
              <h2 className={'text-xl font-bold'}>{title}</h2>
              <Button variant={'ghost'} onClick={() => setIsOpen(false)}>
                <X />
              </Button>
            </div>
            <div>{body}</div>
          </div>
        </div>
      )}
    </>
  );
};
