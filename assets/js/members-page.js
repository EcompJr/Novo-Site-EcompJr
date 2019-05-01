jQuery(window).load(function() {
    members = [
        {
            name: 'Ariana Pereira',
            email: 'ariana@ecompjr.com.br',
            github: 'https://github.com/arianjsp',
            job: 'Vice-Presidente',
            text:
                '"Você nunca vai chegar ao seu destino se você parar e atirar pedras em cada cão que late." - Winston Churchill',
            image: 'images/members/member-27.jpg'
        },

        {
            name: 'Emanuel Santana',
            email: 'emanuel@ecompjr.com.br',
            github: 'https://github.com/ecomp1997',
            job: 'Diretor de Marketing',
            text:
                '" O futuro vai mostrar os resultados e julgar cada um segundo suas realizações.',
            image: 'images/members/member-28.jpg'
        },

        {
            name: 'Emille Sampaio',
            email: 'emille@ecompjr.com.br',
            github: 'https://github.com/emillevic',
            job: 'Presidente',
            text:
                '"Você pode ficar desapontado se falhar, mas você está condenado se não tentar." - Beverly Sills',
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
            text:
                '"A vida é como a música, os altos e baixos se completam fazendo a melhor das melodias"',
            image: 'images/members/member-31.jpg'
        },

        {
            name: 'Lucas Cardoso',
            email: 'lucascardoso@ecompjr.com.br',
            github: 'https://github.com/skillinhow',
            job: 'Diretor Administrativo Financeiro',
            text:
                'Tudo é como um cubo mágico, aparentemente impossível, mas tudo é questão de perspectiva.',
            image: 'images/members/member-10.jpg'
        },

        {
            name: 'Marcos Antonio',
            email: 'antonio@ecompjr.com.br',
            github: '',
            job: 'Diretor de Recursos Humanos',
            text: '',
            image: 'images/members/member-.jpg'
        },

        {
            name: 'Carlos Tinin',
            email: 'carlos@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '',
            image: 'images/members/member-.jpg'
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
            image: 'images/members/member-.jpg'
        },

        {
            name: 'Gustavo Boanerges',
            email: 'gustavo@ecompjr.com.br',
            github: 'https://github.com/gboanerges',
            job: 'Membro Consultor',
            text:
                'Você pode encontrar as coisas que perdeu, mas nunca as que abandonou.',
            image: 'images/members/member-21.jpg'
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
            name: 'Rafael Brito',
            email: 'rafael@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-.jpg'
        },

        {
            name: 'Taison Machado',
            email: 'taison@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-.jpg'
        },

        {
            name: 'Vanessa Oliveira',
            email: 'vanessa@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-.jpg'
        },

        {
            name: 'Victor Souza',
            email: 'victor@ecompjr.com.br',
            github: '',
            job: 'Membro Consultor',
            text: '.',
            image: 'images/members/member-.jpg'
        }
    ];

    orientador = [
        {
            name: 'Rodrigo Tripodi',
            image: 'images/members/orientador-1.jpg',
            job: 'Orientador',
            lattes: 'http://lattes.cnpq.br/3303713473565543'
        }
    ];
    diretores = [
        members[0],
        members[1],
        members[2],
        members[3],
        members[4],
        members[5],
        members[6]
    ];
    diretores = shuffle(diretores);

    //conselheiros = [members[0], members[9]];
    //conselheiros = shuffle(conselheiros);

    members = [
        members[7],
        members[8],
        members[9],
        members[10],
        members[11],
        members[12],
        members[13],
        members[14],
        members[15]
    ];
    members = shuffle(members);

    $('#orientador-0').html(
        '<div class="inner-container"><img src="' +
            orientador[0].image +
            '" alt="Team Member"><div class="member-details"><h4 class="name">' +
            orientador[0].name +
            '</h4><p class="designation">' +
            orientador[0].job +
            '</p><div class="member-social-link"><a target="_blank" href="' +
            orientador[0].lattes +
            '" class="twitter-btn"><i class="fa fa-link"></i></a></div></div></div>'
    );

    diretores.forEach((diretor, index) => {
        $(`#diretor-${index}`).html(
            '<div class="inner-container"><img src="' +
                diretor.image +
                '" alt="Team Member"><div class="member-details"><h4 class="name">' +
                diretor.name +
                '</h4><p class="designation">' +
                diretor.job +
                '</p><p>' +
                diretor.text +
                '</p><div class="member-social-link"><a target="_blank" href="' +
                diretor.github +
                '" class="twitter-btn"><i class="fa fa-github"></i></a>' +
                getMemberFacebook(diretores[0]) +
                '<a href="mailto:' +
                diretor.email +
                '" ><i class="fa fa-envelope"></i></a></div></div></div>'
        );
    });

    //$('#conselheiro-0').html('<div class="inner-container"><img src="' + conselheiros[0].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + conselheiros[0].name + '</h4><p class="designation">' + conselheiros[0].job + '</p><p>' + conselheiros[0].text + '</p><div class="member-social-link"><a target="_blank" href="' + conselheiros[0].github + '" class="twitter-btn"><i class="fa fa-github"></i></a><a href="mailto:' + conselheiros[0].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
    //$('#conselheiro-1').html('<div class="inner-container"><img src="' + conselheiros[1].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + conselheiros[1].name + '</h4><p class="designation">' + conselheiros[1].job + '</p><p>' + conselheiros[1].text + '</p><div class="member-social-link"><a target="_blank" href="' + conselheiros[1].github + '" class="twitter-btn"><i class="fa fa-github"></i></a><a href="mailto:' + conselheiros[1].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')

    members.forEach((membro, index) => {
        $(`#membro-${index}`).html(
            '<div class="inner-container"><img src="' +
                membro.image +
                '" alt="Team Member"><div class="member-details"><h4 class="name">' +
                membro.name +
                '</h4><p class="designation">' +
                membro.job +
                '</p><p>' +
                membro.text +
                '</p><div class="member-social-link"><a target="_blank" href="' +
                membro.github +
                '" class="twitter-btn"><i class="fa fa-github"></i></a>' +
                getMemberFacebook(membro) +
                '<a href="mailto:' +
                membro.email +
                '" ><i class="fa fa-envelope"></i></a></div></div></div>'
        );
    });
});

function getMemberFacebook(member) {
    if (member.facebook) {
        return (
            '<a target="_blank" href="' +
            member.facebook +
            '" class="facebook-btn"><i class="fa fa-facebook"></i></a>'
        );
    } else {
        return '';
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
