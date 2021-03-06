
const home = {
    template: `
        <div>
            <div class="background">
                <img src="img/catioro.png" class="carousel">
                <h1 class="pageTitle">Pet Shop!</h1>
                <div class="head">
                    <h1>Produtos em destaque</h1>
                </div>
    
                <div class="produtos">
    
                    <div class="image_pos" style="float:right;">
                        <div class="description_image">
                            <a href="img/placeHolder2.jpg">
                                <img src="img/placeHolder2.jpg" class="carousel">
                            </a>
                        </div>
                    </div>
        
                    <div class="image_pos" style="float:right;">
                        <div class="description_image">
                            <a href="img/placeHolder2.jpg">
                                <img src="img/placeHolder2.jpg" class="carousel">
                            </a>
                        </div>
                    </div>
        
                    <div class="image_pos" style="float:right;">
                        <div class="description_image">
                            <a href="img/placeHolder2.jpg">
                                <img src="img/placeHolder2.jpg" class="carousel">
                            </a>
                        </div>
                    </div>
                    
                    <div class="description" style="float:right;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                        maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                        consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                        maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                        consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                         
                    </div>
                    
                    <div class="description" style="float:right;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                        maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                        consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                    </div>
                    
                    <div class="description" style="float:right;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                        maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                        consequat arcu. Pellentesque feugiat molestie enim a aliquam. 
                    </div>
    
                </div>
    
                <div class="catsky"></div>
    
            </div>
    
            <div class="background">
                <div class="container">
                    <div class="head">
                        <h1>Servi??os</h1>
                        <div class="lightbox"></div>
                        <div class="darkbox"></div>
                    </div>
        
                    <div class="text-center">
                        <div class="light">
                            <div class="card">
                                <img src="img/placeHolder2.jpg" width=150px id="img-profile">
                            </div>
                            <h2>BANHO</h2>
                            <p>Agende o banho do seu pet com nossos profissionais, 
                                etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nulla vestibulum mauris ut diam vulputate, nec
                                scelerisque magna maximus. Suspendisse sit amet ex vestibulum,
                                semper nunc quis, consequat arcu. Pellentesque feugiat
                                molestie enim a aliquam. </p>
    
                                <router-link to="/banho">
                                    <button type="button">
                                        Ver mais
                                    </button>
                                </router-link>
                        </div>
                    </div>
        
                    <div class="text-center">
                        <div class="dark">
                            <div class="card">
                                <img src="img/placeHolder2.jpg" width=150px id="img-profile">
                            </div>
                            <h2>TOSA</h2>
                            <p>Agende o banho do seu pet com nossos profissionais, 
                                etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nulla vestibulum mauris ut diam vulputate, nec
                                scelerisque magna maximus. Suspendisse sit amet ex vestibulum,
                                semper nunc quis, consequat arcu. Pellentesque feugiat
                                molestie enim a aliquam. </p>
    
                                <router-link to="/tosa">
                                    <button type="button">
                                        Ver mais
                                    </button>
                                </router-link>
                        </div>
                    </div>
        
                    <div class="text-center">
                        <div class="light">
                            <div class="card">
                                <img src="img/placeHolder2.jpg" width=150px id="img-profile">
                            </div>
                            <h2>VETERIN??RIO</h2>
                            <p>Agende o banho do seu pet com nossos profissionais, 
                                etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nulla vestibulum mauris ut diam vulputate, nec
                                scelerisque magna maximus. Suspendisse sit amet ex vestibulum,
                                semper nunc quis, consequat arcu. Pellentesque feugiat
                                molestie enim a aliquam. </p>
    
                                <router-link to="/veterinario">
                                    <button type="button">
                                        Ver mais
                                    </button>
                                </router-link>
                        </div>
                    </div>
                </div>
    
                <img src="img/catdoggo.png" class="carousel">
            </div>
    
            <div class="background">
                <div class="container">
                    <div class="something">
                        <img src="img/doggocollar.jpg" class="carousel">
                    </div>
                    <div class="complimentary">
                        <div class="head">
                            <h1>Adote um filhote</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                            maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                            consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                            maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                            consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                        </p>
    
                        <br>
    
                        <div class="text-center">
                            <router-link to="/adocao">
                                <button type="button">
                                    Ver mais
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
    
                <img src="img/treats.jpg" class="carousel">
            </div>
    
            <div class="background">
                <div class="container">
                    <div class="complimentary">
                        <img src="img/wholesome.jpg" class="auto">
                    </div>
                    <div class="something">
                        <div class="head">
                            <h1>Sobre N??s</h1>
                        </div>
                        <div class="textblock">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                                maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                                consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                                maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                                consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                                maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                                consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                            </p>
                            <p>
                                +55 (XX) 1234-5678
                            </p>
                            <p>
                                Rua Lorem Ipsum Dolor, 123
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

const produtos = {
    data: function(){
        return{
            produtos: []
        }
    },
    template: `
    <div>
        <div class="background">
            <img src="img/cato.jpg" class="carousel">
            <h1 class="pageTitle">Produtos</h1>
        </div>
        <div class="productsSection">
            <div class="filters">
                <dl><br>
                    <dt> Filtros </dt><br><br>
                    <dd><a href="#Ra????es"> Ra????es </a></dd><br>
                    <dd><a href="#Camas"> Camas </a></dd><br>
                    <dd><a href="#Coleiras"> Coleiras </a></dd><br>
                    <dd><a href="#Brinquedos"> Brinquedos </a></dd><br>
                    <dd><a href="#Rem??dios"> Rem??dios </a></dd><br>
                    <dd><a href="#Outros"> Outros </a></dd><br>
                </dl>
            </div>
            <div class="productsColumn">
                <dl>
                    <dd class="product" v-for="(produto, index) in produtos">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>{{produto.nome}}<br>R$ {{produto.preco}}</h1>
                        <button type="button" class="buyButton" @click="addCart(produto)"> Comprar </button><br>
                    </dd>
                </dl>

            </div>
        </div>
    </div>
    `,
    methods: {
        login: async function (){
            try {
                let resp = await fetch("http://localhost:3000/products", {
                    method: 'GET'
                });    
                this.produtos = await resp.json();

                //console.log(this.produtos);
            }
            catch (e) {console.log("Error: " + e);}
        },
        addCart: async function (produto){
            produto.qtd--;
            this.$root.carrinho.push(produto);
        }
    },
    mounted(){
        this.login();
    }
};

const servicos = {
    template: `
    <div class="background">
        <img src="img/servicos.jpg" class="carousel">
        <h1 class="pageTitle">Servi??os</h1>
        <div class="background2">
            <div class="text-center">

                <p>A sa??de do seu pet ?? prioridade. Se ele precisar de banho, tosa ou atendimento veterin??rio, ?? s?? marcar conosco.
                Clique no bot??o abaixo. Voc?? ser?? requisitado login caso n??o esteja conectado.</p>
                <br>
                <router-link to="/agendamento">
                    <button class="buyButton"> Agendamento </button>
                </router-link>
                <br><br><br><br>
            </div>
        </div>
    </div>
    `
};

const adocao = {
    data: function(){
        return{
            pets: []
        }
    },
    template: `
    <div>
        <div class="background">
            <div class="carousel">
                <img src="img/kitties.png" class="carousel">
                <h1 class="pageTitle">Ado????o</h1>
            </div>
        </div>
        <div class="background">
            <div class="head">
                <h1>Filtros </h1>
            </div>
            <div class="pad">
                <div class="head">
                    <select name="species">
        
                        <option value="none" selected>
                            Select a species
                        </option>
        
                        <optgroup label="Cats">
                            <option value="persian">
                                Persian
                            </option>
                            <option value="maine">
                                Maine Coon
                            </option>
                            <option value="siames">
                                Siam??s
                            </option>
                        </optgroup>
        
                        <optgroup label="Dogs">
                            <option value="bulldog">
                                Bulldog
                            </option>
                            <option value="hellspawn">
                                Chihuahua
                            </option>
                            <option value="beagle">
                                Beagle
                            </option>
                        </optgroup>
                    </select><br><br>
                    Idade m??xima:
                    <input type="range" name="age"><br><br>
                </div>
            </div>


            <div class="holder_box">
                <div class="adopt" v-for="pet in pets">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Nome: {{pet.nome}}</p>
                        <p>Idade: {{pet.idade}}</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
    `,
    methods: {
        login: async function (){
            try {
                let resp = await fetch("http://localhost:3000/adopts", {
                    method: 'GET'
                });    
                this.pets = await resp.json();
            }
            catch (e) {console.log("Error: " + e);}
        }
    },
    mounted(){
        this.login();
    }
};

const sobre = {
    template: `
    <div>
        <div class="background">
            <img src="img/abouttrees.jpg" class="carousel">
            <h1 class="pageTitle">Sobre N??s</h1>
            <div class="container">
                <div class="something">
                    <img src="img/sobre_1.jpg" class="carousel">
                </div>
                <div class="complimentary">
                    <div class="head">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                        maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                        consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna
                        maximus. Suspendisse sit amet ex vestibulum, semper nunc quis,
                        consequat arcu. Pellentesque feugiat molestie enim a aliquam.
                    </p>

                    <br>
                </div>
            </div>
        </div>
    </div>
    `
};

const entrar = {
    data: function(){
        return{
            nick: null, 
            senha: null,
            hiddenButtons: ``
        }
    },
    template: `
    <div>
        <img src="img/logInImage.png" class="carousel">
        <h1 class="pageTitle">Entrar</h1>
        <div class="background2">
            <div class="text-center">
                <label for="fname"><b>Nome da Conta:</b></label>
                <br>
                <input type="text" id="fname" name="firstname" placeholder="Nome da conta.." v-model="nick">
                <br>
                <label for="fname"><b>Senha:</b></label>
                <br>
                <input type="password" id="fname" name="firstname" placeholder="Sua Senha.." v-model="senha">
                <br>
                <button type="button" @click="login">
                Entrar
                </button>
            </div>
        </div>
    </div>
    `,
    methods:
    {
        login: async function() {
            try {
                let resp = await fetch("http://localhost:8000/users/" + this.nick + "/" + this.senha, {
                    method: 'GET'
                });    
                const data = await resp.json();
                alert(data.message);

                if(data.admin == true){
                    this.$root.hiddenButton1 = `<router-link to="/admin_doacoes">Gerenciar ado????es</router-link>`;
                    this.$root.hiddenButton2 = `<router-link to="/admin_estoque">Gerenciar estoque</router-link>`;
                }
            }
            catch (e) {console.log("Error: " + e);}
        }
    },
    mounted(){
        this.$root.hiddenButtons = this.hiddenButtons;
    }
}

const registrar = {
    data: function(){
        return{
            nome: null,
            apelido: null,
            email: null, 
            endereco: null,
            telefone: null,
            senha: null,
            check: null
        }
    },
    template: `
    <div>
        <img src="img/registrar.jpg" class="carousel">
        <h1 class="pageTitle">Registrar</h1>
		<div class="background2">
			<div class="text-center">
				<label for="fname"><b>Nome Completo:</b></label>
				<br>
				<input type="text" id="fname" class="nomeCliente" name="name" placeholder="Digite seu nome.." v-model="nome">
				<br>
				<label for="fname"><b>Nome da Conta:</b></label>
				<br>
				<input type="text" id="fname" class="apelidoCliente" name="nickname" placeholder="Digite seu usu??rio.." v-model="apelido">
				<br>
				<label for="fname"><b>E-mail:</b></label>
				<br>
				<input type="text" id="fname" class="emailCliente" name="email" placeholder="Digite seu email.." v-model="email">
				<br>
				<br>
				<label for="fname"><b>Endere??o:</b></label>
				<br> 
				<input type="text" id="fname" name="address" class="enderecoCliente" placeholder="Digite seu endere??o.." v-model="endereco"> 
				<br>
				<br>
				<label for="fname"><b>Telefone:</b></label>
				<br>
				<input type="text" id="fname" class="telefoneCliente" name="phone" placeholder="Digite seu telefone.." v-model="telefone">
				<br>
				<label for="fname"><b>Senha:</b></label>
				<br>
				<input type="password" id="fname" class="senhaCliente" name="password" placeholder="Digite sua senha.." v-model="senha">
				<br>
				<label for="fname"><b>Confirme sua senha:</b></label>
				<br>
				<input type="password" id="fname" name="confirmation" placeholder="Digite sua senha novamente..">
				<br>
				<br>
				<br>
				<label class="container">Marque aqui caso queira receber notifica????es por e-mail.
					<input type="checkbox" v-model="check">
					<span class="checkmark"></span>
				</label>
				<br>
                <button type="button" @click="registrar">
                Cadastrar
                </button>
            </div>
        </div>
    </div>
    `,
    methods: {
        registrar: async function() {
            try {
                let resp = await fetch("http://localhost:8000/users", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: this.nome, nick: this.apelido, email: this.email, endereco: this.endereco, telefone: this.telefone, senha: this.senha, check: this.check, admin: false})
                });    
                const data = await resp.json();
                alert(data.message);
            }
            catch (e) {console.log("Error: " + e);}
        }
    }
}

const veterinario = {
    template: `
    <div>
        <div class="background">
            <img src="img/vet.jpg" class="carousel">
            <h1 class="pageTitle">Veterin??rio</h1>
            <div class="container">
                <div class="text-center">
                    <p>Agende o banho do seu pet com nossos profissionais, 
                    etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nulla vestibulum mauris ut diam vulputate, nec
                    scelerisque magna maximus. Suspendisse sit amet ex vestibulum,
                    semper nunc quis, consequat arcu. Pellentesque feugiat
                    molestie enim a aliquam.
                    </p><br>
                    <router-link to="/agendamento">
                        <button class="buyButton"> Agendamento </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    `
}

const tosa = {
    template:`
    <div>
        <div class="background">
            <img src="img/tosa.jpg" class="carousel">
            <h1 class="pageTitle">Tosa</h1>
            <div class="container">
                <div class="text-center">
                    <p>Agende o banho do seu pet com nossos profissionais, 
                    etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nulla vestibulum mauris ut diam vulputate, nec
                    scelerisque magna maximus. Suspendisse sit amet ex vestibulum,
                    semper nunc quis, consequat arcu. Pellentesque feugiat
                    molestie enim a aliquam.</p><br>
                    <router-link to="/agendamento">
                        <button class="buyButton"> Agendamento </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    `
}

const banho = {
    template:`
    <div>
        <div class="background">
            <img src="img/banho.jpg" class="carousel">
            <h1 class="pageTitle">Banho</h1>
            <div class="container">
                <div class="text-center">
                    <p>Agende o banho do seu pet com nossos profissionais, 
                    etc. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nulla vestibulum mauris ut diam vulputate, nec
                    scelerisque magna maximus. Suspendisse sit amet ex vestibulum,
                    semper nunc quis, consequat arcu. Pellentesque feugiat
                    molestie enim a aliquam.</p><br>
                    <router-link to="/agendamento">
                        <button class="buyButton"> Agendamento </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    `
}

const agendamento = {
    data: function(){
        return{
            data: null,
            servico: null
        }
    },
    template: `
    <div>
        <div class="background">
            <img src="img/servicos.jpg" class="carousel">
            <h1 class="pageTitle">Agendamento</h1>
        </div>
        <div class="background2">
            <div class="text-center">
                Data:
                <input required type="date" id="fname" name="date" v-model="data">
                <br>
                <br>
                <select required name="services" v-model="servico">
                    <option value="" disabled selected hidden> Escolha um servi??o... </option>
                    <option value="vet"> Veterin??rio </option>
                    <option value="banho"> Banho </option>
                    <option value="tosa"> Tosa </option>
                </select>
                <br>
                <br>
                <button type="button" @click="agendar">
                    Agendar
                </button>
            </div>
        </div>
    </div>
    `,
    methods: {
        agendar: async function() {
            try {
                let resp = await fetch("http://localhost:8000/services/agendar", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({data: this.data, servico: this.servico})
                });    
                const data = await resp.json();
                alert(data.message);
            }
            catch (e) {console.log("Error: " + e);}
        }
    }
}

const admin_doacoes = {
    data: function(){
        return{
            nome: null,
            apelido: null,
            raca: null,
            vacinas: null,
            idade: null
        }
    },
    template:`
    <div>
        <img src="img/abouttrees.jpg" class="carousel">
        <h1 class="pageTitle">Novas Ado????es</h1>
        <div class="background2">
            <div class="text-left">
                <div class="text-center">
                    <div class="tabletenis">	
                    </div>
                </div>
                <div class="text-center">
                    <br>
                    <label for="fname"><b>Nome:</b></label>
                    <br>
                    <input type="text" id="fname" name="name" placeholder="Digite o nome.." v-model="nome">
                    <br>
                    <label for="fname"><b>Apelido:</b></label>
                    <br>
                    <input type="text" name="apelido" placeholder="Digite o apelido.." v-model="apelido">
                    <br>
                    <label style="float: center" for="fname"><b>Ra??a:</b></label>
                    <br>
                    <input style="float: center" type="text" id="fname" name="race" placeholder="Digite a ra??a.." v-model="raca">
                    <br>
                    <label for="fname"><b>Vacina:</b></label>
                    <br>
                    <input type="text" id="fname" name="vaccine" placeholder="Digite a vacinas.." v-model="vacinas">
                    <br>
                    <label for="fname"><b>Idade:</b></label>
                    <br>
                    <input type="text" id="fname" name="idades" placeholder="Digite a idade.." v-model.number="idade">
                    <br>
                    <button type="button" @click="cadastrar">
                        Inserir
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        cadastrar: async function() {
            try {
                let resp = await fetch("http://localhost:3000/adopts/data", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({nome: this.nome, apelido: this.apelido, raca: this.raca, vacina: this.vacinas, idade: this.idade})
                });
                const data = await resp.json();  
                alert(data.message);
            }
            catch (e) {console.log("Error: " + e);}
        }
    }
}

const admin_estoque = {
    data: function(){
        return{
            nome: null, 
            preco: null,
            quantidade: null
        }
    },
    template:`
    <div>
    <img src="img/abouttrees.jpg" class="carousel">
    <h1 class="pageTitle">Novos Produtos</h1>
    <div class="background2">
        <div class="text-left">
            <center>
                <div class="tabletenis">
                    
                </div>
            </center>
            <div class="text-center">
                <br>
                <label for="fname"><b>Nome do Produto:</b></label>
                <br>
                <input type="text" id="fname" name="product" placeholder="Digite o produto.." v-model="nome">
                <br>
                <label style="float: center" for="fname"><b>Pre??o:</b></label>
                <br>
                <input style="float: center" type="text" id="fname" name="price" placeholder="Digite o pre??o.." v-model.number="preco">
                <br>
                <label for="fname"><b>Quantidade:</b></label>
                <br>
                <input type="text" id="fname" name="quantity" placeholder="Digite a quantidade.." v-model.number="quantidade">
                <br>
                <button type="button" @click="inserir">
                    Inserir
                </button>
            </div>
        </div>
    </div>
    </div>
    `,
    methods: {
        inserir: async function() {
            try {
                let resp = await fetch("http://localhost:3000/products/data", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({nome: this.nome, preco: this.preco, qtd: this.quantidade})
                });
                const data = await resp.json();  
                alert(data.message);
            }
            catch (e) {console.log("Error: " + e);}
        }
    }
}

const admin_servicos = {
    template:`
    <div>
        <img src="img/abouttrees.jpg" class="carousel">
        <h1 class="pageTitle">Novos Servi??os</h1>
		<div class="background2">
			<div class="text-left">
				<center>
					<div class="tabletenis">
						
					</div>
				</center>
				<div class="text-center">
					<br>
					<label for="fname"><b>Tipo de Servi??o:</b></label>
					<br>
					<input type="text" id="fname" name="service" placeholder="Digite o servi??o..">
					<br>
					<label style="float: center" for="fname"><b>Email:</b></label>
					<br>
					<input style="float: center" type="text" id="fname" name="email" placeholder="Digite o email..">
					<br>
					<label for="fname"><b>Data do Agendamento:</b></label>
					<br>
					<input required type="date" id="fname" name="date">
					<br>
                    <button type="button">
                        Inserir
                    </button>
				</div>
            </div>
        </div>
    </div>
    `
}

const errorNotFound = {
    template: `
    <div>
        <div class="background">
            <img src="img/404cat.png" class="carousel">
            <h1 class="pageTitle">NOT FOUND</h1>
        </div>
        <div class="background">
        a
        </div>
    </div>
    `
};

const routes = [
    { path: '/', component: home},
    { path: '/produtos', component: produtos},
    { path: '/servicos', component: servicos},
    { path: '/adocao', component: adocao},
    { path: '/sobre', component: sobre},
    { path: '/entrar', component: entrar},
    { path: '/registrar', component: registrar},
    { path: '/veterinario', component: veterinario},
    { path: '/tosa', component: tosa},
    { path: '/banho', component: banho},
    { path: '/agendamento', component: agendamento},
    { path: '/admin_doacoes', component: admin_doacoes},
    { path: '/admin_estoque', component: admin_estoque},
    { path: '/admin_servicos', component: admin_servicos},
    { path: '/*', component: errorNotFound}
];

const router  = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        isActive: false,
        items: [
            { name: 'Logo' },
            { name: 'In??cio'}
        ],
        hiddenButton1: ``,
        hiddenButton2: ``,

        rNome: null,
        rApelido: null,
        rEmail: null, 
        rEndereco: null,
        rTelefone: null,
        rSenha: null,
        rConfirm: null,
        rCheck: null,

        eNick: null, 
        eSenha: null,
        eHiddenButtons: ``,

        carrinho: []
    },
    template: `
    <div>
        <div id="overlay"></div>
        <ul id="navbar">
            <img src="img/dogecon.png" class="icon" title="Pet Shop!">
            <li><router-link to="/">In??cio</router-link></li>
            <li><router-link to="/produtos">Produtos</router-link></li>
            <li><router-link to="/servicos">Servi??os</router-link></li>
            <li><router-link to="/adocao">Ado????o</router-link></li>
            <li><router-link to="/sobre">Sobre</router-link></li>
            <li><router-link to="/admin_doacoes" v-html="this.hiddenButton1"></router-link></li>
            <li><router-link to="/admin_estoque" v-html="this.hiddenButton2"></router-link></li>
            <li style="float: right"><a data-modal-target="#carrinho">Carrinho</a></li>
            <li style="float: right"><a data-modal-target="#registrar">Registrar</a></li>
            <li style="float: right"><a data-modal-target="#entrar">Entrar</a></li>
        </ul>

        <div class="thin"></div>
        


        <div class="body">
            <router-view></router-view>

            <div class="background">

                <img src="img/lineup.png" class="carousel">

                <div class="footer">
                    <p>
                        Contate-nos:<br><br>

                        loren.ipsum@dolor.sit<br>
                        Rua Lorem Ipsum Dolor, 123<br>
                        +55 (XX) 1234-5678
                    </p>
                </div>
                <div class="footer">
                    <p>
                        <router-link to="/">In??cio</router-link><br><br>
                        <router-link to="/produtos">Produtos</router-link><br><br>
                        <router-link to="/servicos">Servi??os</router-link><br><br>
                        <router-link to="/adocao">Ado????o</router-link><br><br>
                        <router-link to="/sobre">Sobre</router-link><br><br>
                    </p>
                </div>
            </div>

            <div class="modal" id="registrar">
                <div class="modal-header">
                    <h1>Registrar</h1>
                    <button data-close-button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="img/registrar.jpg" class="carousel">
                    <div class="background2">
                        <div class="text-center">
                            <b>Nome Completo:</b>
                            <input type="text" id="fname" name="name" placeholder="Digite seu nome.." v-model="rNome"><br>
                            <b>Nome da Conta:</b><br>
                            <input type="text" id="fname" name="nickname" placeholder="Digite seu usu??rio.." v-model="rApelido"><br>
                            <b>E-mail:</b><br>
                            <input type="text" id="fname" name="email" placeholder="Digite seu email.." v-model="rEmail"><br>
                            <b>Endere??o:</b><br>
                            <input type="text" id="fname" name="address" placeholder="Digite seu endere??o.." v-model="rEndereco"><br>
                            <b>Telefone:</b><br>
                            <input type="text" id="fname" name="phone" placeholder="Digite seu telefone.." v-model="rTelefone"><br>
                            <b>Senha:</b><br>
                            <input type="password" id="fname" name="password" placeholder="Digite sua senha.." v-model="rSenha"><br>
                            <b>Confirme sua senha:</b><br>
                            <input type="password" id="fname" name="confirmation" placeholder="Digite sua senha novamente.." v-model="rConfirm"><br>
                            <input type="checkbox" v-model="rCheck">Marque aqui caso queira receber notifica????es por e-mail.<br>
                            <button type="button" @click="registrar" data-close-button>
                            Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="entrar">
                <div class="modal-header">
                    <h1>Conectar-se</h1>
                    <button data-close-button class="close-button">&times;</button>
                </div>
                <div>
                    <img src="img/logInImage.png" class="carousel">
                    <div class="background2">
                        <div class="text-center">
                            <b>Nome da Conta:</b><br>
                            <input type="text" id="fname" name="firstname" placeholder="Nome da conta.." v-model="eNick"><br>
                            <b>Senha:</b><br>
                            <input type="password" id="fname" name="firstname" placeholder="Sua Senha.." v-model="eSenha"><br>
                            <button type="button" @click="login" data-close-button> Entrar </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="carrinho">
                <div class="modal-header">
                    <h1>Carrinho</h1>
                    <button data-close-button class="close-button">&times;</button>
                </div>
                <div>
                    <img src="img/cart.png" class="carousel">
                    <div class="background2">
                    </div>
                    <div class="background2">
                            <div class="text-center">

                            <div v-for="(item, index) in carrinho">
                                {{item.nome}} | R$ {{item.preco}} <br>
                                <button @click="apagarItem(index)"> Deletar </button>
                            </div>

                            <button @click="finalizarCompra"> Comprar Tudo </button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        setActive: function(event) {
            this.isActive = !this.isActive;
        },
        registrar: async function() {
            try {
                let resp = await fetch("http://localhost:3000/users/data", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({nome: this.rNome, apelido: this.rApelido, email: this.rEmail, endereco: this.rEndereco, telefone: this.rTelefone, senha: this.rSenha, check: this.rCheck, admin: false})
                });
                const data = await resp.json();
                alert(data.message);
            }
            catch (e) {console.log("Error: " + e);}
        },
        login: async function() {
            try {
                let resp = await fetch("http://localhost:3000/users/" + this.eNick + "/" + this.eSenha, {
                    method: 'GET'
                });    
                const data = await resp.json();
                alert(data.message);

                if(data.admin == true){
                    this.$root.hiddenButton1 = `<router-link to="/admin_doacoes">Gerenciar ado????es</router-link>`;
                    this.$root.hiddenButton2 = `<router-link to="/admin_estoque">Gerenciar estoque</router-link>`;
                }
            }
            catch (e) {console.log("Error: " + e);}
        },
        apagarItem: async function(index){
            this.carrinho.splice(index, 1);
        },
        finalizarCompra: async function(){

            for(let i = 0; i < this.carrinho.length; i++){
                try {
                    console.log(JSON.stringify({nome: this.carrinho[i].nome, preco: this.carrinho[i].preco, qtd: this.carrinho[i].qtd}));
                    let resp = await fetch("http://localhost:3000/products/data", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({nome: this.carrinho[i].nome, preco: this.carrinho[i].preco, qtd: this.carrinho[i].qtd}) //this.carrinho.json()
                    });    
                }
                catch (e) {console.log("Error: " + e);}
            }
            this.carrinho = null;
        }
    },

    router
})

$('#navbar li').click(function(e) {
    $('#navbar li').removeClass('active');
    $(this).addClass('active');
});

function addCart(){
    alert("Produto adicionado ao carrinho!");
}


const openModalButtons  = document.querySelectorAll('[data-modal-target]');
const closeModalButtons  = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if(modal == null) return;
    modal.classList.add('activated');
    overlay.classList.add('activated');
}

function closeModal(modal) {
    if(modal == null) return;
    modal.classList.remove('activated');
    overlay.classList.remove('activated');
}