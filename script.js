const botao = document.getElementById("btnTema");

botao.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

function mascara_telefone ()
        {

         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,17) 
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            
            var tel_formatado = document.getElementById("telefone").value
             
            if (tel_formatado[0]!="+")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="+"+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!="(")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+"("+tel_formatado[3];
                }
            }

            if (tel_formatado[6]!=")")
            {
                if(tel_formatado[6]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,6)+")"+tel_formatado[6]
                }
            }

            if (tel_formatado[12]!="-")
            {
                if(tel_formatado[12]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,12)+"-"+tel_formatado[12]
                }
            }
            
        }


        function mascara_email()
        { var cep_formatado = document.getElementById("email").value
            console.log(email)
            email=email.slice(0,320) 
              console.log(email)
            document.getElementById("email").value=email
       email=document.getElementById("email").value.slice(0,10)
              console.log(email)
        }       

        function mascara_nome()
        { var nome_formatado = document.getElementById("nome").value
            console.log(nome)
            nome=nome.slice(0,100) 
              console.log(nome)
            document.getElementById("nome").value=nome
       nome=document.getElementById("nome").value.slice(0,10)
              console.log(nome)
        }
        
        function mascara_mensagem()
        { var mensagem_formatado = document.getElementById("mensagem").value
            console.log(mensagem)
            mensagem=mensagem.slice(0,100) 
              console.log(mensagem)
            document.getElementById("mensagem").value=mensagem
       mensagem=document.getElementById("mensagem").value.slice(0,10)
              console.log(mensagem)
        }


        const abrirModalBtn = document.getElementById('abrirModal');
const fecharModalBtn = document.getElementById('fecharModal');
const modalOverlay = document.getElementById('modalOverlay');


abrirModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('ativo');
});


fecharModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('ativo');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('ativo');
    }
});

