const elem = document.querySelectorAll(".hero__languages-item");
    var leng = [
    'url("../assets/images/apex.svg")',
    'url("../assets/images/ts.svg")',
    'url("../assets/images/css.svg")',
    'url("../assets/images/python.svg")',
    'url("../assets/images/scala.svg")',
    'url("../assets/images/cplus.svg")',
    'url("../assets/images/ruby.svg")',
    'url("../assets/images/sass.svg")',
    'url("../assets/images/go.svg")',
    'url("../assets/images/xml.svg")',
    'url("../assets/images/java.svg")',
    'url("../assets/images/less.svg")',
    'url("../assets/images/php.svg")',
    'url("../assets/images/js.svg")',
    'url("../assets/images/kotlin.svg")',
    'url("../assets/images/jsp.svg")',
    'url("../assets/images/shellscript.svg")',
    'url("../assets/images/c.svg")',
    'url("../assets/images/sql.svg")',
    'url("../assets/images/coffeescript.svg")',
    'url("../assets/images/velocity.svg")',
    'url("../assets/images/elixir.svg")',
    'url("../assets/images/visualforce.svg")',
    'url("../assets/images/csharp.svg")',
    'url("../assets/images/markdown.svg")',
    'url("../assets/images/json.svg")',
    'url("../assets/images/dockerfile.svg")',
    ];
    var leng_i = 0;
    var leng_i_ant = 0;
    var count = 0;
    var elem_i  = Math.floor(Math.random() * elem.length); 

    function logosNext() {
      // Con lo siguiente nos aseguramos que un elemento no se convierta en el mismo logo 2 veces seguidas.
      do{
        leng_i = Math.floor(Math.random() * leng.length); 
      }
      while(leng_i_ant === leng_i)
   
      leng_i_ant = leng_i; 
      elem[elem_i].style.opacity = 0; 
      
      setTimeout("logosSlide()",800);
      // El cambio a logoSlide() se da aplicando la transición en CSS
    }
    function logosSlide() {
      
      if(count !== 0) {
      // Se coloca un nuevo logo de lenguaje
      elem[elem_i].style.backgroundImage = leng[leng_i];

      elem[elem_i].style.opacity = 1;
      //Con opacity 1 es suave la transición al nuevo backgroundImage gracias al transition: opacity del css

      // Aquí se consigue un nuevo número aleatorio para elegir el sgt elem:
      elem_i  = Math.floor(Math.random() * elem.length); 

      } else {
      elem[elem_i].style.opacity = 1;
      }
      count++;
      setTimeout("logosNext()",Math.floor(Math.random() * 750 + 50));
    }
 
    logosSlide();