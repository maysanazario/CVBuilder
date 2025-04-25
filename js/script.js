/**
 * Array global para armazenar experiências profissionais.
 * Cada experiência será um objeto com id, texto, dataInicio e dataFim.
 */
const dados_exp = [];

/**
 * Array global para armazenar formações educacionais.
 * Cada formação será um objeto com id, nivelFormacao, curso, instituicao e anoConclusao.
 */
const dadosEducacionais = [];

/**
 * Array global para armazenar o currículo completo.
 * Será preenchido com dados pessoais, experiências profissionais e educacionais.
 */
const curr = [];

/**
 * Função principal que coleta todos os dados do formulário e monta o currículo.
 * - Salva experiências profissionais e educacionais
 * - Coleta dados pessoais (nome, email, telefone, etc.)
 * - Combina todos os dados em um objeto currículo
 * - Armazena no localStorage
 * - Redireciona para a página final.html
 */
function curriculo() {
    salvarExp();
    salvarEsc();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const linkedin = document.getElementById('linkedin').value;

    const curr = [{
        nome: nome, 
        email: email, 
        telefone: telefone, 
        endereco: endereco, 
        linkedin: linkedin, 
        exp_profissionais: [...dados_exp], 
        exp_educacionais: [...dadosEducacionais]
    }];
    
    console.log(curr);
    localStorage.setItem('resumeData', JSON.stringify(curr));
    window.location.href = 'final.html';
}

/**
 * Adiciona um novo bloco de campos para experiência profissional.
 * Cria dinamicamente inputs para:
 * - Descrição da experiência
 * - Data de início
 * - Data de conclusão (opcional)
 * - Botão para remover o bloco
 */
function adicionarExperiencia() {
    let expContainer = document.getElementById("Exp");
    
    if (!expContainer) {
        expContainer = document.createElement("div");
        expContainer.id = "Exp";
        document.body.appendChild(expContainer); 
    }

    const input = `
        <div class="experiencia-item">
            <label>Experiência:</label>
            <input type="text" class="campo-texto" required>
            
            <label>Data de Ínicio:</label> 
            <input type="date" class="data-inicio" required>
            
            <label>Data de Conclusão:</label> 
            <input type="date" class="data-fim">
            
            <button type="button" class="remover-item" onclick="this.parentElement.remove()">Remover</button>
        </div>
    `;

    expContainer.insertAdjacentHTML("beforeend", input);
}

/**
 * Coleta e salva todas as experiências profissionais preenchidas.
 * - Itera sobre todos os blocos de experiência
 * - Extrai os valores preenchidos
 * - Armazena no array dados_exp
 * - Mostra alerta de confirmação
 * @returns {Array} Retorna o array com todas as experiências profissionais
 */
function salvarExp() {
    const experiencias = document.querySelectorAll(".experiencia-item");
    dados_exp.length = 0; 
    
    experiencias.forEach((exp, index) => {
        const texto = exp.querySelector('.campo-texto').value;
        const dataInicio = exp.querySelector('.data-inicio').value;
        const dataFim = exp.querySelector('.data-fim').value;

        if (texto && dataInicio) {
            dados_exp.push({
                id: index + 1,
                texto: texto,
                dataInicio: dataInicio,
                dataFim: dataFim || null 
            });
        }
    });
    
    console.log("Experiências profissionais salvas:", dados_exp);
    alert("Experiências profissionais salvas!");
    return dados_exp;
}

/**
 * Adiciona um novo bloco de campos para formação educacional.
 * Cria dinamicamente inputs para:
 * - Nível de formação (select)
 * - Nome do curso
 * - Instituição de ensino
 * - Ano de conclusão
 * - Botão para remover o bloco
 */
function adicionarExperienciaEsc() {
    let containerEsc = document.getElementById("experiencias-educacionais");
    
    if (!containerEsc) {
        containerEsc = document.createElement("div");
        containerEsc.id = "experiencias-educacionais";
        containerEsc.className = "experiencias-container";
        document.body.appendChild(containerEsc); 
    }

    const input = `
        <div class="experiencia-educacional-item">
            <div class="form-group">
                <label>Nível de Formação:</label>
                <select class="formacao" required>
                    <option value="">Selecione</option>
                    <option value="ensino_medio">Ensino Médio</option>
                    <option value="tecnico">Técnico</option>
                    <option value="graduacao">Graduação</option>
                    <option value="pos_graduacao">Pós-Graduação</option>
                    <option value="mestrado">Mestrado</option>
                    <option value="doutorado">Doutorado</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>Curso:</label>
                <input type="text" class="curso" required>
            </div>
            
            <div class="form-group">
                <label>Instituição de Ensino:</label>
                <input type="text" class="instituicao" required>
            </div>
            
            <div class="form-group">
                <label>Ano de Conclusão:</label>
                <input type="number" class="ano_conclusao" min="1900" max="${new Date().getFullYear() + 10}" required>
            </div>
            
            <button type="button" class="remover-item" onclick="this.parentElement.remove()">Remover</button>
        </div>
    `;

    containerEsc.insertAdjacentHTML("beforeend", input);
}

/**
 * Coleta e salva todas as formações educacionais preenchidas.
 * - Itera sobre todos os blocos de formação
 * - Extrai os valores preenchidos
 * - Armazena no array dadosEducacionais
 * - Mostra alerta de confirmação
 * Retorna o array com todas as formações educacionais
 */
function salvarEsc() {
    const experiencias = document.querySelectorAll(".experiencia-educacional-item");
    dadosEducacionais.length = 0;
    
    experiencias.forEach((exp, index) => {
        const formacao = exp.querySelector('.formacao').value;
        const curso = exp.querySelector('.curso').value;
        const instituicao = exp.querySelector('.instituicao').value;
        const anoConclusao = exp.querySelector('.ano_conclusao').value;
        if (formacao && curso && instituicao && anoConclusao) {
            dadosEducacionais.push({
                id: index + 1,
                nivelFormacao: formacao,
                curso: curso,
                instituicao: instituicao,
                anoConclusao: anoConclusao
            });
        }
    });
    
    console.log("Experiências educacionais salvas:", dadosEducacionais);
    alert("Experiências educacionais salvas!");
    return dadosEducacionais;
}