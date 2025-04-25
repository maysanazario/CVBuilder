# 📝 CVBuilder 

Um sistema simples para criar curriculos

## 🚀 Funcionalidades  
✔️ **Cadastro de informações pessoais** (nome, e-mail, telefone, LinkedIn)
✔️ **Adição de múltiplas experiências profissionais** (cargo, período de trabalho)  
✔️ **Cadastro de formações acadêmicas** (nível, curso, instituição, ano de conclusão)  
✔️ **Armazenamento local** (dados persistem após atualizar a página)

## 📋 Como Usar  
1. **Preencha os dados pessoais** no formulário.  
2. **Adicione experiências profissionais** (quantas quiser).  
3. **Insira suas formações acadêmicas**.  
4. **Clique em "Salvar"** para armazenar no `localStorage`.  
5. **Os dados podem ser recuperados** em outra página (`final.html`).  

## 🛠️ Estrutura do Código  
- **`dados_exp`**: Array de experiências profissionais.  
- **`dadosEducacionais`**: Array de formações acadêmicas.  
- **`curriculo()`**: Função principal que salva tudo no `localStorage`.  
- **`adicionarExperiencia()` / `adicionarExperienciaEsc()`**: Adicionam campos dinamicamente.  
- **`salvarExp()` / `salvarEsc()`**: Salvam os dados nos arrays.
## Link da Página
<a href="https://maysanazario.github.io/CVBuilder/cadastrar.html" target="_blank">Clique Aqui!</a>
