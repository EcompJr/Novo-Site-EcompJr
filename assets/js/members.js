  jQuery(window).load(function(){
    members = [
       
        {
            name: 'Aloísio Junior',
            email: 'aloisio@ecompjr.com.br',
            github: 'https://github.com/aloisiokjr',
            job: 'Diretor Administrativo Financeiro',
            text:'"Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele." – David Brinkley',
            image: 'images/members/member-18.jpg'
        },        
        {
            name: 'Bruno Vogel',
            email: 'bruno@ecompjr.com.br',
            github: 'https://github.com/BugVogel',
            job: 'Vice-Presidente',
            text: 'Você já reparou com quem os acidentes acontecem? O acaso só beneficia as mentes preparadas.',
            image: 'images/members/member-3.jpg'
       },
        {
            name: 'Cássio Santos',
            email: 'cassio@ecompjr.com.br',
            github: 'https://github.com/ssscassio',
            job: 'Conselheiro',
            text: 'Não procure culpados, procure soluções.',
            image: 'images/members/member-4.jpg'
        },
        {
            name: 'Douglas Almeida',
            email: 'douglas@ecompjr.com.br',
            github: 'https://github.com/doug-ecomp',
            job: 'Membro Consultor',
            text: 'Creia em si, mas não duvide sempre dos outros.',
            image: 'images/members/member-19.jpg'
        },
        {
            name: 'Emille Sampaio',
            email: 'emille@ecompjr.com.br',
            github: 'https://github.com/emillevic',
            job: 'Diretora de Recursos Humanos',
            text: '"Você pode ficar desapontado se falhar, mas você está condenado se não tentar." - Beverly Sills',
            image: 'images/members/member-20.jpg'
        },
        {
            name: 'Gustavo Boanerges',
            email: 'gustavo@ecompjr.com.br',
            github: 'https://github.com/gboanerges',
            job: 'Membro Consultor',
            text: 'Você pode encontrar as coisas que perdeu, mas nunca as que abandonou.',
            image: 'images/members/member-21.jpg'
        }, 
        {
            name: 'Karolyne Lima',
            email: 'karolyne@ecompjr.com.br',
            github: 'https://github.com/karolynelima',
            job: 'Membro Consultor',
            text: 'Não há pacto entre leões e homens.',
            image: 'images/members/member-22.jpg'
        }, 
       
        {
            name: 'Lucas Cardoso',
            email: 'lucascardoso@ecompjr.com.br',
            github: 'https://github.com/skillinhow',
            job: 'Membro Consultor',
            text: 'Tudo é como um cubo mágico, aparentemente impossível, mas tudo é questão de perspectiva.',
            image: 'images/members/member-10.jpg'
        },    
        {
            name: 'Pedro Brandão',
            email: 'pedro@ecompjr.com.br',
            github: 'https://github.com/pedrohenriquebrandao',
            job: 'Gerente de Pós Venda e Feedback',
            text: 'Seja a mudança que quer ver no mundo.',
            image: 'images/members/member-14.jpg'
        },
        {
            name: 'Pedro Gomes',
            email: 'pedrogomes@ecompjr.com.br',
            github: 'https://github.com/PHGSantos',
            job: 'Membro Consultor',
            text: 'Tente mover o mundo - o primeiro passo será mover a si mesmo.',
            image: 'images/members/member-23.jpg'
        }, 
        {
            name: 'Pedro Neri',
            email: 'pedroneri@ecompjr.com.br',
            github: 'https://github.com/Pedneri1',
            job: 'Conselheiro',
            text: 'Falar é fácil, me mostre o código.',
            image: 'images/members/member-15.jpg'
        },  
        {
            name: 'Saulo de Tarso',
            email: 'saulo@ecompjr.com.br',
            github: 'https://github.com/SkdTarso',
            job: 'Presidente',
            text: 'Aprenda a ter disciplina, pois nem sempre haverá motivação.',
            image: 'images/members/member-16.jpg'
        },  
        {
            name: 'Thatianne Cristina',
            email: 'thatianne@ecompjr.com.br',
            github: 'https://github.com/Thatianne',
            job: 'Membro Consultor',
            text: 'Ninguém comete erro maior do que não fazer nada porque só pode fazer um pouco.',
            image: 'images/members/member-17.jpg'
        },
        {
            name: 'Valmir Almeida',
            email: 'valmir@ecompjr.com.br',
            github: 'https://github.com/ValmirAlmeida',
            job: 'Diretor de Projetos',
            text: 'Nós só podemos ver um pouco do futuro, mas o suficiente para perceber que há muito a fazer.',
            image: 'images/members/member-24.jpg'
        },
        {
            name: 'Eduardo Marques',
            email: 'eduardo@ecompjr.com.br',
            github: 'https://github.com/dukmarques',
            job: 'Membro Consultor',
            text: '. no mundo tereis aflições, mas tende bom ânimo; eu venci o mundo. João 16:33',
            image: 'images/members/member-25.jpg'
        },
        {
            name: 'Émylle Andressa ',
            email: 'andressa@ecompjr.com.br',
            github: 'https://github.com/eaborges',
            job: 'Membro Consultor',
            text: 'Seja você a mudança que deseja ver.',
            image: 'images/members/member-26.jpg'
        },
        {
            name: 'Ariana Pereira',
            email: 'ariana@ecompjr.com.br',
            github: 'https://github.com/arianjsp',
            job: 'Gerente das Redes Sociais',
            text: '"Você nunca vai chegar ao seu destino se você parar e atirar pedras em cada cão que late." - Winston Churchill',
            image: 'images/members/member-27.jpg'
        },              
        {
            name: 'Emanuel Santana',
            email: 'emanuel@ecompjr.com.br',
            github: 'https://github.com/ecomp1997',
            job: 'Membro Consultor',
            text: '" O futuro vai mostrar os resultados e julgar cada um segundo como suas realizações.',
            image: 'images/members/member-28.jpg'
        },              
        {
            name: 'Gabriel Azevedo',
            email: 'gabriel@ecompjr.com.br',
            github: 'https://github.com/Matoro17',
            job: 'Gerente de Comunicação Interna',
            text: 'Ha sempre algo maior na próxima porta',
            image: 'images/members/member-29.jpg'
        },
        {
            name: 'Johnny Santtana',
            email: 'johnny@ecompjr.com.br',
            github: 'https://github.com/JohnnySanttana72',
            job: 'Membro Consultor',
            text: 'O espirito de luta,fortalece a união',
            image: 'images/members/member-30.jpg'
        },                         
        {
            name: 'Khaick Brito',
            email: 'khaick@ecompjr.com.br',
            github: 'https://github.com/khaickbrito',
            job: 'Gerente de Vendas e Prospecção Ativa',
            text: '"A vida é como a música, os altos e baixos se completam fazendo a melhor das melodias"',
            image: 'images/members/member-31.jpg'
        },                                   
    ]

    members = shuffle(members);

    $('#member-0').html('<div class="inner-container"><img src="'+members[0].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[0].name+'</h4><p class="designation">'+members[0].job+'</p><p>'+members[0].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[0].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[0])+'<a href="mailto:'+members[0].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#member-1').html('<div class="inner-container"><img src="'+members[1].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[1].name+'</h4><p class="designation">'+members[1].job+'</p><p>'+members[1].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[1].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[1])+'<a href="mailto:'+members[1].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#member-2').html('<div class="inner-container"><img src="'+members[2].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[2].name+'</h4><p class="designation">'+members[2].job+'</p><p>'+members[2].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[2].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[2])+'<a href="mailto:'+members[2].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#member-3').html('<div class="inner-container"><img src="'+members[3].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[3].name+'</h4><p class="designation">'+members[3].job+'</p><p>'+members[3].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[3].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[3])+'<a href="mailto:'+members[3].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')

  });


    function getMemberFacebook(member){
        if(member.facebook){
            return '<a target="_blank" href="'+member.facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a>';
        }else {
            return ''
        }
    }
  function shuffle(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
