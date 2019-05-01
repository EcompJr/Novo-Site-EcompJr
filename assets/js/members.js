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

    members = shuffle(members);

    members.forEach((member, index) => {
        $(`#member-${index}`).html(
            '<div class="inner-container"><img src="' +
                member.image +
                '" alt="Team Member"><div class="member-details"><h4 class="name">' +
                member.name +
                '</h4><p class="designation">' +
                member.job +
                '</p><p>' +
                member.text +
                '</p><div class="member-social-link"><a target="_blank" href="' +
                member.github +
                '" class="twitter-btn"><i class="fa fa-github"></i></a>' +
                getMemberFacebook(member) +
                '<a href="mailto:' +
                member.email +
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
