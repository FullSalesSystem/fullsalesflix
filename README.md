# FullSales Flix 🎬

Landing page do **produto gratuito** da FullSales Academy, no estilo streaming
(catálogo de treinamentos de vendas). Inspirada na
[FullSales Academy](https://fullsalessystem.com/fullsalesacademy/), focada
exclusivamente no conteúdo **100% gratuito**.

## Conteúdo

- `index.html` — estrutura da página (hero, catálogo, benefícios, CTA, FAQ)
- `styles.css` — tema escuro "flix", responsivo, sem dependências
- `script.js` — ano dinâmico, validação do formulário gratuito e interação dos cards

## Como rodar

É um site estático, sem build. Basta abrir o `index.html` no navegador:

```bash
# opção simples
open index.html        # macOS
xdg-open index.html    # Linux

# ou servir localmente
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Próximos passos sugeridos

- Conectar o formulário de captura a um CRM/API real (hoje é só validação no cliente)
- Trocar os placeholders das aulas por thumbnails/links reais
- Adicionar player de vídeo e área logada
