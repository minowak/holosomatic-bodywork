"use client";

import { SectionHeader } from "../ui/section-header";
import instagram from "@/assets/instagram.avif";
import Image from 'next/image'
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export const GetInTouchSection: React.FC<SectionProps> = ({ anchor, lang }) => {
  const t = getTranslations(lang);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const requestRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState(false);

  const onSend = (e: any) => {
    e.preventDefault();
    setError(false);

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const request = requestRef.current?.value;

    if (!name || !email || !request) {
      return null;
    }

    setLoading(true);

    const params = new URLSearchParams({ name, email, request });

    new Promise(r => setTimeout(r, 2000))
      // fetch("/mail.php?" + params.toString(), {
      //   method: 'POST',
      // })
      .then((r) => {
        nameRef.current!.value = "";
        emailRef.current!.value = "";
        requestRef.current!.value = "";
        console.log(r);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      })
      .finally(() => {
        setDialogOpen(true);
        setLoading(false)
      });
  }

  return (
    <section id={anchor}>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{error ? t.contact_dialog_error : t.contact_dialog_success}</DialogTitle>
            <DialogDescription>
              {error ? t.contact_dialog_error_desc : t.contact_dialog_success_desc}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center bg-white">
        <div>
          <div className="flex justify-center">
            <SectionHeader label={t.get_in_touch} className="font-bold" />
          </div>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/yuliia.pinchuk/" rel="noopener noreferrer" target="_blank">
              <Image src={instagram} alt="" className="size-16" />
            </a>
          </div>
          <form onSubmit={onSend}>
            <div className="mt-16 space-y-2 md:w-[570px]">
              <ContactFormInput disabled={loading} ref={nameRef} label={t.name} type="text" id="name" />
              <ContactFormInput disabled={loading} ref={emailRef} label={t.email} type="email" id="email" />
              <ContactFormInput disabled={loading} ref={requestRef} label={t.your_request} type="textarea" id="request" />
              <button type="submit" disabled={loading} className="w-full disabled:hover:bg-salmon disabled:cursor-auto disabled:hover:text-primary disabled:opacity-50 px-8 py-2 bg-salmon cursor-pointer duration-300 text-primary hover:text-salmon hover:bg-primary font-bold text-center">
                {t.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type InputProps = {
  label: string;
  type: string;
  id: string;
  ref: any;
  disabled?: boolean;
}

export const ContactFormInput: React.FC<InputProps> = ({ label, type, id, ref, disabled }) => {
  const cn = "bg-salmon w-full px-4 py-2 text-primary caret-primary outline-none focus:outline-none disabled:opacity-50";
  return (
    <div>
      <label htmlFor={id} className="text-sm text-primary">{label}</label>
      <div>
        {type === "textarea" ?
          <textarea disabled={disabled} ref={ref} id={id} className={cn} rows={5} required />
          :
          <input disabled={disabled} ref={ref} id={id} type={type} className={cn} required />}
      </div>
    </div>
  );
}
