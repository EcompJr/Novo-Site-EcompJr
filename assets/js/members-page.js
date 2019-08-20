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
              name: 'João Pedro Costa',
              email: 'pedrocosta@ecompjr.com.br',
              github: '',
              job: 'Membro Consultor',
              text: '',
              image: 'images/members/member-43.jpg'
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


      ]

      orientador = [{
          name: "Rodrigo Tripodi",
          image: "images/members/orientador-1.jpg",
          job: 'Orientador',
          lattes: 'http://lattes.cnpq.br/3303713473565543'
      }]
      diretores = [members[0], members[1], members[2], members[3], members[4], members[5], members[6]];
      diretores = shuffle(diretores);

      //conselheiros = [members[0], members[9]];
      //conselheiros = shuffle(conselheiros);

      members = [members[7], members[8], members[9], members[10], members[11], members[12], members[13]];
      members = shuffle(members);

      $('#orientador-0').html('<div class="inner-container"><img src="' + orientador[0].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + orientador[0].name + '</h4><p class="designation">' + orientador[0].job + '</p><div class="member-social-link"><a target="_blank" href="' + orientador[0].lattes + '" class="twitter-btn"><i class="fa fa-link"></i></a></div></div></div>')

      $('#diretor-0').html('<div class="inner-container"><img src="' + diretores[0].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[0].name + '</h4><p class="designation">' + diretores[0].job + '</p><p>' + diretores[0].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[0].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[0]) + '<a href="mailto:' + diretores[0].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#diretor-1').html('<div class="inner-container"><img src="' + diretores[1].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[1].name + '</h4><p class="designation">' + diretores[1].job + '</p><p>' + diretores[1].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[1].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[1]) + '<a href="mailto:' + diretores[1].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#diretor-2').html('<div class="inner-container"><img src="' + diretores[2].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[2].name + '</h4><p class="designation">' + diretores[2].job + '</p><p>' + diretores[2].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[2].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[2]) + '<a href="mailto:' + diretores[2].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#diretor-3').html('<div class="inner-container"><img src="' + diretores[3].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[3].name + '</h4><p class="designation">' + diretores[3].job + '</p><p>' + diretores[3].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[3].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[3]) + '<a href="mailto:' + diretores[3].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#diretor-4').html('<div class="inner-container"><img src="' + diretores[4].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[4].name + '</h4><p class="designation">' + diretores[4].job + '</p><p>' + diretores[4].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[4].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[4]) + '<a href="mailto:' + diretores[4].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#diretor-5').html('<div class="inner-container"><img src="' + diretores[5].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[5].name + '</h4><p class="designation">' + diretores[5].job + '</p><p>' + diretores[5].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[5].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[5]) + '<a href="mailto:' + diretores[5].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#diretor-6').html('<div class="inner-container"><img src="' + diretores[6].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + diretores[6].name + '</h4><p class="designation">' + diretores[6].job + '</p><p>' + diretores[6].text + '</p><div class="member-social-link"><a target="_blank" href="' + diretores[6].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(diretores[6]) + '<a href="mailto:' + diretores[6].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')

      //$('#conselheiro-0').html('<div class="inner-container"><img src="' + conselheiros[0].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + conselheiros[0].name + '</h4><p class="designation">' + conselheiros[0].job + '</p><p>' + conselheiros[0].text + '</p><div class="member-social-link"><a target="_blank" href="' + conselheiros[0].github + '" class="twitter-btn"><i class="fa fa-github"></i></a><a href="mailto:' + conselheiros[0].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      //$('#conselheiro-1').html('<div class="inner-container"><img src="' + conselheiros[1].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + conselheiros[1].name + '</h4><p class="designation">' + conselheiros[1].job + '</p><p>' + conselheiros[1].text + '</p><div class="member-social-link"><a target="_blank" href="' + conselheiros[1].github + '" class="twitter-btn"><i class="fa fa-github"></i></a><a href="mailto:' + conselheiros[1].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')


      $('#membro-0').html('<div class="inner-container"><img src="' + members[0].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[0].name + '</h4><p class="designation">' + members[0].job + '</p><p>' + members[0].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[0].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[0]) + '<a href="mailto:' + members[0].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#membro-1').html('<div class="inner-container"><img src="' + members[1].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[1].name + '</h4><p class="designation">' + members[1].job + '</p><p>' + members[1].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[1].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[1]) + '<a href="mailto:' + members[1].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#membro-2').html('<div class="inner-container"><img src="' + members[2].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[2].name + '</h4><p class="designation">' + members[2].job + '</p><p>' + members[2].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[2].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[2]) + '<a href="mailto:' + members[2].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#membro-3').html('<div class="inner-container"><img src="' + members[3].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[3].name + '</h4><p class="designation">' + members[3].job + '</p><p>' + members[3].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[3].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[3]) + '<a href="mailto:' + members[3].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#membro-4').html('<div class="inner-container"><img src="' + members[4].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[4].name + '</h4><p class="designation">' + members[4].job + '</p><p>' + members[4].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[4].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[4]) + '<a href="mailto:' + members[4].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#membro-5').html('<div class="inner-container"><img src="' + members[5].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[5].name + '</h4><p class="designation">' + members[5].job + '</p><p>' + members[5].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[5].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[5]) + '<a href="mailto:' + members[5].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
      $('#membro-6').html('<div class="inner-container"><img src="' + members[6].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[6].name + '</h4><p class="designation">' + members[6].job + '</p><p>' + members[6].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[6].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[6]) + '<a href="mailto:' + members[6].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
          // $('#membro-7').html('<div class="inner-container"><img src="' + members[7].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[7].name + '</h4><p class="designation">' + members[7].job + '</p><p>' + members[7].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[7].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[7]) + '<a href="mailto:' + members[7].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
          //$('#membro-8').html('<div class="inner-container"><img src="' + members[8].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[8].name + '</h4><p class="designation">' + members[8].job + '</p><p>' + members[8].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[8].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[8]) + '<a href="mailto:' + members[8].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')
          // $('#membro-9').html('<div class="inner-container"><img src="' + members[9].image + '" alt="Team Member"><div class="member-details"><h4 class="name">' + members[9].name + '</h4><p class="designation">' + members[9].job + '</p><p>' + members[9].text + '</p><div class="member-social-link"><a target="_blank" href="' + members[9].github + '" class="twitter-btn"><i class="fa fa-github"></i></a>' + getMemberFacebook(members[9]) + '<a href="mailto:' + members[9].email + '" ><i class="fa fa-envelope"></i></a></div></div></div>')


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