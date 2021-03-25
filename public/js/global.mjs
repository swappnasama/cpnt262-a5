const imageTemplate= document.querySelector('#image-template');
if(imageTemplate!== null){
//Fetching gallery information
fetch('/gallery')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
   
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();

  })
  .then(function(data){
    
      //consts decleration
      const imageTemplate= document.querySelector('#image-template');
      const main= document.querySelector('main');

      //looping through image object array galleryImages
      data.forEach(function(images){
        //cloning the template
        const clone = imageTemplate.content.cloneNode(true);

        // getting all the a elements in clone
      
        const anchor=clone.querySelectorAll('a');

        //looping throught array anchor which contains all the <a> tags in clone
        anchor.forEach(function(item){
          item.href=images.linkURL;
        });

        //setting all the image data to appropriate attributes
        clone.querySelector('img').id=images.id;
        clone.querySelector('img').src=images.pathURL;
        clone.querySelector('img').width=images.width;
        clone.querySelector('img').height=images.height;
        clone.querySelector('img').alt=images.title;
        clone.querySelector('img').title=images.title;

        //setting data into figcaption
        clone.querySelector('h5').innerHTML=images.title;

        clone.querySelector('p').innerHTML=images.description;

        clone.querySelector('span').innerHTML=`Photo by ${images.credit} on ${images.creditURL}`;

        //appending clone to main to display image gallery
        main.appendChild(clone);

      });
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
}
  //mobile navigation scripts
  const mobileNav= document.querySelector('.mobile-nav');
  const close= document.querySelector('.close');
  const nav= document.querySelector('nav');

  mobileNav.addEventListener('click',function(){
    
    nav.classList.add('show');

  });
  close.addEventListener('click',function(){

    nav.classList.remove('show');

  });


  