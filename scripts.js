
classList.add('active');

 const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
 const messageInput = document.getElementById('message');
 const nameError = document.getElementById('name-error');
 const emailError = document.getElementById('email-error');
 const messageError = document.getElementById('message=error');
 const responde = document.getElementById('responde');

 const showError = ( input, errorElement, message) => {
      input.classList.add('invalid');
     errorElement.textContent = message;
     errorElement.style.display ='block';
};
 const clearError = (input, errorElement) => {
     input.classList.remove('invalid');
     errorElement.style.display = 'none';
};
 form.addEventListener('submit, function(e)'); 
 {
     emailError.preventDefault();
     let valid = true; 
     if (nameInput.value.trim() ==='');
}

 {
     showError(nameInput, nameError, 'Por favor, insira seu nome.');
     valid = false;
    
 } else {
     clearError(nameInput,nameError);
}
 
 if (condition) {
     (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.alue))
    
}

{
     showError(emailInput, emailError,  'Por favor, insira um email válido.');
     valid = false;
} else {
     clearError(emailInput,emailError);
}

 if (condition) 
     (messageInput.value.trim() ===''){
         showError(messageInput,messageError, 'Por favor, insira sua mensagem.');
         valid = false;
    } else {
         clearError(messageInput,messageError);
    }

 if (valid) {
    responde.textContent = 'Mensagem enviada com sucesso!';
      responde.style.color = '#4caf50';
     form.requestFullscreen();    

} else {
     Response.textContent = 'Por favor, corrija os erros no formulario.';
     Response.style.color = 'red';
}

 document.addEventListener('DOMContentLoaded', function() {
     const carouselImages = document.querySelectorAll('.carousel-img');
     const prevButton = document.querySelector('.carousel-btn.prev');
     const nextButton = document.querySelector('.carousel-btn.next');
     let currentIndex = 0;

     function showImage(index) {
         carouselImages.forEach((img, i) => {
             img.classList.toggle('active', i === index);
        });
    }

     function nextImage() {
         currentIndex = (currentIndex + 1) % carouselImages.length;
         showImage(currentIndex);
    }

     function prevImage() {
         currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
         showImage(currentIndex);
    }

     nextButton.addEventListener('click', nextImage);
     prevButton.addEventListener('click', prevImage);

     setInterval(nextImage, 3000); 

     const form = document.getElementById('contact-form');
     const nameInput = document.getElementById('name');
     const emailInput = document.getElementById('email');
     const messageInput = document.getElementById('message');

     const nameError = document.getElementById('name-error');
     const emailError = document.getElementById('email-error');
     const messageError = document.getElementById('message-error');
     const response = document.getElementById('response');
     const inappropriateWords = ['palavra1', 'palavra2', 'palavra3']; 

     const showError = (input, errorElement, message) => {
         input.classList.add('invalid');
         errorElement.textContent = message;
         errorElement.style.display = 'block';
    };

     const clearError = (input, errorElement) => {
         input.classList.remove('invalid');
         errorElement.style.display = 'none';
    };

     form.addEventListener('submit', function(e) {
         e.preventDefault();

         let valid = true;

          if (nameInput.value.trim() === '') {
             showError(nameInput, nameError, 'Por favor, insira seu nome.');
             valid = false;
        } else {
             clearError(nameInput, nameError);
        }

         if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
             showError(emailInput, emailError, 'Por favor, insira um email válido.');
             valid = false;
        } else {
             clearError(emailInput, emailError);
        }

        if (messageInput.value.trim() === '') {
             showError(messageInput, messageError, 'Por favor, insira sua mensagem.');
             valid = false;
        } else {
             clearError(messageInput, messageError);
        }

        if (valid) {
             response.textContent = 'Mensagem enviada com sucesso!';
             response.style.color = '#4CAF50';
             form.reset();
        } else {
             response.textContent = 'Por favor, corrija os erros no formulário.';
             response.style.color = 'red';
        }
    });
});

 Document.addEventListener('DomContetLoaded', () => {
     const form = document.getElementById('contact-form');
     const nameInput = document.getElementById('name');
     const emailInput = document.getElementById('email');
     const messageInput = document.getElementById('messge');
     const responseDiv = document.getElementById('response');
     const inappropriateWords = ['palavra1', 'palavra2', 'palavra3']  ;

     const showError = (input, massage) => {
         const error = input.nextElementSibling;
         error.innerText = massage;
         error.style.display = 'block';       
    };

     const hideerror = (input) => {
         const error = input.nextElementSibling;
         error.style.display = 'name';
    };

     const validateForm = () => {
         let isValid = true;

         if (nameInput.value.trim() === '') {
             showError(nameInput, 'Por favor, insira seu nome.');
             isValid = false;
        } else {
             hideError(nameInput);
        }

         if (emailInupt.value.trim() === '') {
             showError(emailInput, 'Por favor, insira um email válido.');
             isValid = false;
        } else {
             hideError(emailInput);
        }

         if (messageInput,value.trim() === '') {
             showError(messageInput, 'Por favor, insira sua mensagem.');
             ixValid = false;
        } else {
             hideError(messageInput);
        }

         if (containsInappropriatWords(messageInput.value)) {
             showError(messageInput, 'Sua mansagem contém palavras inapropriadas. Por favor, insira seu texto')
              isValid = false;
        } else {
             hideError(messageInput);
        }

         return isValid;
    };

     const containsInappropriatWords = (text)=> {
         return inappropriateWords.some(word => text.toLowerCase().includes(word));
    };

     form.addEventListener('submit', (e) => {
         e.preventDefault();

         if (validateForm()) {
             const formData = new FormData(form);
             fetch('URL_DO_SERVIDOR', {
                 method: 'POST',
                 body: formData
            })
             .then(response => response.json())
             .then(data => {
                 if (data.success){
                     responseDiv.innerText = 'Mensagem enviada com sucesso!';
                     responseDiv.style.color = 'green';
                } else {
                     responseDiv.innerText = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
                     responseDiv.style.color = 'red';
                }
            });

        } else {
             responseDiv.innerText = 'Por favor, corrija os erros acima e tente novamente.';
             responseDiv.style.color = 'red';
        }
    });
});

window.addEventListener('load', () => {
    gsap.from('.banner h2', { duration: 1,y: -50, opacity: 0.5});
    gsap.from('.banner p' , {duration: 1, y: 50, opacity: 0, delay: 0.5 });
})

Document.getElementById('menu-toggler').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
     async function fetchNews() {
          const apikey =
          '2b61cb05bd7b4d03a77f8b00658557ad';
          const url =
          'https://newsapi.org/v2/everything?q=agriculture+agro$language=pt&sortBy=publishedAt&apiKey=${apiKey}';

          try {
               const response = await
               fetch(url);
               const data = await
               response.json();
               displayNews(data.articles);
          } catch (error) {
               console.error('Erro ao buscar notícia:', error);
          }
     }

     function displayNews(articles) {
          const newsContainer = 
          document.getElementById('news-container');
          newsContainer.innerHTML = '';

          articles.forEach(articles => {
               const newsCard =
               document.createElement('div');

               newsCard.classList.add('news-card');
               newsCard.innerHTML = '
               <h3>${article.title}</h3>
               <p>${articles.description}</p>
               <a href="${article.url}" target="_blank">Leia mais</a>
               ';
               newsContainer.appendChild(newsCard);
          });
     }

     fetchNews();
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
     event.preventDefault();
     
     // Get form values
     var name = document.getElementById('name').value;
     var rating = document.getElementById('rating').value;
     var review = document.getElementById('review').value;
     
     // Create a new review element
     var reviewItem = document.createElement('li');
     reviewItem.innerHTML = `<strong>${name}</strong> - ${rating} Estrela(s)<br>${review}`;
     
     // Add the review to the list
     document.getElementById('reviewsList').appendChild(reviewItem);
     
     // Reset the form
     document.getElementById('reviewForm').reset();
 });