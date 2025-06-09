<template>
  <div id="sobrebot-view">
    <!-- ... (sua navbar) ... -->

    <!-- Seção de Autores -->
    <div class="authors-section">
      <div v-for="(author, index) in authors" :key="index" class="author">
        <a :href="author.link" target="_blank" rel="noopener noreferrer">
          <img :src="author.image" alt="Foto do autor">
          <h3>{{ author.name }}</h3>
          <p>{{ author.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance, ref } from 'vue';
import Display from "@/assets/Display.jpeg";
import fotoNovo3 from "@/assets/foto-novo3.jpg";

const instance = getCurrentInstance();

onMounted(() => {
  instance.emit("update-title", "Sobre o Bot");
});

const authors = ref([
  {
    name: "Carlos",
    image: Display,
    link: "https://www.instagram.com/anna.julia_015?igsh=MTg2dmZ2NG95Z3Z4dg==",
    description: "Discente do IFPR - Campus Assis Chateaubriand",
  },
  {
    name: "Heitor",
    image: Display,
    link: "https://www.instagram.com/nicolas.bordinii?igsh=MXdxOGx3NThmeTN2bA==",
    description: "Discente do IFPR - Campus Assis Chateaubriand",
  },
  {
    name: "Kallel",
    image: Display,
    link: "https://www.instagram.com/nikoli_azevedo?igsh=MW4xM29qY2s0emZqaQ==",
    description: "Discente do IFPR - Campus Assis Chateaubriand",
  },
  {
    name: "Vagner Simoes",
    image: fotoNovo3,
    link: "https://www.instagram.com/prof.vagnersantos",
    description: "Docente do IFPR - Campus Assis Chateaubriand",
  },
]);
</script>

<style>
/* Estilos para a navbar */
.sobrebot-view {
  margin-left: 260px;
  padding: 20px;
}
#menu {
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 1256px;
}

/* Estilos para o logotipo e texto */
.logo-container {
  display: flex;
  align-items: center;
}

.logo-container img {
  width: 100px;
  height: auto;
  margin-right: 5px;
}

/* Estilos para os itens da navbar */
#menu li {
  list-style-type: none;
  display: inline;
  margin-right: 15px;
}

/* Adiciona um espaçamento ao conteúdo para não ficar atrás da navbar fixa */
body {
  margin-top: 70px;
}

/* Estilo para a seção de autores */
.authors-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 20px;
}

.author {
  text-align: center;
  width: 30%;
  margin-bottom: 40px;
}

.author img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.author h3 {
  margin-top: 10px;
}

.author p {
  font-size: 14px;
  color: #555;
}

/* Estilos gerais */
body {
  background-color: #f8f8f8;
  /* Cor de fundo suave */
  font-family: 'Arial', sans-serif;
  /* Fonte legível */
}

/* Seção de autores */
.authors-section {
  padding: 40px 20px;
  /* Espaçamento adicional */
}

.author {
  width: 25%;
  /* Ajuste a largura dos contêineres */
  margin-bottom: 30px;
  border-radius: 10px;
  /* Bordas arredondadas */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  /* Sombra suave */
  padding: 20px;
  /* Espaçamento interno */
}

.author img {
  border-radius: 50%;
  /* Foto redonda */
  margin-bottom: 15px;
  /* Espaçamento entre foto e nome */
}

.author h3 {
  font-size: 1.2em;
  /* Tamanho de fonte maior para o nome */
  margin-bottom: 10px;
}

.author p {
  font-size: 1em;
  /* Tamanho de fonte padrão para a descrição */
  color: #555;
  /* Cor de texto */
}

/* Navbar */
.navbar-container {
  background-color: #333;
  /* Cor de fundo da navbar */
  color: #fff;
  /* Cor de texto da navbar */
}

#menu li a {
  color: #fff;
  /* Cor dos links da navbar */
  text-decoration: none;
  /* Sem sublinhado */
}

#menu li a:hover {
  text-decoration: underline;
  /* Sublinhado ao passar o mouse */
}
</style>
