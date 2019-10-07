angular.module("app.pages.admin.directives.admin-directive", [])
    .directive("adminDirective", adminDirective)
function adminDirective() {
    var dependencies = ['$scope', 'appConfig', '$modalInstance', 'toastsService', 'authService', '$timeout', '$filter'];
    var admin = this
    admin.listTables = function() {
        admin.existingTables = admin.getExistingTablesFromLocalStorage();
    
        admin.tabelaMasi = "";
    
        for (let i = 0; i < existingTables.length; i++) {
            tabelaMasi += '<tr>';
            tabelaMasi += '<td style="text-align:center;border:2px solid black">' + (i + 1) + '</td>';
            tabelaMasi += '<td style="text-align:center;border:2px solid black">' + existingTables[i].id + '</td>';
            tabelaMasi += '<td style="text-align:center;border:2px solid black">' + existingTables[i].broj + '</td>';
            tabelaMasi += '<td style="text-align:center;border:2px solid black">' + existingTables[i].opis + '</td>';
            tabelaMasi += '<td style="text-align:center;border:2px solid black">' + '<button onclick="deleteTable(' + existingTables[i].id + ')" class=btn-danger style="width:100%">' + '<span class="glyphicon glyphicon-trash">' + '</span>' + " Избриши " + "</button>" + '</td>';
            tabelaMasi += '</tr>';
        }
    
        document.getElementById("tableContentMasi").innerHTML = tabelaMasi;
    }
    
    admin.addTables= function () {
      admin.opis = document.getElementById("opis").value;
        admin.broj = Number.parseInt(document.getElementById("broj").value);
        
        if (admin.opis == "" || admin.broj == null) {
            document.getElementById("modalInformation-content").innerHTML = "<p>Пополнете го празното поле!</p>";
            $("#modalInformation").modal();
            // alert("Пополнете го празното поле");
            return false;
        }
        else if (admin.redenBrojExists(broj)) {
            document.getElementById("modalInformation-content").innerHTML = '<p>Маса со број' + " " + admin.broj + " " + 'веќе постои!</p>';
            $("#modalInformation").modal();
            // alert("Маса со број" + " " + broj + " " + "веќе постои")
            return false;
        }
        else if (admin.broj < 1 ) {
            document.getElementById("modalInformation-content").innerHTML = '<p>Бројот' + " " + admin.broj + " " + 'кој го внесовте не може да се користи! Ве молиме внесете друг број</p>';
            $("#modalInformation").modal();
            return false;
        }
        else {
            admin.pushTableToLocalStorage({
                id: admin.getNewIdMasi(),
                broj: admin.broj,
                opis: admin.opis
            });
            $("#myModal").modal("hide");
        }
    
    }
    
    admin.getExistingTablesFromLocalStorage = function() {
        admin.existingTables = [];
        admin.tables = JSON.parse(localStorage.getItem("tables"));
        if (admin.tables != null || admin.tables != undefined) {
            for (let i = 0; i < admin.tables.length; i++) {
                admin.existingTables.push(admin.tables[i]);
            }
        }
        return admin.existingTables;
    }
    
    admin.setTablesInLocalStorage = function(arr) {
        localStorage.setItem("tables", JSON.stringify(arr));
    }
    
    admin.pushTableToLocalStorage = function(obj) {
        admin.existingTables = admin.getExistingTablesFromLocalStorage();
        admin.existingTables.push(obj);
        admin.refreshTable(admin.existingTables);
    }
    
    admin.redenBrojExists = function(redenBroj) {
        admin.existingTables = admin.getExistingTablesFromLocalStorage();
        if (admin.existingTables.length != 0) {
            for (let i = 0; i < admin.existingTables.length; i++) {
                if (admin.existingTables[i].broj == redenBroj) {
                    return 1;
                }
            }
        }
        return 0;
    }
    admin.getNewIdMasi = function() {
        admin.existingTables = admin.getExistingTablesFromLocalStorage();
        if (admin.existingTables.length != 0) {
            return (admin.existingTables[admin.existingTables.length - 1].id + 1);
        }
        return 1;
    }
    
    
    
    admin.deleteTable = function(id) {
        admin.existingTables = admin.getExistingTablesFromLocalStorage();
    
        for (let i = 0; i < admin.existingTables.length; i++) {
            if (admin.existingTables[i].id == id) {
                admin.existingTables.splice(i, 1);
                break;
            }
        }
    
        admin.refreshTable(admin.existingTables);
    }
    
    admin.refreshTable = function(existingTables) {
        admin.setTablesInLocalStorage(existingTables);
        admin.listTables();
    }
    
    admin.onResetButton2 = function() {
        document.getElementById("myForm").reset();
    }
    
    // KORISNICI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    
    admin.listUsers = function() {
        admin.existingUsers = JSON.parse(localStorage.getItem("users"));
        admin.tabelaKorisnici = "";
        for (let i = 0; i < existingUsers.length; i++) {
            tabelaKorisnici += '<tr>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + (i + 1) + '</td>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + existingUsers[i].id + '</td>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + existingUsers[i].code + '</td>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + existingUsers[i].role + '</td>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + existingUsers[i].ime + '</td>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + existingUsers[i].prezime + '</td>';
            tabelaKorisnici += '<td style="text-align:center;border:2px solid black">' + '<button onclick="deleteUser(' + existingUsers[i].id + ')" class=btn-danger style="width:100%">' + '<span class="glyphicon glyphicon-trash">' + '</span>' + " Избриши " + "</button>" + '</td>';
            tabelaKorisnici += '</tr>';
        }
    
        document.getElementById("tableContentKorisnici").innerHTML = tabelaKorisnici;
    }
    
    
    
    
    
















    return {
        restrict: 'EA',
        templateUrl: '/app/pages/admin/directives/admin-directive.html'

    }
}

