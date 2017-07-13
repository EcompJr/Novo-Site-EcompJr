  jQuery(window).load(function(){
    members = [
        {
            name: 'Alisson Vilas',
            email: 'alisson@ecompjr.com.br',
            github: 'https://github.com/AlissonSVV',
            facebook: 'https://www.facebook.com/alisson.vilasverde',
            job: 'Diretor de Marketing',
            text: 'Saberá subir na vida aquele que tem a humildade de descer quantas vezes precisar.',
            image: 'images/members/member-1.jpg'
        },
        {
            name: 'Bernardo Rosa',
            email: 'bernardo@ecompjr.com.br',
            github: 'https://github.com/brnrdrosa',
            facebook: 'https://www.facebook.com/brnrdrosa',
            job: 'Diretor Financeiro',
            text: 'Quem se define se limita.',
            image: 'images/members/member-2.jpg'
        },
        {
            name: 'Bruno Vogel',
            email: 'bruno@ecompjr.com.br',
            github: 'https://github.com/BugVogel',
            facebook: 'https://www.facebook.com/bruno.vogel.33',
            job: 'Assessor de Projetos',
            text: 'Você já reparou com quem os acidentes acontecem? O acaso só beneficia as mentes preparadas.',
            image: 'images/members/member-3.jpg'
       },
        {
            name: 'Cássio Santos',
            email: 'cassio@ecompjr.com.br',
            github: 'https://github.com/ssscassio',
            facebook: 'https://www.facebook.com/ssscassio',
            job: 'Vice-Presidente',
            text: 'Não procure culpados, procure soluções.',
            image: 'images/members/member-4.jpg'
        },
        {
            name: 'Fábio Barros',
            email: 'fabio@ecompjr.com.br',
            github: 'https://github.com/fabugo',
            facebook: 'https://www.facebook.com/MrFabugo',
            job: 'Conselheiro',
            text: 'Nunca preparado mas sempre pronto para agir.',
            image: 'images/members/member-5.jpg'
        },
        {
            name: 'Gledson de Oliveira',
            email: 'gledson@ecompjr.com.br',
            github: 'https://github.com/Gleddson',
            facebook: 'https://www.facebook.com/gleddson.oliveira.1',
            job: 'Conselheiro',
            text: 'Isso também passa.',
            image: 'images/members/member-6.jpg'
        }, 
        {
            name: 'Kayo Costa',
            email: 'kayo@ecompjr.com.br',
            github: 'https://github.com/kayo220',
            facebook: 'https://www.facebook.com/kayocosta',
            job: 'Diretor de Recursos Humanos',
            text: 'Pessoas > Máquinas',
            image: 'images/members/member-7.jpg'
        },  
        {
            name: 'Luan Victor',
            email: 'luan@ecompjr.com.br',
            github: 'https://github.com/luanvicttor',
            facebook: 'https://www.facebook.com/luanvictor1996',
            job: 'Assessor de Recursos Humanos',
            text: 'O segredo do sucesso é a constância de propósito.',
            image: 'images/members/member-8.jpg'
        },  
        {
            name: 'Lucas Alves',
            email: 'lucas@ecompjr.com.br',
            github: 'https://github.com/lucas2213690',
            facebook: 'https://www.facebook.com/lucasalves.oliveira.94',
            job: 'Assessor de Vice-Presidência',
            text: 'Si vis pacem, para bellum',
            image: 'images/members/member-9.jpg'
        },  
        {
            name: 'Lucas Cardoso',
            email: 'lucascardoso@ecompjr.com.br',
            github: 'https://github.com/skillinhow',
            facebook: 'https://www.facebook.com/thelucascardoso',
            job: 'Membro',
            text: 'Tudo é como um cubo mágico, aparentemente impossível, mas tudo é questão de perspectiva.',
            image: 'images/members/member-10.jpg'
        },  
        {
            name: 'Maria Luísa',
            email: 'lucas@ecompjr.com.br',
            github: 'https://github.com/LuisaSales',
            facebook: '',
            job: 'Membro',
            text: 'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
            image: 'images/members/member-11.jpg'
        },  
        {
            name: 'Nilson Augusto',
            email: 'nilson@ecompjr.com.br',
            github: 'https://github.com/sinhoshow',
            facebook: 'https://www.facebook.com/nilsonaugusto',
            job: 'Assessor de Vendas',
            text: 'Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.',
            image: 'images/members/member-12.jpg'
        },  
        {
            name: 'Odivio Caio',
            email: 'odivio@ecompjr.com.br',
            github: 'https://github.com/bezourokq',
            facebook: 'https://www.facebook.com/bezourokq.odiviocaio',
            job: 'Membro',
            text: 'Eu não gosto da ecompJR, mas estou aqui para gostar!',
            image: 'images/members/member-13.jpg'
        },  
        {
            name: 'Pedro Brandão',
            email: 'pedro@ecompjr.com.br',
            github: 'https://github.com/pedrohenriquebrandao',
            facebook: 'https://www.facebook.com/peubrandao',
            job: 'Assessor de Marketing',
            text: 'Seja a mudança que quer ver no mundo.',
            image: 'images/members/member-14.jpg'
        },  
        {
            name: 'Pedro Neri',
            email: 'pedroneri@ecompjr.com.br',
            github: 'https://github.com/Pedneri1',
            facebook: 'https://www.facebook.com/pedneri1',
            job: 'Presidente',
            text: 'Falar é fácil, me mostre o código.',
            image: 'images/members/member-15.jpg'
        },  
        {
            name: 'Saulo de Tarso',
            email: 'saulo@ecompjr.com.br',
            github: 'https://github.com/SkdTarso',
            facebook: 'https://www.facebook.com/sdtarso',
            job: 'Diretor de Projetos',
            text: 'Aprenda a ter disciplina, pois nem sempre haverá motivação.',
            image: 'images/members/member-16.jpg'
        },  
        {
            name: 'Thatianne Cristina',
            email: 'thatianne@ecompjr.com.br',
            github: 'https://github.com/Thatianne',
            facebook: 'https://www.facebook.com/thati.cristina.18',
            job: 'Assessor Financeiro',
            text: 'Ninguém comete erro maior do que não fazer nada porque só pode fazer um pouco.',
            image: 'images/members/member-17.jpg'
        },            
    ]

    orientador = [{
        name: "Thiago de Lima Mariano",
        text: "Email: mariano.tihago@gmail.com",
        image: "images/members/orientador-0.jpg",
        job: 'Orientador',
        lattes: 'http://lattes.cnpq.br/5083837918787802'
    }]
    diretores = [members[15],members[14], members[6], members[3], members[0], members[1]];
    diretores = shuffle(diretores);
    
    conselheiros = [members[4], members[5]];
    conselheiros = shuffle(conselheiros);
    
    members = [members[2],members[7],members[8],members[9],members[10],members[11],members[12],members[13],members[16]];
    members = shuffle(members);

    $('#orientador-0').html('<div class="inner-container"><img src="'+orientador[0].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+orientador[0].name+'</h4><p class="designation">'+orientador[0].job+'</p><p>'+orientador[0].text+'</p><div class="member-social-link"><a target="_blank" href="'+orientador[0].lattes+'" class="twitter-btn"><i class="fa fa-link"></i></a></div></div></div>')

    $('#diretor-0').html('<div class="inner-container"><img src="'+diretores[0].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+diretores[0].name+'</h4><p class="designation">'+diretores[0].job+'</p><p>'+diretores[0].text+'</p><div class="member-social-link"><a target="_blank" href="'+diretores[0].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+diretores[0].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+diretores[0].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#diretor-1').html('<div class="inner-container"><img src="'+diretores[1].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+diretores[1].name+'</h4><p class="designation">'+diretores[1].job+'</p><p>'+diretores[1].text+'</p><div class="member-social-link"><a target="_blank" href="'+diretores[1].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+diretores[1].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+diretores[1].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#diretor-2').html('<div class="inner-container"><img src="'+diretores[2].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+diretores[2].name+'</h4><p class="designation">'+diretores[2].job+'</p><p>'+diretores[2].text+'</p><div class="member-social-link"><a target="_blank" href="'+diretores[2].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+diretores[2].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+diretores[2].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#diretor-3').html('<div class="inner-container"><img src="'+diretores[3].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+diretores[3].name+'</h4><p class="designation">'+diretores[3].job+'</p><p>'+diretores[3].text+'</p><div class="member-social-link"><a target="_blank" href="'+diretores[3].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+diretores[3].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+diretores[3].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#diretor-4').html('<div class="inner-container"><img src="'+diretores[4].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+diretores[4].name+'</h4><p class="designation">'+diretores[4].job+'</p><p>'+diretores[4].text+'</p><div class="member-social-link"><a target="_blank" href="'+diretores[4].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+diretores[4].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+diretores[4].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#diretor-5').html('<div class="inner-container"><img src="'+diretores[5].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+diretores[5].name+'</h4><p class="designation">'+diretores[5].job+'</p><p>'+diretores[5].text+'</p><div class="member-social-link"><a target="_blank" href="'+diretores[5].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+diretores[5].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+diretores[5].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    

    $('#conselheiro-0').html('<div class="inner-container"><img src="'+conselheiros[0].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+conselheiros[0].name+'</h4><p class="designation">'+conselheiros[0].job+'</p><p>'+conselheiros[0].text+'</p><div class="member-social-link"><a target="_blank" href="'+conselheiros[0].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+conselheiros[0].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+conselheiros[0].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#conselheiro-1').html('<div class="inner-container"><img src="'+conselheiros[1].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+conselheiros[1].name+'</h4><p class="designation">'+conselheiros[1].job+'</p><p>'+conselheiros[1].text+'</p><div class="member-social-link"><a target="_blank" href="'+conselheiros[1].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+conselheiros[1].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a><a href="mailto:'+conselheiros[1].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    
    $('#membro-0').html('<div class="inner-container"><img src="'+members[0].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[0].name+'</h4><p class="designation">'+members[0].job+'</p><p>'+members[0].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[0].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[0])+'<a href="mailto:'+members[0].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-1').html('<div class="inner-container"><img src="'+members[1].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[1].name+'</h4><p class="designation">'+members[1].job+'</p><p>'+members[1].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[1].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[1])+'<a href="mailto:'+members[1].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-2').html('<div class="inner-container"><img src="'+members[2].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[2].name+'</h4><p class="designation">'+members[2].job+'</p><p>'+members[2].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[2].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[2])+'<a href="mailto:'+members[2].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-3').html('<div class="inner-container"><img src="'+members[3].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[3].name+'</h4><p class="designation">'+members[3].job+'</p><p>'+members[3].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[3].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[3])+'<a href="mailto:'+members[3].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-4').html('<div class="inner-container"><img src="'+members[4].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[4].name+'</h4><p class="designation">'+members[4].job+'</p><p>'+members[4].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[4].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[4])+'<a href="mailto:'+members[4].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-5').html('<div class="inner-container"><img src="'+members[5].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[5].name+'</h4><p class="designation">'+members[5].job+'</p><p>'+members[5].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[5].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[5])+'<a href="mailto:'+members[5].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-6').html('<div class="inner-container"><img src="'+members[6].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[6].name+'</h4><p class="designation">'+members[6].job+'</p><p>'+members[6].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[6].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[6])+'<a href="mailto:'+members[6].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-7').html('<div class="inner-container"><img src="'+members[7].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[7].name+'</h4><p class="designation">'+members[7].job+'</p><p>'+members[7].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[7].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[7])+'<a href="mailto:'+members[7].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#membro-8').html('<div class="inner-container"><img src="'+members[8].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[8].name+'</h4><p class="designation">'+members[8].job+'</p><p>'+members[8].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[8].github+'" class="twitter-btn"><i class="fa fa-github"></i></a>'+getMemberFacebook(members[8])+'<a href="mailto:'+members[8].email+'" ><i class="fa fa-envelope"></i></a></div></div></div>')
        
  });

  function getMemberFacebook(member){
      if(member.facebook != ''){
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
