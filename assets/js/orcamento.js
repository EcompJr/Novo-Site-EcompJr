function orca(){

    var orcamentoTotal = 0;

    if(document.getElementById('design__').checked || document.getElementById('home__').checked ||document.getElementById('blog').checked ||document.getElementById('blog_filter').checked){
        orcamentoTotal = orcamentoTotal + 800;
    }

    if(document.getElementById('categoria_posts').checked){
        orcamentoTotal = orcamentoTotal + 100;
    }
    if(document.getElementById('listagem_destaque').checked){
        orcamentoTotal = orcamentoTotal + 100;
    }
    if(document.getElementById('related_Posts').checked){
        orcamentoTotal = orcamentoTotal + 150;
    }
    if(document.getElementById('Share').checked){
        orcamentoTotal = orcamentoTotal + 150;
    }
    if(document.getElementById('Likes').checked){
        orcamentoTotal = orcamentoTotal + 50;
    }
    if(document.getElementById('Count_acess').checked){
        orcamentoTotal = orcamentoTotal + 50;
    }
    if(document.getElementById('adm_register').checked){
        orcamentoTotal = orcamentoTotal + 150;
    }
    if(document.getElementById('anonimous_coment').checked){
        orcamentoTotal = orcamentoTotal + 300;
    }
    if(document.getElementById('videos').checked){
        orcamentoTotal = orcamentoTotal + 200;
    }
    if(document.getElementById('newsletter').checked){
        orcamentoTotal = orcamentoTotal + 150;
    }
    if(document.getElementById('geleria').checked){
        orcamentoTotal = orcamentoTotal + 200;
    }
    
    var result = document.getElementById("result");

    result.textContent = "R$ "+orcamentoTotal+",00";
}