import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface LeadFormData {
  name: string;
  email: string;
  age: string;
  phone: string;
  goal?: string;
}

const whatsappLink = "https://wa.me/message/PQNKHCMYWWU4B1?text=Oi%20quero%20conhecer%20os%20servicos";

export const LeadFormModal = ({
  triggerText = "Quero Conhecer",
  buttonProps = {},
  children,
}: {
  triggerText?: string;
  buttonProps?: React.ComponentProps<typeof Button>;
  children?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<LeadFormData>();

  const onSubmit = (data: LeadFormData) => {
    // Aqui você pode enviar os dados para um backend se quiser
    window.open(whatsappLink, "_blank");
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button {...buttonProps}>
          {children || triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fale com a Astra Flow</DialogTitle>
          <DialogDescription>
            Preencha o formulário e fale conosco no WhatsApp!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Nome"
              {...register("name", { required: "Nome obrigatório" })}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name.message}</span>
            )}
          </div>
          <div>
            <Input
              placeholder="E-mail"
              type="email"
              {...register("email", { required: "E-mail obrigatório" })}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}
          </div>

          <div>
            <Input
              placeholder="Telefone"
              type="tel"
              {...register("phone", { required: "Telefone obrigatório" })}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">{errors.phone.message}</span>
            )}
          </div>
          <div>
            <Textarea
              placeholder="O que você busca com nosso chat? (opcional)"
              {...register("goal")}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              Enviar e Falar no WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal; 