  jQuery(window).load(function(){
    members = [
        {
            name: 'Alisson Vilas',
            email: 'alisson@ecompjr.com.br',
            github: 'https://github.com/AlissonSVV',
            job: 'Diretor de Marketing',
            text: 'Saberá subir na vida aquele que tem a humildade de descer quantas vezes precisar.',
            image: 'images/members/member-1.jpg'
        },
        {
            name: 'Aloísio Junior',
            email: 'aloisio@ecompjr.com.br',
            github: 'https://github.com/aloisiokjr',
            job: 'Membro Consultor',
            text:'"Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele." – David Brinkley',
            image: 'images/members/member-18.jpg'
        },
        {
            name: 'Bernardo Rosa',
            email: 'bernardo@ecompjr.com.br',
            github: 'https://github.com/brnrdrosa',
            job: 'Diretor Financeiro',
            text: 'Quem se define se limita.',
            image: 'images/members/member-2.jpg'
        },
        {
            name: 'Bruno Vogel',
            email: 'bruno@ecompjr.com.br',
            github: 'https://github.com/BugVogel',
            job: 'Membro Consultor',
            text: 'Você já reparou com quem os acidentes acontecem? O acaso só beneficia as mentes preparadas.',
            image: 'images/members/member-3.jpg'
       },
        {
            name: 'Cássio Santos',
            email: 'cassio@ecompjr.com.br',
            github: 'https://github.com/ssscassio',
            job: 'Vice-Presidente',
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
            name: 'Emille',
            email: 'emille@ecompjr.com.br',
            github: 'https://github.com/emillevic',
            job: 'Assessora de Admissão e Treinamento',
            text: '"Você pode ficar desapontado se falhar, mas você está condenado se não tentar." - Beverly Sills',
            image: 'images/members/member-20.jpg'
        },
        {
            name: 'Fábio Barros',
            email: 'fabio@ecompjr.com.br',
            github: 'https://github.com/fabugo',
            job: 'Conselheiro',
            text: 'Nunca preparado mas sempre pronto para agir.',
            image: 'images/members/member-5.jpg'
        },
        {
            name: 'Gledson de Oliveira',
            email: 'gledson@ecompjr.com.br',
            github: 'https://github.com/Gleddson',
            job: 'Conselheiro',
            text: 'Isso também passa.',
            image: 'images/members/member-6.jpg'
        },
        {
            name: 'Gustavo Boanerges',
            email: 'gustavo@ecompjr.com.br',
            github: 'https://github.com/gboanerges',
            job: 'Assessor de administração',
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
            name: 'Kayo Costa',
            email: 'kayo@ecompjr.com.br',
            github: 'https://github.com/kayo220',
            job: 'Diretor de Recursos Humanos',
            text: 'Pessoas > Máquinas',
            image: 'images/members/member-7.jpg'
        },  
        {
            name: 'Luan Victor',
            email: 'luan@ecompjr.com.br',
            github: 'https://github.com/luanvicttor',
            job: 'Membro Consultor',
            text: 'O segredo do sucesso é a constância de propósito.',
            image: 'images/members/member-8.jpg'
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
            name: 'Nilson Augusto',
            email: 'nilson@ecompjr.com.br',
            github: 'https://github.com/sinhoshow',
            job: 'Membro Consultor',
            text: 'Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.',
            image: 'images/members/member-12.jpg'
        },  
        {
            name: 'Odivio Caio',
            email: 'odivio@ecompjr.com.br',
            github: 'https://github.com/bezourokq',
            job: 'Membro Consultor',
            text: 'Eu não gosto da ecompJR, mas estou aqui para gostar!',
            image: 'images/members/member-13.jpg'
        },  
        {
            name: 'Pedro Brandão',
            email: 'pedro@ecompjr.com.br',
            github: 'https://github.com/pedrohenriquebrandao',
            job: 'Assessor de Marketing',
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
            job: 'Presidente',
            text: 'Falar é fácil, me mostre o código.',
            image: 'images/members/member-15.jpg'
        },  
        {
            name: 'Saulo de Tarso',
            email: 'saulo@ecompjr.com.br',
            github: 'https://github.com/SkdTarso',
            job: 'Diretor de Projetos',
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
            job: 'Assessor de Conteúdo Digital',
            text: 'Nós só podemos ver um pouco do futuro, mas o suficiente para perceber que há muito a fazer.',
            image: 'images/members/member-24.jpg'
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
