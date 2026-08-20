"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, X } from "@phosphor-icons/react/dist/ssr";
import { buildWhatsappUrl } from "@/app/lib/buildWhatsappUrl";

export type InstitutionType = "particular" | "publico";

const institutionTypeOptions = [
  "Escola particular",
  "Secretaria Municipal de Educação",
  "Secretaria Estadual de Educação",
  "Prefeitura",
  "Rede privada de ensino",
  "Outra instituição",
] as const;

const roleOptions = [
  "Direção",
  "Coordenação pedagógica",
  "Secretaria de Educação",
  "Gestão da Educação Especial",
  "Professor(a) / profissional do AEE",
  "Setor administrativo / compras",
  "Outro",
] as const;

const professionalsCountOptions = [
  "Até 5",
  "De 6 a 10",
  "De 11 a 30",
  "De 31 a 50",
  "Mais de 50",
  "Ainda não sabemos",
] as const;

const studentsCountOptions = [
  "Até 50",
  "De 51 a 100",
  "De 101 a 300",
  "De 301 a 500",
  "Mais de 500",
  "Ainda não sabemos",
] as const;

const goalOptions = [
  "Organizar os processos e documentos do AEE",
  "Padronizar o trabalho entre os profissionais da rede",
  "Facilitar Avaliações Diagnósticas",
  "Apoiar a elaboração do Estudo de Caso",
  "Facilitar a elaboração do PAEE",
  "Organizar os registros dos atendimentos",
  "Acompanhar os alunos de forma individualizada",
  "Conhecer a plataforma antes de definir a contratação",
  "Outro",
] as const;

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  institutionName: string;
  city: string;
  institutionType: string;
  role: string;
  professionalsCount: string;
  studentsCount: string;
  goals: string[];
  notes: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  institutionName: "",
  city: "",
  institutionType: "",
  role: "",
  professionalsCount: "",
  studentsCount: "",
  goals: [],
  notes: "",
};

const inputClass =
  "w-full rounded-xl border border-[#276678]/15 bg-white px-4 py-3 text-sm text-[#276678] placeholder:text-[#276678]/35 outline-none transition-colors focus:border-[#276678]/50";

const labelClass = "mb-1.5 block text-xs font-bold text-[#276678]";

function buildWhatsappMessage(form: FormState): string {
  const lines = [
    "Olá! Gostaria de levar a Plataforma Plural para minha instituição.",
    "",
    `Nome: ${form.fullName}`,
    `E-mail: ${form.email}`,
    `Telefone/WhatsApp: ${form.phone}`,
    `Instituição/órgão: ${form.institutionName}`,
    `Cidade/UF: ${form.city}`,
    `Tipo de instituição: ${form.institutionType}`,
    `Função: ${form.role}`,
    `Profissionais que utilizarão a Plural: ${form.professionalsCount}`,
  ];

  if (form.studentsCount) {
    lines.push(`Alunos atendidos pelo AEE: ${form.studentsCount}`);
  }
  if (form.goals.length > 0) {
    lines.push(`O que buscam: ${form.goals.join(", ")}`);
  }
  if (form.notes.trim()) {
    lines.push(`Necessidade: ${form.notes.trim()}`);
  }

  return lines.join("\n");
}

type InstitutionalFormModalProps = {
  type: InstitutionType | null;
  onClose: () => void;
};

export function InstitutionalFormModal({ type, onClose }: InstitutionalFormModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const open = type !== null;

  useEffect(() => {
    if (!open) return;
    setForm({
      ...emptyForm,
      institutionType: type === "particular" ? "Escola particular" : "",
    });
    setSubmitted(false);
  }, [open, type]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const requiredFilled =
    form.fullName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.institutionName.trim() &&
    form.city.trim() &&
    form.institutionType &&
    form.role &&
    form.professionalsCount;

  const toggleGoal = (goal: string) => {
    setForm((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!requiredFilled) return;
    const url = buildWhatsappUrl(buildWhatsappMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-120 flex items-end justify-center md:items-center md:p-6">
      <div
        className="absolute inset-0 bg-[#0f2a32]/60 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />

      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:rounded-3xl">
        <div className="flex items-start justify-between gap-4 border-b border-[#276678]/10 px-6 py-5 md:px-8">
          <div>
            <h3 className="text-lg font-black leading-tight text-[#276678] md:text-xl">
              Leve a Plataforma Plural para sua escola ou rede de ensino
            </h3>
            {!submitted && (
              <p className="mt-1.5 text-sm leading-relaxed text-[#276678]/65">
                Preencha as informações abaixo e nossa equipe entrará em contato para entender a
                necessidade da sua instituição, apresentar a plataforma e preparar uma proposta
                personalizada.
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar formulário"
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-[#276678] ring-1 ring-[#276678]/15 transition-colors hover:bg-[#276678]/8"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 md:px-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#28a745]/12">
                <ArrowRight size={26} weight="bold" className="text-[#28a745]" />
              </div>
              <p className="text-base font-bold text-[#276678] md:text-lg">
                Abrimos o WhatsApp com seus dados prontos para envio.
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-[#276678]/65">
                Após o envio, nossa equipe entrará em contato para agendar uma apresentação da
                Plataforma Plural e entender qual formato de contratação atende melhor à sua
                instituição.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 rounded-xl bg-[#276678] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1b4a57]"
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="fullName">
                    Nome completo*
                  </label>
                  <input
                    id="fullName"
                    required
                    className={inputClass}
                    value={form.fullName}
                    onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    E-mail profissional*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Telefone / WhatsApp*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="city">
                    Cidade / UF*
                  </label>
                  <input
                    id="city"
                    required
                    className={inputClass}
                    value={form.city}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="institutionName">
                  Nome da instituição / órgão*
                </label>
                <input
                  id="institutionName"
                  required
                  className={inputClass}
                  placeholder="Ex.: Escola, Secretaria Municipal de Educação, Prefeitura, mantenedora ou rede de ensino"
                  value={form.institutionName}
                  onChange={(e) => setForm((p) => ({ ...p, institutionName: e.target.value }))}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="institutionType">
                    Você representa qual tipo de instituição?*
                  </label>
                  <select
                    id="institutionType"
                    required
                    className={inputClass}
                    value={form.institutionType}
                    onChange={(e) => setForm((p) => ({ ...p, institutionType: e.target.value }))}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {institutionTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="role">
                    Qual é a sua função?*
                  </label>
                  <select
                    id="role"
                    required
                    className={inputClass}
                    value={form.role}
                    onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {roleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="professionalsCount">
                    Quantos profissionais utilizarão a Plataforma Plural?*
                  </label>
                  <select
                    id="professionalsCount"
                    required
                    className={inputClass}
                    value={form.professionalsCount}
                    onChange={(e) => setForm((p) => ({ ...p, professionalsCount: e.target.value }))}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {professionalsCountOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="studentsCount">
                    Quantidade aproximada de alunos atendidos pelo AEE
                  </label>
                  <select
                    id="studentsCount"
                    className={inputClass}
                    value={form.studentsCount}
                    onChange={(e) => setForm((p) => ({ ...p, studentsCount: e.target.value }))}
                  >
                    <option value="">Selecione</option>
                    {studentsCountOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <p className={labelClass}>O que sua instituição busca com a Plural?</p>
                <p className="mb-2 -mt-1 text-xs text-[#276678]/50">Pode marcar mais de uma opção.</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {goalOptions.map((goal) => (
                    <label
                      key={goal}
                      className="flex cursor-pointer items-start gap-2 rounded-xl border border-[#276678]/12 px-3 py-2.5 text-xs leading-snug text-[#276678]/80 transition-colors hover:bg-[#276678]/5"
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 size-4 shrink-0 accent-[#276678]"
                        checked={form.goals.includes(goal)}
                        onChange={() => toggleGoal(goal)}
                      />
                      {goal}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="notes">
                  Conte um pouco sobre a necessidade da sua instituição
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className={inputClass}
                  placeholder="Campo opcional"
                  value={form.notes}
                  onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                />
              </div>

              <button
                type="submit"
                disabled={!requiredFilled}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#276678] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-all hover:bg-[#1b4a57] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Quero conhecer a Plural
                <ArrowRight size={18} weight="bold" aria-hidden />
              </button>

              <p className="text-center text-sm px-5 leading-relaxed text-[#276678]/90">
                Após o envio, nossa equipe entrará em contato para agendar uma apresentação da Plataforma Plural e entender qual formato de contratação atende melhor à sua instituição.
              </p>

              <p className="text-center text-xs leading-relaxed text-[#276678]/50">
                Seus dados serão utilizados exclusivamente para este atendimento comercial,
                conforme a LGPD.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
