# FullSales — Aula Gratuita 🎓

Landing page da **aula gratuita** da Full Sales System, inspirada em
[aulagratuita.fullsalessystem.com](https://aulagratuita.fullsalessystem.com/).
Formato de página de captura (VSL-style), focada exclusivamente no conteúdo
**100% gratuito**. _Sem vídeo (VSL) por enquanto_ — o hero leva direto à
captura de e-mail.

## Conteúdo

- `index.html` — hero, "o que você vai aprender", provas/números, autoridade
  (Vinícius de Sá), "para quem é", CTA de captura e FAQ
- `styles.css` — tema escuro, responsivo, sem dependências
- `script.js` — ano dinâmico e validação do formulário gratuito

## Como rodar

Site estático, sem build. Abra o `index.html` no navegador:

```bash
open index.html        # macOS
xdg-open index.html    # Linux

# ou sirva localmente
python3 -m http.server 8000   # http://localhost:8000
```

## Próximos passos sugeridos

- Adicionar o player da VSL no hero quando o vídeo estiver pronto
- Conectar o formulário a um CRM/API real (hoje é só validação no cliente)
- Substituir foto/bio placeholder do Vinícius por conteúdo oficial
- Validar números e copy com a paleta/identidade oficial da marca
