import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CallbackFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackForm({ isOpen, onClose }: CallbackFormProps) {
  const [formData, setFormData] = useState({
    interesse: '',
    nome: '',
    email: '',
    telefone: '',
    horario: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      telefone: formatted
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar lógica para enviar os dados
    alert('Obrigado! Entraremos em contato em breve.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-luxury-green text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold">Nós ligamos para você</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Qual seu interesse */}
          <div>
            <label className="block text-sm font-bold text-luxury-dark mb-2">
              Qual seu interesse? *
            </label>
            <select
              name="interesse"
              value={formData.interesse}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            >
              <option value="">Selecione</option>
              <option value="comprar">Comprar imóvel</option>
              <option value="alugar">Alugar imóvel</option>
              <option value="vender">Vender imóvel</option>
              <option value="anunciar">Anunciar imóvel</option>
              <option value="financiamento">Financiamento</option>
              <option value="avaliacao">Avaliação de imóvel</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Nome completo */}
          <div>
            <label className="block text-sm font-bold text-luxury-dark mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm font-bold text-luxury-dark mb-2">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            />
          </div>

          {/* Telefone / WhatsApp */}
          <div>
            <label className="block text-sm font-bold text-luxury-dark mb-2">
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handlePhoneChange}
              placeholder="(DDD) 9XXXX-XXXX"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            />
          </div>

          {/* Melhor horário para contato */}
          <div>
            <label className="block text-sm font-bold text-luxury-dark mb-2">
              Melhor horário para contato *
            </label>
            <select
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            >
              <option value="">Selecione</option>
              <option value="manha">Manhã (7h às 12h)</option>
              <option value="tarde">Tarde (12h às 18h)</option>
              <option value="noite">Noite (18h às 22h)</option>
              <option value="qualquer">Qualquer horário</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20 mt-6"
          >
            Solicitar Ligação
          </button>
        </form>
      </div>
    </div>
  );
}
