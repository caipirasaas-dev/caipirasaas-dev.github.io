export type CaseStatus = 'production' | 'beta' | 'archived';

export interface CaseStudy {
  id: string;
  name: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  status: CaseStatus;
}

export const cases: CaseStudy[] = [
  {
    id: 'financas-para-dois',
    name: 'Finanças para dois',
    problem:
      'Processos financeiros compartilhados entre duas pessoas — planilhas que ninguém mantém atualizadas.',
    solution:
      'Plataforma financeira construída especificamente para casais, com despesas compartilhadas, metas e organização conjunta.',
    result: 'Controle financeiro real e transparente, sem atrito de planilha.',
    stack: ['React', 'Node.js', 'MongoDB', 'Docker'],
    status: 'production',
  },
  {
    id: 'business-saas',
    name: 'Business SaaS',
    problem:
      'Operação rodando em processos manuais e ferramentas desconectadas.',
    solution:
      'Sistema desenvolvido para substituir planilhas e centralizar as operações da empresa em um único lugar.',
    result: 'Fluxo operacional automatizado e dados centralizados.',
    stack: ['TypeScript', 'Vite', 'Node', 'AWS'],
    status: 'production',
  },
  {
    id: 'cloud-platform',
    name: 'Cloud Platform',
    problem: 'Deploys manuais inconsistentes e ambientes que não reproduziam produção.',
    solution:
      'Infraestrutura automatizada para aplicações containerizadas, com ambientes reproduzíveis e deployment automático.',
    result: 'Deploys previsíveis e ambientes idênticos do dev ao prod.',
    stack: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
    status: 'beta',
  },
];

export const statusLabels: Record<CaseStatus, string> = {
  production: 'Production',
  beta: 'Beta',
  archived: 'Archived',
};

export const statusBadgeClass: Record<CaseStatus, string> = {
  production: 'badge-green',
  beta: 'badge-yellow',
  archived: 'badge-orange',
};

export const statusDotClass: Record<CaseStatus, string> = {
  production: 'bg-green',
  beta: 'bg-yellow',
  archived: 'bg-orange',
};
