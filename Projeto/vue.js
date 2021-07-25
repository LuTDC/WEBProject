
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
                        <h1>Serviços</h1>
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
                            <h2>VETERINÁRIO</h2>
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
                            <h1>Sobre Nós</h1>
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
                    <dd><a href="#Rações"> Rações </a></dd><br>
                    <dd><a href="#Camas"> Camas </a></dd><br>
                    <dd><a href="#Coleiras"> Coleiras </a></dd><br>
                    <dd><a href="#Brinquedos"> Brinquedos </a></dd><br>
                    <dd><a href="#Remédios"> Remédios </a></dd><br>
                    <dd><a href="#Outros"> Outros </a></dd><br>
                </dl>
            </div>
            <div class="productsColumn">
                <dl style="display: flex;">
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                </dl>
                <dl style="display: flex;">
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                </dl>
                <dl style="display: flex;">
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                    <dd class="product">
                        <a href="Produto.html">
                            <img src="img/racao.jpeg" width="200px" height="200px">
                        </a>
                        <h1>Lorem<br>R$XX</h1>
                        <a href="#Comprar"><button type="button" class="buyButton" onclick="addCart()"> Comprar </button></a><br>
                    </dd>
                </dl>
                <div class="paginationDiv">
                    <a href="Products.html" class="pagination"><div> 1 </div></a>
                    <a href="Products.html" class="pagination"><div> 2 </div></a>
                    <a href="Products.html" class="pagination"><div> 3 </div></a>
                    <a href="Products.html" class="pagination"><div> ... </div></a>
                    <a href="Products.html" class="pagination"><div> 7 </div></a>
                </div>
            </div>
        </div>
    </div>
    `
};

const servicos = {
    template: `
    <div class="background">
        <img src="img/servicos.jpg" class="carousel">
        <h1 class="pageTitle">Serviços</h1>
        <div class="background2">
            <div class="text-center">

                <p>A saúde do seu pet é prioridade. Se ele precisar de banho, tosa ou atendimento veterinário, é só marcar conosco.
                Clique no botão abaixo. Você será requisitado login caso não esteja conectado.</p>
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
    template: `
    <div>
        <div class="background">
            <div class="carousel">
                <img src="img/kitties.png" class="carousel">
                <h1 class="pageTitle">Adoção</h1>
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
                                Siamés
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
                    Idade máxima:
                    <input type="range" name="age"><br><br>
                </div>
            </div>


            <div class="holder_box">
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
                <div class="adopt">
                    <div class="text-center">
                        <div class="card">
                            <img src="img/placeHolder2.jpg" width=200px id="img-profile">
                        </div>
        
                        <p>Pet name</p>
                        <p>Pet age</p>
                        
                        <button type="button" onclick="location.href=('img/placeHolder2.jpg')"">
                            Adotar
                        </button>
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
    `
};

const sobre = {
    template: `
    <div>
        <div class="background">
            <img src="img/abouttrees.jpg" class="carousel">
            <h1 class="pageTitle">Sobre Nós</h1>
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
    template: `
    <div>
        <img src="img/logInImage.png" class="carousel">
        <h1 class="pageTitle">Entrar</h1>
        <div class="background2">
            <div class="text-center">
                <label for="fname"><b>Nome da Conta:</b></label>
                <br>
                <input type="text" id="fname" name="firstname" placeholder="Nome da conta..">
                <br>
                <label for="fname"><b>Senha:</b></label>
                <br>
                <input type="password" id="fname" name="firstname" placeholder="Sua Senha..">
                <br>
                <button type="button" onclick="logIn()">
                Entrar
                </button>
            </div>
        </div>
    </div>
    `
}

const registrar = {
    template: `
    <div>
        <img src="img/registrar.jpg" class="carousel">
        <h1 class="pageTitle">Registrar</h1>
		<div class="background2">
			<div class="text-center">
				<label for="fname"><b>Nome Completo:</b></label>
				<br>
				<input type="text" id="fname" name="name" placeholder="Digite seu nome..">
				<br>
				<label for="fname"><b>Nome da Conta:</b></label>
				<br>
				<input type="text" id="fname" name="nickname" placeholder="Digite seu usuário..">
				<br>
				<label for="fname"><b>E-mail:</b></label>
				<br>
				<input type="text" id="fname" name="email" placeholder="Digite seu email..">
				<br>
				<br>
				<label for="fname"><b>Endereço:</b></label>
				<br>
				<input type="text" id="fname" name="address" placeholder="Digite seu endereço..">
				<br>
				<br>
				<label for="fname"><b>Telefone:</b></label>
				<br>
				<input type="text" id="fname" name="phone" placeholder="Digite seu telefone..">
				<br>
				<label for="fname"><b>Senha:</b></label>
				<br>
				<input type="password" id="fname" name="password" placeholder="Digite sua senha..">
				<br>
				<label for="fname"><b>Confirme sua senha:</b></label>
				<br>
				<input type="password" id="fname" name="confirmation" placeholder="Digite sua senha novamente..">
				<br>
				<br>
				<br>
				<label class="container">Marque aqui caso queira receber notificações por e-mail.
					<input type="checkbox">
					<span class="checkmark"></span>
				</label>
				<br>
                <button type="button" onclick="register()">
                Cadastrar
                </button>
            </div>
        </div>
    </div>
    `
}

const veterinario = {
    template: `
    <div>
        <div class="background">
            <img src="img/vet.jpg" class="carousel">
            <h1 class="pageTitle">Veterinário</h1>
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
    template: `
    <div>
        <div class="background">
            <img src="img/servicos.jpg" class="carousel">
            <h1 class="pageTitle">Agendamento</h1>
        </div>
        <div class="background2">
            <div class="text-center">
                Data:
                <input required type="date" id="fname" name="date">
                <br>
                <br>
                <select required name="services">
                    <option value="" disabled selected hidden> Escolha um serviço... </option>
                    <option value="vet"> Veterinário </option>
                    <option value="banho"> Banho </option>
                    <option value="tosa"> Tosa </option>
                </select>
                <br>
                <br>
                <button type="button" onclick="scheduling()">
                    Agendar
                </button>
            </div>
        </div>
    </div>
    `
}

const admin_doacoes = {
    template:`
    <div>
        <img src="img/abouttrees.jpg" class="carousel">
        <h1 class="pageTitle">Novas Adoções</h1>
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
                    <input type="text" id="fname" name="name" placeholder="Digite o nome..">
                    <br>
                    <label style="float: center" for="fname"><b>Raça:</b></label>
                    <br>
                    <input style="float: center" type="text" id="fname" name="race" placeholder="Digite a raça..">
                    <br>
                    <label for="fname"><b>Vacina:</b></label>
                    <br>
                    <input type="text" id="fname" name="vaccine" placeholder="Digite a vacinas..">
                    <br>
                    <label for="fname"><b>Idade:</b></label>
                    <br>
                    <input type="text" id="fname" name="idades" placeholder="Digite a idade..">
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

const admin_estoque = {
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
                <input type="text" id="fname" name="product" placeholder="Digite o produto..">
                <br>
                <label style="float: center" for="fname"><b>Preço:</b></label>
                <br>
                <input style="float: center" type="text" id="fname" name="price" placeholder="Digite o preço..">
                <br>
                <label for="fname"><b>Quantidade:</b></label>
                <br>
                <input type="text" id="fname" name="quantity" placeholder="Digite a quantidade..">
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

const admin_servicos = {
    template:`
    <div>
        <img src="img/abouttrees.jpg" class="carousel">
        <h1 class="pageTitle">Novos Serviços</h1>
		<div class="background2">
			<div class="text-left">
				<center>
					<div class="tabletenis">
						
					</div>
				</center>
				<div class="text-center">
					<br>
					<label for="fname"><b>Tipo de Serviço:</b></label>
					<br>
					<input type="text" id="fname" name="service" placeholder="Digite o serviço..">
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
            { name: 'Início'}
        ]
    },
    template: `
    <div>
        <ul id="navbar">
            <img src="img/dogecon.png" class="icon" title="Pet Shop!">
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/produtos">Produtos</router-link></li>
            <li><router-link to="/servicos">Serviços</router-link></li>
            <li><router-link to="/adocao">Adoção</router-link></li>
            <li><router-link to="/sobre">Sobre</router-link></li>
            <li style="float: right"><router-link to="/registrar">Registrar</router-link></li>
            <li style="float: right"><router-link to="/entrar">Entrar</router-link></li>
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
                        <router-link to="/">Início</router-link><br><br>
                        <router-link to="/produtos">Produtos</router-link><br><br>
                        <router-link to="/servicos">Serviços</router-link><br><br>
                        <router-link to="/adocao">Adoção</router-link><br><br>
                        <router-link to="/sobre">Sobre</router-link><br><br>
                    </p>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        setActive: function(event) {
            this.isActive = !this.isActive;
        }
    },

    router
})

$('#navbar li').click(function(e) {
    $('#navbar li').removeClass('active');
    $(this).addClass('active');
});

function addCart(){
    alert("Item adicionado ao carrinho!");
}

function scheduling(){
    alert("Horário agendado com sucesso!");
}

function adopt(){
    alert("Parabéns! Você anotou seu novo PET! Para levá-lo para o novo lar, dirija-se a nossa loja com a senha: #" + Math.random());
}

function register(){
    alert("Cadastro realizado com sucesso!");
}

function logIn(){
    alert("Login realizado com sucesso!");
}