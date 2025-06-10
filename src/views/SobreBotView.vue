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
import Carlos from "@/assets/carloseduardo.jpg";
import Heitor from "@/assets/heitor.jpeg";
import Kallel from "@/assets/kallel.jpeg";
import Display from "@/assets/Display.jpeg";
import fotoNovo3 from "@/assets/foto-novo3.jpg";

const instance = getCurrentInstance();

onMounted(() => {
  instance.emit("update-title", "Sobre o Bot");
});

const authors = ref([
  {
    name: "Carlos",
    image: Carlos,
    link: "https://www.instagram.com/carloos_edu_01?igsh=cXk2OTduaHhuN2Yw",
    description: "Discente do IFPR - Campus Assis Chateaubriand",
  },
  {
    name: "Heitor",
    image: Heitor,
    link: "https://www.instagram.com/heitor_gavioli?igsh=angweDNpMmMyanhz",
    description: "Discente do IFPR - Campus Assis Chateaubriand",
  },
  {
    name: "Kallel",
    image: Kallel,
    link: "https://www.instagram.com/rag82815?igsh=MXQzcHNiY3d4Zm5ncg==",
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
#sobrebot-view {
  /* A margem para acomodar a navbar lateral em telas grandes */
  margin-left: 260px; 
  padding: 20px;
  /* Transição suave para a margem quando a tela for redimensionada */
  transition: margin-left 0.3s ease; 
}

.authors-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px; /* Cria um espaço consistente entre os cards */
  padding: 40px 0; /* Espaçamento vertical */
}

.author {
  width: 22%; 
  min-width: 280px; /* Garante que o card não fique muito espremido */
  
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
}

.author:hover {
  transform: translateY(-5px);
}

.author a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #f0f0f0;
}

.author h3 {
  font-size: 1.2em;
  margin-top: 10px;
  margin-bottom: 10px;
}

.author p {
  font-size: 1em;
  color: #555;
  flex-grow: 1;
}


/* --- MEDIA QUERY PARA TABLETS (Telas Médias) --- */
/* Aplica estes estilos quando a tela for de 1024px ou menor */
@media (max-width: 1024px) {
  .author {
    width: 45%; 
  }
}


/* --- MEDIA QUERY PARA CELULARES (Telas Pequenas) --- */
/* Aplica estes estilos quando a tela for de 768px ou menor */
@media (max-width: 768px) {
  #sobrebot-view {
    margin-left: 0; 
    padding: 15px;
  }

  .authors-section {
    gap: 15px;
  }

  .author {
    width: 90%; 
    min-width: unset;
  }

  .author h3 {
    font-size: 1.1em;
  }

  .author p {
    font-size: 0.9em;
  }
}

body {
  background-color: #f8f8f8;
  font-family: 'Arial', sans-serif;
}
</style>
