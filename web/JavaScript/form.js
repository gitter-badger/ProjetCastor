/**
 * Created by Portable-Eddy on 09/12/2015.
 */

<script language="javascript">
    function ajoutFrais( numFrais){//ajoute une ligne de produits/qt� � la div "lignes"

        //masque le bouton en cours
        document.getElementById("btn-ajouter"+num).setAttribute("hidden","true");
        numFrais++;										//incr�mente le num�ro de ligne
        var lesFrais=document.getElementById("fraisHorsForfait");	//r�cup�re l'objet DOM qui contient les donn�es

       var unFrais ='<table class="table table-bordered"> ' +
           '<thead> ' +
           '<tr> ' +
           '<th><p>Date</p></th> ' +
           '<th><p>Montant</p></th> ' +
           '</tr> ' +
           '</thead> ' +
           '<tbody> ' +
           '<td> ' +
           '<input type="date"  id ="'+num+'Date" class="form-control"> ' +
           '</td> ' +
           '<td> ' +
           '<input type="number" value="0" id="'+num+'Montant " class="form-control"> ' +
           '</td> ' +
           '<table class="table table-bordered"> ' +
           '<thead> ' +
           '<tr> ' +
           '<th><p>Libelle</p></th> ' +
           '</tr> ' +
           '</thead> ' +
           '<tbody> ' +
           '<tr> ' +
           '<td> ' +
           '<textarea type="textarea" id="'+num+'Libelle" class="form-control"></textarea> ' +
           '</td> ' +
           '</tr> ' +
           '</tbody> ' +
           '</table> ' +
           '</tbody>' +
           '<buton class="btn btn-default" id="btn-ajouter'+num+'" value="+" onclick="ajoutLigne('+num+');">Ajouter Frais Hors Forfait</buton>';

        laDiv.appendChild(unFrais) ;						//l'ajoute � la DIV



    }
    </script>
