  jQuery(window).load(function(){
    members = [
        {
            name: 'Alisson Vilas',
            email: 'alisson@ecompjr.com.br',
            github: 'https://github.com/AlissonSVV',
            facebook: 'https://www.facebook.com/alisson.vilasverde',
            job: 'Diretor de Marketing',
            text: 'Saberá subir na vida aquele que tem a humildade de descer quantas vezes precisar.',
            image: 'images/members/member-1.png'
        },
        {
            name: 'Bernardo Rosa',
            email: 'bernardo@ecompjr.com.br',
            github: 'https://github.com/brnrdrosa',
            facebook: 'https://www.facebook.com/brnrdrosa',
            job: 'Diretor Financeiro',
            text: 'Quem se define se limita.',
            image: 'images/members/member-1.png'
        },
        {
            name: 'Bruno Vogel',
            email: 'bruno@ecompjr.com.br',
            github: 'https://github.com/BugVogel',
            facebook: 'https://www.facebook.com/bruno.vogel.33',
            job: 'Assessor de Projetos',
            text: 'Você já reparou com quem os acidentes acontecem? O acaso só beneficia as mentes preparadas.',
            image: 'images/members/member-1.png'
       },
        {
            name: 'Cássio Santos',
            email: 'cassio@ecompjr.com.br',
            github: 'https://github.com/ssscassio',
            facebook: 'https://www.facebook.com/ssscassio',
            job: 'Vice-Presidente',
            text: 'Não procure culpados, procure soluções.',
            image: 'images/members/member-1.png'
        },
        {
            name: 'Fábio Barros',
            email: 'fabio@ecompjr.com.br',
            github: 'https://github.com/fabugo',
            facebook: 'https://www.facebook.com/MrFabugo',
            job: 'Conselheiro',
            text: 'Nunca preparado mas sempre pronto para agir.',
            image: 'images/members/member-1.png'
        },
        {
            name: 'Gledson de Oliveira',
            email: 'gledson@ecompjr.com.br',
            github: 'https://github.com/Gleddson',
            facebook: 'https://www.facebook.com/gleddson.oliveira.1',
            job: 'Conselheiro',
            text: 'Isso também passa.',
            image: 'images/members/member-1.png'
        }, 
        {
            name: 'Kayo Costa',
            email: 'kayo@ecompjr.com.br',
            github: 'https://github.com/kayo220',
            facebook: 'https://www.facebook.com/kayocosta',
            job: 'Diretor de Recursos Humanos',
            text: 'Pessoas > Máquinas',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Luan Victor',
            email: 'luan@ecompjr.com.br',
            github: 'https://github.com/luanvicttor',
            facebook: 'https://www.facebook.com/luanvictor1996',
            job: 'Assessor de Recursos Humanos',
            text: '',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Lucas Alves',
            email: 'lucas@ecompjr.com.br',
            github: 'https://github.com/lucas2213690',
            facebook: 'https://www.facebook.com/lucasalves.oliveira.94',
            job: 'Assessor de Vice-Presidência',
            text: 'Si vis pacem, para bellum',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Lucas Cardoso',
            email: 'lucascardoso@ecompjr.com.br',
            github: 'https://github.com/skillinhow',
            facebook: 'https://www.facebook.com/thelucascardoso',
            job: 'Membro',
            text: 'Tudo é como um cubo mágico, aparentemente impossível, nas tudo é questão de perspectiva.',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Maria Luísa',
            email: 'lucas@ecompjr.com.br',
            github: 'https://github.com/LuisaSales',
            facebook: '#',
            job: 'Membro',
            text: 'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Nilson Augusto',
            email: 'nilson@ecompjr.com.br',
            github: 'https://github.com/sinhoshow',
            facebook: 'https://www.facebook.com/nilsonaugusto',
            job: 'Assessor de Vendas',
            text: 'Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Odivio Caio',
            email: 'odivio@ecompjr.com.br',
            github: 'https://github.com/bezourokq',
            facebook: 'https://www.facebook.com/bezourokq.odiviocaio',
            job: 'Membro',
            text: 'Eu não gosto da ecompJR, mas estou aqui para gostar!',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Pedro Brandão',
            email: 'pedro@ecompjr.com.br',
            github: 'https://github.com/pedrohenriquebrandao',
            facebook: 'https://www.facebook.com/peubrandao',
            job: 'Assessor de Marketing',
            text: 'Seja a mudança que quer ver no mundo.',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Pedro Neri',
            email: 'pedroneri@ecompjr.com.br',
            github: 'https://github.com/Pedneri1',
            facebook: 'https://www.facebook.com/pedneri1',
            job: 'Presidente',
            text: 'Falar é fácil, me mostre o código.',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Saulo de Tarso',
            email: 'saulo@ecompjr.com.br',
            github: 'https://github.com/SkdTarso',
            facebook: 'https://www.facebook.com/sdtarso',
            job: 'Diretor de Projetos',
            text: 'Aprenda a ter disciplina, pois nem sempre haverá motivação.',
            image: 'images/members/member-1.png'
        },  
        {
            name: 'Thatianne Cristina',
            email: 'thatianne@ecompjr.com.br',
            github: 'https://github.com/Thatianne',
            facebook: 'https://www.facebook.com/thati.cristina.18',
            job: 'Assessor Financeiro',
            text: 'Ninguém comete erro maior do que não fazer nada porque só pode fazer um pouco.',
            image: 'images/members/member-1.png'
        },            
    ]

    members = shuffle(members);

    $('#member-0').html('<div class="inner-container"><img src="'+members[0].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[0].name+'</h4><p class="designation">'+members[0].job+'</p><p>'+members[0].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[0].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+members[0].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a></div></div></div>')
    $('#member-1').html('<div class="inner-container"><img src="'+members[1].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[1].name+'</h4><p class="designation">'+members[1].job+'</p><p>'+members[1].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[1].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+members[1].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a></div></div></div>')
    $('#member-2').html('<div class="inner-container"><img src="'+members[2].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[2].name+'</h4><p class="designation">'+members[2].job+'</p><p>'+members[2].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[2].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+members[2].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a></div></div></div>')
    $('#member-3').html('<div class="inner-container"><img src="'+members[3].image+'" alt="Team Member"><div class="member-details"><h4 class="name">'+members[3].name+'</h4><p class="designation">'+members[3].job+'</p><p>'+members[3].text+'</p><div class="member-social-link"><a target="_blank" href="'+members[3].github+'" class="twitter-btn"><i class="fa fa-github"></i></a><a target="_blank" href="'+members[3].facebook+'" class="facebook-btn"><i class="fa fa-facebook"></i></a></div></div></div>')

  });


  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
