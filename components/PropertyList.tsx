import React from 'react';
import matter from 'gray-matter';

// Vite import.meta.glob para importar todos os arquivos Markdown
const propertyFiles = import.meta.glob('../content/imoveis/*.md', { as: 'raw', eager: true });

export type Property = {
  title: string;
  preco: string;
  body: string;
  imagem: string;
  categoria: string;
  slug: string;
};

function parseProperties() {
  return Object.entries(propertyFiles).map(([path, raw]) => {
    const { data, content } = matter(raw as string);
    return {
      title: data.title || '',
      preco: data.preco || '',
      body: content || '',
      imagem: data.imagem || '',
      categoria: data.categoria || '',
      slug: path.split('/').pop()?.replace('.md', '') || '',
    } as Property;
  });
}

const properties = parseProperties();

export const PropertyList: React.FC = () => (
  <div className="property-list">
    {properties.length === 0 && <p>Nenhum imóvel cadastrado.</p>}
    {properties.map((property) => (
      <div key={property.slug} className="property-card">
        <img
          src={property.imagem.startsWith('/') ? property.imagem : `/images/uploads/${property.imagem}`}
          alt={property.title}
          style={{ width: '100%', height: 200, objectFit: 'cover' }}
        />
        <h2>{property.title}</h2>
        <p><b>Preço:</b> {property.preco}</p>
        <p><b>Categoria:</b> {property.categoria}</p>
        <div dangerouslySetInnerHTML={{ __html: property.body }} />
      </div>
    ))}
  </div>
);
