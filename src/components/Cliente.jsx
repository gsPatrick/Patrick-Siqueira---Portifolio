import React from 'react';
import './/styles/Cliente.css';

const clientes = [
  {
    id: 1,
    nome: 'Jimmy Fermin',
    imagem: 'https://via.placeholder.com/50', // Substitua pelo link real da imagem
    profissao: 'Photographer, Unsplash',
    texto:
      '“Jonathan has demonstrated outstanding performance in her work. He is not only creative in finding innovative solutions, but also efficient in delivering high-quality results.”',
  },
  {
    id: 2,
    nome: 'Maria Smith',
    imagem: 'https://via.placeholder.com/50', // Substitua pelo link real da imagem
    profissao: 'Graphic Designer, Behance',
    texto:
      '“Maria is incredibly skilled in design and consistently exceeds expectations with her creativity and attention to detail.”',
  },
  // Adicione mais clientes conforme necessário
];

const Clientes = () => {
  return (
    <div className="clientes-container">
      {clientes.map((cliente) => (
        <div key={cliente.id} className="cliente-card">
          <div className="cliente-header">
            <img
              src={cliente.imagem}
              alt={cliente.nome}
              className="cliente-imagem"
            />
            <div>
              <h3 className="cliente-nome">{cliente.nome}</h3>
              <p className="cliente-profissao">{cliente.profissao}</p>
            </div>
          </div>
          <p className="cliente-texto">{cliente.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default Clientes;
