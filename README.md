# WEBProject - SCC0219 Int. to Web Development - 1 2021
Site: https://sites.google.com/view/scc219-1

# Project Report

11381768 - Gustavo Akira Hirakawa <br>
10783312 - Paolo Victor Hitoshi Scassa <br>
11218917 - Luana Terra do Couto <br>
10724455 - Yago Poletto Salgado <br>

# Requirements
<ul>
  <li>Página de animal para adoção
    <ul>
      <li>Nome;</li>
      <li>Espécie;</li>
      <li>Raça (se houver);</li>
      <li>Vacinas;</li>
      <li>Idade;</li>
    </ul>
  </li>
  <li>Formulário de adoção
    <ul>
      <li>Dados do antigo dono (se houver);</li>
      <li>Dados do novo dono;</li>
      <li>Dados do animal.</li>
    </ul>
  </li>
</ul>

# Project Description
<ul>
  <li>Funcionalidades
    <ul>
      <li>Serviços de Estética Animal
        <ul>
          <li>Banho;</li>
          <li>Tosa;</li>
          <li>Compra de diversos itens de animal;</li>
          <li>Comida;</li>
          <li>Brinquedos;</li>
          <li>Remédios;</li>
          <li>Uso Geral.</li>
        </ul>
      </li>
      <li>Veterinário
        <ul>
          <li>Atendimento 24hrs por site;</li>
          <li>Atendimento agendado;</li>
          <li>Vacinação.</li>
        </ul>
      </li>
      <li>Adotar animais
        <ul>
          <li>Serviço de doação em casa;</li>
          <li>Doação na loja;</li>
          <li>“SOS” Animal.</li>
        </ul>
      </li>
  <li>Diagrama de navegação e mockups</li>
      https://marvelapp.com/project/5680188/screen/79651183 (diagrama) <br>
      https://marvelapp.com/prototype/64i83ac/screen/79567658 (mockup)
  <li>Informações salvas no servidor
    <ul>
      <li>Dados de administradores;</li>
      <li>Dados de usuários.</li>
    </ul>
  </li>
</ul>


# Comments about the code
No comments
    
# Test Plan
Os testes foram realizados manualmente. Para sua execução, foram tomadas as sequintes ações:
<ul>
  <li> Foram testados todos os links do menu superior que dirigem o usuário as demais páginas; </li>
  <li> Foram testados todos os links presentes no decorrer das páginas que dirigem o usuário as demais páginas; </li>
  <li> Compras foram simuladas para verificar a confirmação de compra; </li>
  <li> Agendamentos de serviços foram simulados para verificar a confirmação de agendamento; </li>
  <li> Cadastros foram simulados para verificar a confirmação de cadastro e login; </li>
  <li> Cadastros foram simulados para verificar a ocultação das senhas; </li>
  <li> As funções de login, cadastro, agendamento, cadastro de produtos e cadastro de pets foram devidamente testados quanto à conexão com o banco de dados; </li>
  <li> As páginas de produtos e de adoção foram devidamente testadas para apontarem dados presentes no banco. </li>
</ul>
    
# Test Results
Verificar o PDF anexo.    
    
# Build Procedures
Procedimentos:<br>
    - Instalar Node.js;<br>
    - Abrir command prompt;<br>
    - Digite "npm install -g node-static", aguarde;<br>
    - Digite "npm install -g express", aguarde;<br>
    - Acesse o path da pasta Projeto;<br>
    - Digite "node server.js", aguarde;<br>
    - Digite na barra de pesquisa "localhost:8000".<br>
    
# Problems
    - O procedimento de logout não está funcionando devidamente.
    
# Comments
    - Para obter acesso às funcionalidades de administrador, realize o login com o nick: PVHS e a senha: admin .<br>
