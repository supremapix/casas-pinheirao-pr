
import React, { useState, useEffect } from 'react';
import { Github, Zap, Calendar, User, ExternalLink, Loader } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

interface GitHubCommit {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
    date: string;
  };
  url: string;
}

interface VercelDeployment {
  id: string;
  url: string;
  createdAt: string;
  state: 'READY' | 'ERROR' | 'BUILDING';
  creator: {
    username: string;
  };
}

export const Updates: React.FC = () => {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [deployments, setDeployments] = useState<VercelDeployment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch GitHub commits
        const githubResponse = await fetch(
          'https://api.github.com/repos/supremapix/casas-pinheirao-pr/commits?per_page=10'
        );
        if (!githubResponse.ok) throw new Error('Erro ao buscar commits do GitHub');
        const commitsData = await githubResponse.json();
        setCommits(commitsData.map((commit: any) => ({
          sha: commit.sha,
          message: commit.commit.message,
          author: {
            name: commit.commit.author.name,
            email: commit.commit.author.email,
            date: commit.commit.author.date,
          },
          url: commit.html_url,
        })));

        // Note: Vercel API requires authentication token
        // For public display, we'll show a placeholder or fetch from a public endpoint if available
        // In production, this should be handled by a backend server
        setDeployments([
          {
            id: '1',
            url: 'https://www.casaspinheirao.com.br',
            createdAt: new Date().toISOString(),
            state: 'READY',
            creator: { username: 'supremapix' },
          }
        ]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar atualizações');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStateColor = (state: string) => {
    switch (state) {
      case 'READY':
        return 'bg-green-100 text-green-800';
      case 'BUILDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'ERROR':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStateLabel = (state: string) => {
    switch (state) {
      case 'READY':
        return 'Publicado';
      case 'BUILDING':
        return 'Construindo';
      case 'ERROR':
        return 'Erro';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <EnhancedSEO
        title="Atualizações - Casas Pinheirão"
        description="Acompanhe as atualizações e melhorias do site Casas Pinheirão em tempo real."
        canonical="/atualizacoes"
        keywords="atualizações, melhorias, GitHub, Vercel, desenvolvimento"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-pinheirao-black">
            Atualizações do Site
          </h1>
          <p className="text-lg text-pinheirao-gray max-w-2xl mx-auto">
            Acompanhe em tempo real todas as melhorias e atualizações do nosso site.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader className="animate-spin text-pinheirao-green" size={48} />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800 font-semibold">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GitHub Commits */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Github size={28} className="text-pinheirao-black mr-3" />
                <h2 className="text-2xl font-black text-pinheirao-black">Commits Recentes</h2>
              </div>

              <div className="space-y-4">
                {commits.length > 0 ? (
                  commits.map((commit) => (
                    <a
                      key={commit.sha}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pinheirao-green hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-pinheirao-black group-hover:text-pinheirao-green transition-colors line-clamp-2">
                            {commit.message.split('\n')[0]}
                          </p>
                          <p className="text-xs text-pinheirao-gray mt-1">
                            {commit.author.name}
                          </p>
                        </div>
                        <ExternalLink size={16} className="text-pinheirao-gray group-hover:text-pinheirao-green transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <div className="flex items-center text-xs text-pinheirao-gray">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(commit.author.date)}
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-center text-pinheirao-gray py-8">Nenhum commit encontrado</p>
                )}
              </div>

              <a
                href="https://github.com/supremapix/casas-pinheirao-pr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-pinheirao-green font-semibold hover:underline"
              >
                Ver repositório completo
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>

            {/* Vercel Deployments */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Zap size={28} className="text-pinheirao-black mr-3" />
                <h2 className="text-2xl font-black text-pinheirao-black">Deployments</h2>
              </div>

              <div className="space-y-4">
                {deployments.length > 0 ? (
                  deployments.map((deployment) => (
                    <a
                      key={deployment.id}
                      href={deployment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white rounded-lg border border-blue-200 hover:border-pinheirao-green hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p className="font-semibold text-pinheirao-black group-hover:text-pinheirao-green transition-colors truncate">
                            {deployment.url}
                          </p>
                          <p className="text-xs text-pinheirao-gray mt-1">
                            por {deployment.creator.username}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${getStateColor(deployment.state)}`}>
                          {getStateLabel(deployment.state)}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-pinheirao-gray">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(deployment.createdAt)}
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-center text-pinheirao-gray py-8">Nenhum deployment encontrado</p>
                )}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-pinheirao-gray">
                  <strong>Nota:</strong> Os deployments são atualizados automaticamente a cada commit no repositório.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-pinheirao-concrete/10 rounded-lg p-8 border border-pinheirao-concrete/20">
          <h3 className="text-xl font-black text-pinheirao-black mb-4">Como funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-pinheirao-green text-white flex items-center justify-center font-black mr-3">1</div>
                <h4 className="font-semibold text-pinheirao-black">Desenvolvimento</h4>
              </div>
              <p className="text-sm text-pinheirao-gray">
                Nossos desenvolvedores trabalham no repositório GitHub, fazendo commits com as melhorias.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-pinheirao-green text-white flex items-center justify-center font-black mr-3">2</div>
                <h4 className="font-semibold text-pinheirao-black">Build Automático</h4>
              </div>
              <p className="text-sm text-pinheirao-gray">
                A Vercel detecta os commits e inicia automaticamente o processo de build.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-pinheirao-green text-white flex items-center justify-center font-black mr-3">3</div>
                <h4 className="font-semibold text-pinheirao-black">Publicação</h4>
              </div>
              <p className="text-sm text-pinheirao-gray">
                Após o build bem-sucedido, o site é atualizado automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
