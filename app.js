const data = [
  {
    id: 1,
    title: "Laptop Gamer",
    description: "Laptop potente para videojuegos.",
    category: "Gaming",
    image: "gaming.jpg"
  },
  {
    id: 2,
    title: "Laptop de Oficina",
    description: "Laptop ligera para el trabajo diario.",
    category: "Office",
    image: "https://example.com/laptop-oficina.jpg"
  },
  {
    id: 3,
    title: "Laptop de Diseño",
    description: "Laptop con gran capacidad gráfica.",
    category: "Design",
    image: "https://example.com/laptop-diseno.jpg"
  },
  {
    id: 4,
    title: "Laptop Ultra Delgada",
    description: "Laptop ultra delgada y fácil de transportar.",
    category: "Portable",
    image: "https://example.com/laptop-ultra-delgada.jpg"
  },
  {
    id: 5,
    title: "Laptop Creativa",
    description: "Laptop para creatividad y edición de fotos.",
    category: "Creative",
    image: "https://example.com/laptop-creativa.jpg"
  }
];

let currentPage = 1;
let itemsPerPage = 3;


const renderGallery = (filteredData) => {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    gallery.appendChild(card);
  });
};

const filterImages = () => {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  currentPage = 1; 
  renderGallery(filteredData);
};


const goToPage = (page) => {
  currentPage = page;
  filterImages();
};

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
});

document.getElementById('next').addEventListener('click', () => {
  const filteredData = data.filter(item => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  if (currentPage * itemsPerPage < filteredData.length) {
    goToPage(currentPage + 1);
  }
});

document.getElementById('search').addEventListener('input', filterImages);
document.getElementById('categoryFilter').addEventListener('change', filterImages);

// Inicializar la galería con los datos filtrados
filterImages();



// Inicializar la galería con los datos filtrados

/*
const data = [
    {
      id: 1,
      title: "Laptop Gamer",
      description: "Laptop potente para videojuegos.",
      category: "Gaming",
      image: "gaming.jpg"
    },
    {
      id: 2,
      title: "Laptop de Oficina",
      description: "Laptop ligera para el trabajo diario.",
      category: "Office",
      image: "https://example.com/laptop-oficina.jpg"
    },
    {
      id: 3,
      title: "Laptop de Diseño",
      description: "Laptop con gran capacidad gráfica.",
      category: "Design",
      image: "https://example.com/laptop-diseno.jpg"
    },
    {
      id: 4,
      title: "Laptop Ultra Delgada",
      description: "Laptop ultra delgada y fácil de transportar.",
      category: "Portable",
      image: "https://example.com/laptop-ultra-delgada.jpg"
    },
    {
      id: 5,
      title: "Laptop Creativa",
      description: "Laptop para creatividad y edición de fotos.",
      category: "Creative",
      image: "https://example.com/laptop-creativa.jpg"
    }
  ];
  
  let currentPage = 1;
  const itemsPerPage = 2;
  
  // Función para renderizar la galería
  const renderGallery = (filteredData) => {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredData.slice(start, end);
  
    pageData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="info">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
      gallery.appendChild(card);
    });
  };
  
  // Función para filtrar las imágenes
  const filterImages = () => {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
  
    const filteredData = data.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
      
      // Verificar si hay una categoría seleccionada y si coincide con la categoría del artículo
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
  
      return matchesSearch && matchesCategory;
    });
  
    renderGallery(filteredData);
  };
  
  // Paginación: Funciones para cambiar de página
  const goToPage = (page) => {
    currentPage = page;
    filterImages();
  };
  
  document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });
  
  document.getElementById('next').addEventListener('click', () => {
    const filteredData = data.filter(item => {
      const searchQuery = document.getElementById('search').value.toLowerCase();
      const selectedCategory = document.getElementById('categoryFilter').value;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
    if (currentPage * itemsPerPage < filteredData.length) {
      goToPage(currentPage + 1);
    }
  });
  
  document.getElementById('search').addEventListener('input', filterImages);
  document.getElementById('categoryFilter').addEventListener('change', filterImages);
  
  // Inicializar la galería con los datos filtrados
  filterImages();
  
*/