jQuery(window).load(function() {
    members = [

        {
            name: 'Ariana Pereira',
            email: 'ariana@ecompjr.com.br',
            github: 'https://github.com/arianjsp',
            job: 'Vice-Presidente',
            text: '"Você nunca vai chegar ao seu destino se você parar e atirar pedras em cada cão que late." - Winston Churchill',
            image: 'images/members/member-27.jpg'
        },

        {
            name: 'Emanuel Santana',
            email: 'emanuel@ecompjr.com.br',
            github: 'https://github.com/ecomp1997',
            job: 'Diretor de Marketing',
            text: '" O futuro vai mostrar os resultados e julgar cada um segundo suas realizações.',
            image: 'images/members/member-28.jpg'
        },

        {
            name: 'Emille Sampaio',
            email: 'emille@ecompjr.com.br',
            github: 'https://github.com/emillevic',
            job: 'Presidente',
            text: '"Você pode ficar desapontado se falhar, mas você está condenado se não tentar." - Beverly Sills',
            image: 'images/members/member-20.jpg'
        },

        {
            name: 'Gabriel Azevedo',
            email: 'gabriel@ecompjr.com.br',
            github: 'https://github.com/Matoro17',
            job: 'Diretor de Projetos',
            text: 'Ha sempre algo maior na próxima porta',
            image: 'images/members/member-29.jpg'
        },

        {
            name: 'Khaick Brito',
            email: 'khaick@ecompjr.com.br',
            github: 'https://github.com/khaickbrito',
            job: 'Diretor Comercial',
            text: '"A vida é como a música, os altos e baixos se completam fazendo a melhor das melodias"',
            image: 'images/members/member-31.jpg'
        },

        {
            name: 'Lucas Cardoso',
            email: 'lucascardoso@ecompjr.com.br',
            github: 'https://github.com/skillinhow',
            job: 'Diretor Administrativo Financeiro',
            text: 'Tudo é como um cubo mágico, aparentemente impossível, mas tudo é questão de perspectiva.',
            image: 'images/members/member-10.jpg'
        },

        {
            name: 'Marcos Antonio',
            email: 'antonio@ecompjr.com.br',
            github: '',
            job: 'Diretor de Recursos Humanos',
            text: 'O único lugar onde o sucesso vem antes do trabalho é no dicionário - Einstein.',
            image: 'images/members/member-39.jpg'
        },
        {
            name: 'Adriel Brito',
            email: 'adrielbrito@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '',
            image: 'images/members/member-42.jpg'
        },

        {
            name: 'Carlos Tinin',
            email: 'carlos@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '',
            image: 'images/members/member-40.jpg'
        },

        {
            name: 'Cássio Santos',
            email: 'cassio@ecompjr.com.br',
            github: 'https://github.com/ssscassio',
            job: 'Membro Consultor',
            text: 'Não procure culpados, procure soluções.',
            image: 'images/members/member-4.jpg'
        },

        {
            name: 'Elvis Huges',
            email: 'elvis@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '',
            image: 'images/members/member-38.jpg'
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
            name: 'João Pedro Costa',
            email: 'pedrocosta@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '',
            image: 'images/members/member-43.jpg'
        },
        {
            name: 'Marco Antônio Rios',
            email: 'marcorios@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '',
            image: 'images/members/member-44.jpg'
        },

        {
            name: 'Rafael Brito',
            email: 'rafael@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-37.jpg'
        },


        {
            name: 'Vanessa Oliveira',
            email: 'vanessa@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-45.jpg'
        },


        {
            name: 'Victor Souza',
            email: 'victor@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-41.jpg'
        },

    ]

    members = shuffle(members);

    $('#member-0').html('<div class="inner-container"><img src="' + members[0].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[0].name + '</h4><p class="designation">' + members[0].job + '</p><p>' + members[0].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[0].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[0]) + '<a href="mailto:' + members[0].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#member-1').html('<div class="inner-container"><img src="' + members[1].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[1].name + '</h4><p class="designation">' + members[1].job + '</p><p>' + members[1].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[1].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[1]) + '<a href="mailto:' + members[1].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#member-2').html('<div class="inner-container"><img src="' + members[2].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[2].name + '</h4><p class="designation">' + members[2].job + '</p><p>' + members[2].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[2].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[2]) + '<a href="mailto:' + members[2].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
    $('#member-3').html('<div class="inner-container"><img src="' + members[3].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[3].name + '</h4><p class="designation">' + members[3].job + '</p><p>' + members[3].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[3].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[3]) + '<a href="mailto:' + members[3].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')

});


function getMemberFacebook(member) {
    if (member.facebook) {
        return '<a target="_blank" href="' + member.facebook + '" class="facebook-btn"><i class="fa fa-facebook"></i></a>';
    } else {
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